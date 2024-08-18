import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUP = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [reTypepasswordVisible, setReTypePasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const ReTypetogglePasswordVisibility = () => {
        setReTypePasswordVisible(!passwordVisible);
    };
    return (
        <div className="flex  flex-col  w-[full] rounded-lg p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faUser} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    placeholder="Please Type Username"
                />
            </div>
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faEnvelope} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    type='Email'
                    placeholder="Please Enter You Mail"
                />
            </div>
            <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                <FontAwesomeIcon icon={faPhone} size="1x" color="#1D91AA" />
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    type='Number'
                    placeholder="Please Enter Your Phone Number"
                />
            </div>
            <div className="flex items-center border rounded-lg w-full m-[5px] p-3">
                <input
                    className="border-none ml-2 p-3 w-full focus:outline-none"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Please Type Password"
                />
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} size="1x" color="#1D91AA" onClick={togglePasswordVisibility} />
            </div>
            <div className="flex items-center border rounded-lg w-full  m-[5px] p-1">
                <input
                    className="border-none ml-2 p-1 w-full focus:outline-none"
                    type={reTypepasswordVisible ? 'text' : 'password'}
                    placeholder="Please Type Password"
                />
                <FontAwesomeIcon icon={reTypepasswordVisible ? faEyeSlash : faEye} size="1x" color="#1D91AA" onClick={ReTypetogglePasswordVisibility} />
            </div>
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
                    Sign Up
                </span>
            </button>



        </div>
    );
};

export default SignUP;
