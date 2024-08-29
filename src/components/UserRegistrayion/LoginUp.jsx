import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleLoginButton from '../SocialLoginbuttons/GoogleSocialLoginButton';
import FacebookLoginButton from '../SocialLoginbuttons/FaceBookSocialLogin';
import CustomAlert from '../CustomAlertForSubmision';

const LoginUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [forgetPassword, setForgetPassword] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState({ show: false, message: "" });
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [userResetData, setUserResetData] = useState({ email: "", otp: "", newPassword: "" });

    const [errors, setErrors] = useState({ username: "", password: "", email: "", otp: "", newPassword: "" });
    const [submitEnable, setEnable] = useState(false);

    const navigate = useNavigate();

    // Toggle password visibility
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    // Handle login submission
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', userData, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 200) {
                setAlert({ show: true, message: 'Login successful' });
                setTimeout(()=>{
                    if(!alert.show)
                        {navigate('/services');
                        }
                },2000)
           
                setUserData({ username: "", password: "" });
                setAlert({ show: true, message: 'Welcome To ZM QR Code.in' });
            } else {
                setAlert({ show: true, message: 'Login failed' });
            }
        } catch (error) {
            setAlert({ show: true, message: 'An error occurred during login' });
        }
    };







    // Handle email submission for password reset
    const handleEmailSubmit = async () => {
        if (!email.trim()) {
            setAlert({ show: true, message: 'Please enter a valid email address' });
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/forgotPassword', { email }, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 200) {
                setForgetPassword(false);
                setResetPassword(true);
                setUserResetData(prev => ({ ...prev, email }));
                setAlert({ show: true, message: 'Check Your Regsiter Email Otp is sent' });
            } else {
                setAlert({ show: true, message: 'Failed to submit email' });
            }
        } catch (error) {
            setAlert({ show: true, message: 'An error occurred during email submission' });
        }
    };

    // Handle password reset confirmation
    const handleConfirmPassword = async () => {
        if (!userResetData.otp.trim() || !userResetData.newPassword.trim()) {
            setAlert({ show: true, message: 'Please fill in both OTP and new password fields' });
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/resetPassword', JSON.stringify(userResetData), {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.status === 200) {
                setAlert({ show: true, message: 'Password reset successful' });
                setResetPassword(false);
                setForgetPassword(false);
                setUserData({ username: "", password: "" });
                setAlert({ show: true, message: 'Your Password is reset ' });
            } else {
                setAlert({ show: true, message: 'Password reset failed' });
            }
        } catch (error) {
            console.error('Error Details:', error.response ? error.response.data : error.message); // Log error details
            setAlert({ show: true, message: 'An error occurred during password reset' });
        }
    };

    // Handle input change for login and password reset forms
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handleChangeResetPassword = (e) => {
        const { name, value } = e.target;
        setUserResetData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    // Validate fields and set errors
    const validateField = (name, value) => {
        let error = "";
        switch (name) {
            case "username":
                error = usernameRegex.test(value) ? "" : 'Username should be 3-16 characters long and can include letters, numbers, and underscores.';
                break;
            case "password":
            case "newPassword":
                error = passwordRegex.test(value) ? "" : 'Password must be at least 12 characters long, including one uppercase letter, one lowercase letter, one digit, and one special character.';
                break;
            case "email":
                error = emailRegex.test(value) ? "" : 'Invalid email format.';
                break;
            case "otp":
                error = value.trim() ? "" : 'OTP is required.';
                break;
            default:
                break;
        }
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const validateEmail = (value) => {
        const error = emailRegex.test(value) ? "" : 'Invalid email format.';
        setErrors(prev => ({ ...prev, email: error }));
    };

    // Validation patterns
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the submit button should be enabled
    useEffect(() => {
        const isEmpty = Object.values(userData).some(field => field.trim() === "");
        const hasErrors = Object.values(errors).some(error => error.trim() !== "");
        setEnable(!isEmpty && !hasErrors);
    }, [userData, errors]);

    // Dynamic styling based on submitEnable state
    const color = submitEnable ? '#1D91AA' : '#6a6d6d';
    const textColor = submitEnable ? '#ffffff' : '#b0b0b0';

    return (
        <div className="flex flex-col w-full rounded-lg p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            {!forgetPassword && !resetPassword && (
                <>
                    {/* Username Input */}
                    <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                        <FontAwesomeIcon icon={faUser} size="1x" color="#1D91AA" />
                        <input
                            className="border-none ml-2 p-1 w-full focus:outline-none"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                            placeholder="Enter the Username"
                        />

                    </div>
                    {errors.username && <span className="text-red-500">{errors.username}</span>}
                    {/* Password Input */}
                    <div className="flex items-center border rounded-lg w-full m-[5px] p-3">
                        <input
                            className="border-none ml-2 p-3 w-full focus:outline-none"
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Enter The Password"
                        />
                        <FontAwesomeIcon
                            icon={passwordVisible ? faEyeSlash : faEye}
                            size="1x"
                            color="#1D91AA"
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer"
                        />

                    </div>
                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                    {/* Login Button */}
                    <button
                        className="rounded-[11px] w-full text-white"
                        style={{
                            backgroundColor: color,
                            color: textColor,
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            transform: "scale(1)",
                            transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out"
                        }}
                        disabled={!submitEnable}
                        onClick={handleSubmit}
                    >
                        Login
                    </button>

                    {/* Forgot Password */}
                    <button
                        className="flex justify-center dashed border-none bg-white text-[#1D91AA] mt-2"
                        onClick={() => setForgetPassword(true)}
                        style={{ textDecoration: 'underline' }}
                    >
                        Forgot Password?
                    </button>

                    {/* Social Login Buttons */}
                    <div className="flex flex-col mt-4">
                        <GoogleLoginButton />
                        <FacebookLoginButton />
                    </div>
                </>
            )}

            {/* Forgot Password Modal */}
            {forgetPassword && !resetPassword && (
                <div className="w-full rounded-lg p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <h2 className="text-center text-xl mb-4 ">Forgot Password</h2>
                    <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                        <input
                            className="border-none ml-2 p-1 w-full focus:outline-none"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChangeEmail}
                        />

                    </div>
                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                    <button
                        className="rounded-[11px] w-full text-white"
                        style={{
                            backgroundColor: !email.trim() ? '#6a6d6d' : '#1D91AA',
                            color: textColor,
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            transform: "scale(1)",
                            transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out"
                        }}
                        disabled={!email.trim()} // Disable if email is empty or just whitespace
                        onClick={handleEmailSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="flex justify-center dashed border-none bg-white text-[#1D91AA] mt-2"
                        onClick={() => setForgetPassword(false)}
                        style={{ textDecoration: 'underline' }}
                    >
                        Back to Login
                    </button>
                </div>
            )}

            {/* Reset Password Modal */}
            {resetPassword && (
                <div className="w-full rounded-lg p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <h2 className="text-center text-xl mb-4">Reset Password</h2>
                    <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                        <input
                            className="border-none ml-2 p-1 w-full focus:outline-none"
                            name="otp"
                            type="text"
                            placeholder="Enter OTP"
                            value={userResetData.otp}
                            onChange={handleChangeResetPassword}
                        />

                    </div>
                    {errors.otp && <span className="text-red-500">{errors.otp}</span>}
                    <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                        <input
                            className="border-none ml-2 p-1 w-full focus:outline-none"
                            name="newPassword"
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Enter New Password"
                            value={userResetData.newPassword}
                            onChange={handleChangeResetPassword}
                        />
                        <FontAwesomeIcon
                            icon={passwordVisible ? faEyeSlash : faEye}
                            size="1x"
                            color="#1D91AA"
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer"
                        />

                    </div>
                    {errors.newPassword && <span className="text-red-500">{errors.newPassword}</span>}
                    <button
                        className="rounded-[11px] w-full text-white"
                        style={{
                            backgroundColor: !email.trim() ? '#6a6d6d' : '#1D91AA',
                            color: textColor,
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            transform: "scale(1)",
                            transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out"
                        }}
                        onClick={handleConfirmPassword}
                    >
                        Reset Password
                    </button>
                    <button
                        className="flex justify-center dashed border-none bg-white text-[#1D91AA] mt-2"
                        onClick={() => setResetPassword(false)}
                        style={{ textDecoration: 'underline' }}
                    >
                        Back to Login
                    </button>
                </div>
            )}

        {/* Alert Message */}

            {alert.show && (
                <CustomAlert
                    showAlert={alert.show}
                    onClose={() => {
                        setAlert(prevAlert => ({
                            ...prevAlert,
                            show: false,
                            message: ""
                        }));
                    }}
                    message={alert.message}
                    duration={4000}
                />
            )}

        </div>
    );
};

export default LoginUp;