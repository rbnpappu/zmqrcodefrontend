import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomAlert from '../CustomAlertForSubmision';

const SignUP = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);
    const [submitEnable, setSubmitEnable] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertmessage, setAlertMessage] = useState("");

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

    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));

        let errorMessage = "";

        switch (name) {
            case "username":
                if (!usernameRegex.test(value)) {
                    errorMessage = 'Username should be 3-16 characters long and can include letters, numbers, and underscores.';
                }
                break;
            case "password":
                if (!passwordRegex.test(value)) {
                    errorMessage = 'Password must be at least 12 characters long, including one uppercase letter, one lowercase letter, one digit, and one special character.';
                }
                break;
            case "retypePassword":
                if (userData.password !== value) {
                    errorMessage = 'Passwords do not match.';
                }
                break;
            case "email":
                if (!emailRegex.test(value)) {
                    errorMessage = 'Invalid email address.';
                }
                break;
            case "mobile":
                if (!/^[0-9]{10}$/.test(value)) {
                    errorMessage = 'Phone number must be 10 digits.';
                }
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    };

    useEffect(() => {
        const isEmpty = Object.values(userData).some(field => field.trim() === "");
        const hasErrors = Object.values(errors).some(error => error.trim() !== "");
        const passwordsMatch = userData.password === userData.retypePassword;
        setSubmitEnable(!isEmpty && !hasErrors && passwordsMatch);
    }, [userData, errors]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const toggleRetypePasswordVisibility = () => {
        setRetypePasswordVisible(prevState => !prevState);
    };

    const handleSubmit = async () => {
        const { email, mobile, username, password, retypePassword } = userData;
    
        const updatedData = JSON.stringify({ email, mobile, username, password, retypePassword });
    
        try {
            const response = await axios.post('http://localhost:3000/registerUser', updatedData, {
                headers: { 'Content-Type': 'application/json' }
            });
            setShowAlert(true);
            setAlertMessage(response.data.data.username)
            // Reset form fields
            setUserData({ username: "", password: "", mobile: "", email: "",retypePassword: ""  });
            setErrors({ username: "", password: "", retypePassword: "", email: "", mobile: ""});
            setSubmitEnable(false);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const color = submitEnable ? '#1D91AA' : '#6a6d6d';

    return (
        <div className="flex flex-col w-full rounded-lg p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faUser} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="username"
                    placeholder="Enter the Username"
                    value={userData.username}
                    onChange={handleChange}
                />
            </div>
            {errors.username && <label className="text-red-500 text-[12px] font-raleway">{errors.username}</label>}

            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faEnvelope} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="email"
                    type="email"
                    placeholder="Enter the Mail Id"
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>
            {errors.email && <label className="text-red-500 text-[12px] font-raleway">{errors.email}</label>}

            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faPhone} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    name="mobile"
                    type="tel"
                    placeholder="Enter the Phone Number"
                    value={userData.mobile}
                    onChange={handleChange}
                />
            </div>
            {errors.mobile && <label className="text-red-500 text-[12px] font-raleway">{errors.mobile}</label>}

            <div className="flex items-center border rounded-lg w-full m-[5px] p-3">
                <input
                    className="border-none ml-2 p-3 w-full focus:outline-none"
                    name="password"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Enter the Password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} size="1x" color="#1D91AA" onClick={togglePasswordVisibility} />
            </div>
            {errors.password && <label className="text-red-500 text-[12px] font-raleway">{errors.password}</label>}

            <div className="flex items-center border rounded-lg w-full m-[5px] p-3">
                <input
                    className="border-none ml-2 p-3 w-full focus:outline-none"
                    name="retypePassword"
                    type={retypePasswordVisible ? 'text' : 'password'}
                    placeholder="Confirm the Password"
                    value={userData.retypePassword}
                    onChange={handleChange}
                />
                <FontAwesomeIcon icon={retypePasswordVisible ? faEyeSlash : faEye} size="1x" color="#1D91AA" onClick={toggleRetypePasswordVisibility} />
            </div>
            {errors.retypePassword && <label className="text-red-500 text-[12px] font-raleway">{errors.retypePassword}</label>}

            <button
                className="rounded-[11px] w-full text-white"
                style={{
                    backgroundColor: color,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    transform: "scale(1)",
                    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out"
                }}
                disabled={!submitEnable}
                onClick={handleSubmit}
            >
                <span className="inline-block transition-transform duration-300 ease-in-out">
                    Sign Up
                </span>
            </button>
            {showAlert && <CustomAlert 
                message={`Welcome to Zm Qr Code.in${alertmessage}`} 
                onClose={() => setShowAlert(false)}
            />}
        </div>
    );
};

export default SignUP;
