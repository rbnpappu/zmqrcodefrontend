import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styles from '../module/navbar.module.css';

const LoginUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex flex-col w-full rounded-lg p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            {/* Username Input */}
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faUser} size="1.5x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    placeholder="Please Type Username"
                />
            </div>
            
            {/* Password Input */}
            <div className="flex items-center border rounded-lg w-full m-[5px] p-3">
                <input
                    className="border-none ml-2 p-3 w-full focus:outline-none"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Please Type Password"
                />
                <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                    size="1.5x"
                    color="#1D91AA"
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                />
            </div>
            
            {/* Login Button */}
            <button
                className="rounded-[11px] w-full text-white bg-[#1D91AA] hover:bg-white hover:text-[#1D91AA] transition duration-300 ease-in-out p-2 active:bg-[#1D91AA] active:text-white"
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    transform: "scale(1)",
                }}
            >
                <span
                    className="inline-block transition-transform duration-300 ease-in-out"
                    style={{ transform: "scale(1)" }}
                >
                    Login
                </span>
            </button>
            
            <label className="mt-2">Social Login</label>

            <div className={styles.socialBox}>
                {/* Google Button */}
                <button
                    className="flex items-center m-[16px] justify-center px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{ backgroundColor: '#1D91AA', color: 'white', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 10px' }}
                >
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                    <span>Sign in with Google</span>
                </button>

                {/* LinkedIn Button */}
                <button
                    className="flex items-center  m-[16px] justify-center px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{ backgroundColor: 'white', color: '#1D91AA', border: `2px solid #1D91AA`, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 10px' }}
                >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <span>Sign in with LinkedIn</span>
                </button>
            </div>
        </div>
    );
};

export default LoginUp;
