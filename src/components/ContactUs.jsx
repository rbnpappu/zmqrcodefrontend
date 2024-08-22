import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './module/navbar.module.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import CustomAlert from './CustomAlertForSubmision';

const ContactUs = () => {
    const [contactPersonQueryData, setContactPersonData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [submitEnable, setEnable] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async () => {
        const updatedData = JSON.stringify(contactPersonQueryData); // Correct method call
        try {
            const response = await axios.post('http://localhost:3000/contactus', updatedData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response); // Log response to ensure it's successful
            setShowAlert(true); // Show custom alert on successful submission
            // Reset form fields
            setContactPersonData({
                name: "",
                phone: "",
                email: "",
                message: ""
            });
            setEnable(false); // Disable the button after form submission
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContactPersonData({
            ...contactPersonQueryData,
            [name]: value
        });

        // Check if any field is empty to enable/disable the submit button
        const isEmpty = Object.values(contactPersonQueryData).some(field => field.trim() === "");
        setEnable(!isEmpty);
    };

    const color = submitEnable ? '#1D91AA' : '#6a6d6d'; // Ensure color code is correctly formatted

    return (
        <div id="contact-section" className='flex justify-center items-center rounded-lg p-5 m-[16px] rounded-[11px]' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
            <div className={styles.contactUs}>
                <img
                    src='./contactUs.jpeg'
                    alt='Contact Us'
                />

                <div className="w-full max-w-lg">
                    <label className="text-2xl font-bold font-raleway mb-4 block">Contact Us</label>

                    <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                        <FontAwesomeIcon icon={faUser} size="1x" color="#1D91AA" />
                        <input
                            name="name"
                            value={contactPersonQueryData.name}
                            onChange={handleChange}
                            className="border-none ml-2 p-1 w-full focus:outline-none"
                            placeholder="Please Type UserName"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg w-full m-[5px] p-3">
                        <textarea
                            name="message"
                            value={contactPersonQueryData.message}
                            onChange={handleChange}
                            className="border-none ml-2 p-3 w-full focus:outline-none"
                            placeholder="Send The Message"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                        <input
                            name="phone"
                            value={contactPersonQueryData.phone}
                            onChange={handleChange}
                            className="border-none ml-2 p-1 w-full focus:outline-none"
                            type='text'
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                        <input
                            name="email"
                            value={contactPersonQueryData.email}
                            onChange={handleChange}
                            className="border-none ml-2 p-1 w-full focus:outline-none"
                            type='email'
                            placeholder="Enter the Email"
                        />
                    </div>
                    <button
                        className={`rounded-[11px] w-full text-black bg-${color} hover:bg-white hover:text-[#1D91AA] transition duration-300 ease-in-out p-2 active:bg-[#1D91AA] active:text-white cursor-pointer`}
                        style={{
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                        disabled={!submitEnable}
                        onClick={handleSubmit}
                    >
                        <span className="inline-block transition-transform duration-300 ease-in-out">
                            Send Message
                        </span>
                    </button>

                </div>
            </div>
            {showAlert && (
                <CustomAlert
                    message="Thank you for contacting us. We'll get back to you soon."
                    onClose={() => setShowAlert(false)}
                />
            )}
        </div>
    );
};

export default ContactUs;
