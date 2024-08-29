import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CustomAlert from '../CustomAlertForSubmision';
import GoogleLoginButton from '../SocialLoginbuttons/GoogleSocialLoginButton';
import FacebookLoginButton from '../SocialLoginbuttons/FaceBookSocialLogin';

// Regular expressions moved outside the component for performance
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);
    const [submitEnable, setSubmitEnable] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        retypePassword: "",
        mobile: "",
        email: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
        retypePassword: "",
        email: "",
        mobile: ""
    });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));

        let errorMessage = "";

        switch (name) {
            case "username":
                errorMessage = !usernameRegex.test(value) ? 'Username should be 3-16 characters long and can include letters, numbers, and underscores.' : "";
                break;
            case "password":
                errorMessage = !passwordRegex.test(value) ? 'Password must be at least 12 characters long, including one uppercase letter, one lowercase letter, one digit, and one special character.' : "";
                break;
            case "retypePassword":
                errorMessage = userData.password !== value ? 'Passwords do not match.' : "";
                break;
            case "email":
                errorMessage = !emailRegex.test(value) ? 'Invalid email address.' : "";
                break;
            case "mobile":
                errorMessage = !/^[0-9]{10}$/.test(value) ? 'Phone number must be 10 digits.' : "";
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    }, [userData]);

    useEffect(() => {
        const isEmpty = Object.values(userData).some(field => field.trim() === "");
        const hasErrors = Object.values(errors).some(error => error.trim() !== "");
        const passwordsMatch = userData.password === userData.retypePassword;
        setSubmitEnable(!isEmpty && !hasErrors && passwordsMatch);
    }, [userData, errors]);

    const togglePasswordVisibility = () => setPasswordVisible(prevState => !prevState);
    const toggleRetypePasswordVisibility = () => setRetypePasswordVisible(prevState => !prevState);

    const handleSubmit = async () => {
        const { email, mobile, username, password, retypePassword } = userData;

        // Validate form data here if needed
        if (password !== retypePassword) {
            setErrors(prevErrors => ({
                ...prevErrors,
                retypePassword: 'Passwords do not match'
            }));
            return;
        }

        const updatedData = JSON.stringify({ email, mobile, username, password,retypePassword });

        try {
            const response = await axios.post('http://localhost:3001/registerUser', updatedData, {
                headers: { 'Content-Type': 'application/json' }
            });

            // Success handling
            setShowAlert(true);
            setAlertMessage(`Registration successful for user: ${response.data.data.username}`);
            
            // Reset form fields
            setUserData({ username: "", password: "", mobile: "", email: "", retypePassword: "" });
            setErrors({ username: "", password: "", retypePassword: "", email: "", mobile: "" });
            setSubmitEnable(false);
        } catch (error) {
            // Error handling
            let errorMessage = 'An error occurred during registration.';

            if (error.response) {
                // Server responded with a status other than 2xx
                const status = error.response.status;
                const responseMessage = error.response.data.message || error.response.statusText;

                if (status === 400) {
                    errorMessage = `Bad request: ${responseMessage}`;
                } else if (status === 401) {
                    errorMessage = `Unauthorized: ${responseMessage}`;
                } else if (status === 500) {
                    errorMessage = `Server error: ${responseMessage}`;
                } else {
                    errorMessage = `Error: ${responseMessage}`;
                }
            } else if (error.request) {
                // The request was made but no response was received
                errorMessage = 'No response from the server. Please check your network connection.';
            } else {
                // Other errors
                errorMessage = error.message || 'An unexpected error occurred. Please try again.';
            }

            setShowAlert(true);
            setAlertMessage(errorMessage);
        }
    };


    return (
        <div className="flex flex-col w-full rounded-lg p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            {/* Username Field */}
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faUser} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="username"
                    placeholder="Enter the Username"
                    value={userData.username}
                    onChange={handleChange}
                    aria-describedby="usernameError"
                />
            </div>
            {errors.username && <label id="usernameError" className="text-red-500 text-[12px] font-raleway">{errors.username}</label>}

            {/* Email Field */}
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faEnvelope} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="email"
                    type="email"
                    placeholder="Enter the Mail Id"
                    value={userData.email}
                    onChange={handleChange}
                    aria-describedby="emailError"
                />
            </div>
            {errors.email && <label id="emailError" className="text-red-500 text-[12px] font-raleway">{errors.email}</label>}

            {/* Mobile Field */}
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faPhone} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="mobile"
                    type="tel"
                    placeholder="Enter the Phone Number"
                    value={userData.mobile}
                    onChange={handleChange}
                    aria-describedby="mobileError"
                />
            </div>
            {errors.mobile && <label id="mobileError" className="text-red-500 text-[12px] font-raleway">{errors.mobile}</label>}

            {/* Password Field */}
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} onClick={togglePasswordVisibility} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="password"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Enter the Password"
                    value={userData.password}
                    onChange={handleChange}
                    aria-describedby="passwordError"
                />
            </div>
            {errors.password && <label id="passwordError" className="text-red-500 text-[12px] font-raleway">{errors.password}</label>}

            {/* Retype Password Field */}
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={retypePasswordVisible ? faEye : faEyeSlash} onClick={toggleRetypePasswordVisibility} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="retypePassword"
                    type={retypePasswordVisible ? 'text' : 'password'}
                    placeholder="Re-type the Password"
                    value={userData.retypePassword}
                    onChange={handleChange}
                    aria-describedby="retypePasswordError"
                />
            </div>
            {errors.retypePassword && <label id="retypePasswordError" className="text-red-500 text-[12px] font-raleway">{errors.retypePassword}</label>}

            {/* Submit Button */}
            <div className="flex justify-center">
                <button
                    className={`w-full p-2 font-raleway text-white rounded-md my-4 text-[14px] ${submitEnable ? 'bg-[#1D91AA]' : 'bg-[#6a6d6d]'}`}
                    onClick={handleSubmit}
                    disabled={!submitEnable}
                >
                    Register
                </button>
            </div>

             {/* Social Login Buttons */}
             <div className="flex flex-col mt-4">
                        <GoogleLoginButton />
                        <FacebookLoginButton />
                    </div>

            {/* Alert */}
            {showAlert && (
                <CustomAlert
                    showAlert={showAlert}
                    onClose={()=>setShowAlert(false)}
                    message={alertMessage}
                    duration={4000}
                />
            )}
        </div>
    );
};

export default SignUp;
