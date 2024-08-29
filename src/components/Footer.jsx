import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './module/navbar.module.css';
import { useState } from 'react';
import axios from 'axios'; // Import axios for API call
import CustomAlert from './CustomAlertForSubmision';

const Footer = () => {
    const openLocation = () => {
        const location = 'Ramaseetha Complex, 4th Floor, 5/4, Arundelpet, Guntur, AP, India 522002';
        const encodedAddress = encodeURIComponent(location);
        const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        window.open(googleMapsURL, '_blank');
    };

    const [showAlert, setShowAlert] = useState(false);
    const [emailTextId, setEmailTextId] = useState("");

    const handleChange = (e) => {
        setEmailTextId(e.target.value);
    };

    const handleSubmit = async () => {
        const updatedData = JSON.stringify({ email: emailTextId }); // Correctly format data
        try {
            const response = await axios.post('http://localhost:3001/reachus', updatedData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response); // Log response to ensure it's successful
            setShowAlert(true); // Show custom alert on successful submission
            setEmailTextId(""); // Reset input field
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const isEmailEmpty = emailTextId.trim() === "";
    const buttonColor = isEmailEmpty ? '#6a6d6d' : '#1D91AA';

    return (
        <div className="bg-[#047171] text-white flex w-full flex-col p-6">
            <label className="text-2xl font-bold font-raleway mb-4 sm:text-xl">
                Stay connected! Sign up for our newsletter to be the first to receive exclusive offers, updates, and expert tips.
            </label>
            <div className="flex mb-6 justify-center">
                <input
                    className="border-none ml-2 p-1 text-black focus:outline-none w-[50%]"
                    placeholder="Enter Your Email Address"
                    value={emailTextId}
                    onChange={handleChange}
                />
                <button 
                    className="bg-[#fff] p-2 rounded-r" 
                    disabled={isEmailEmpty}
                    style={{ backgroundColor: buttonColor }}
                    onClick={handleSubmit} // Call handleSubmit on button click
                >
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" color="#fff" />
                </button>
            </div>

            <div className="flex flex-col mb-6">
                <label className="text-2xl font-bold font-raleway mb-4">
                    Follow Us for Insights and Announcements!
                </label>
                <div className="flex justify-center mt-2">
                    <a href='https://www.instagram.com/zmqrcode?igsh=YzljYTk1ODg3Zg==' className="mr-2 p-1">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
                    </a>
                    <a href='https://www.facebook.com/people/ZMQRCodes/61559950102078/' className="mr-2 p-1">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" />
                    </a>
                    <a href='https://x.com/i/flow/login?redirect_after_login=%2Fzmqrcode' className="mr-2 p-1">
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#fff" />
                    </a>
                </div>
            </div>

            <div className={styles.contactUsContainer}>
                <div className="flex flex-col items-center m-4 w-full sm:w-auto">
                    <label className="text-2xl font-bold font-raleway text-white mb-4">
                        Contact Us
                    </label>
                    <div className="flex flex-col items-center justify-center mt-2">
                        <div className='flex items-center mb-2'>
                            <FontAwesomeIcon icon={faPhone} className="mr-2" color='#fff' />
                            <p className='text-white font-bold font-raleway'>86396 83839</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" color='#fff' />
                            <p className='text-white font-bold font-raleway'>connect@zmqrcode.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center m-4 w-full sm:w-auto">
                    <label className="text-2xl font-bold font-raleway text-white mb-4">
                        Company
                    </label>
                    <div className="flex flex-col justify-center mt-2">
                        <Link to="/services" className="text-white text-sm py-1">QR CODE SERVICES</Link>
                        <AnchorLink href="#about-section" className="text-white text-sm py-1">About Us</AnchorLink>
                        <AnchorLink href="#contact-section" className="text-white text-sm py-1">Contact Us</AnchorLink>
                        <Link to="/faq" className="text-white text-lg py-2 px-4">FAQ</Link>
                        <Link to="/comingsoon" className="text-white text-lg py-2 px-4">Pricing</Link>
                        <Link to="/comingsoon" className="text-white text-sm py-1">Languages</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center m-4 w-full sm:w-auto">
                    <label className="text-2xl font-bold font-raleway text-white mb-4">
                        Terms
                    </label>
                    <div className="flex flex-col justify-center mt-2">
                        <Link to='/terms&co' className='text-white text-sm py-1'>Terms And Conditions</Link>
                        <Link to='/terms&co' className='text-white text-sm py-1'>Privacy Policy</Link>
                        <Link to='/terms&co' className='text-white text-sm py-1'>Cookie Policy</Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-[16px] sm:items-center justify-between sm:mt-0">
                <div className='flex flex-col items-center mb-6'>
                    <img
                        src='/ZMQRCODEORIGINALOGO.jpg'
                        className='w-[155px] h-[95px] rounded-[11px] mb-4'
                        alt='Icon'
                    />
                    <div className={styles.footerInfoContainer}>
                        <p className='text-2xl font-bold font-raleway text-white mb-4 sm:mb-2'>
                            Generate a unique QR Code for your brand with us...
                        </p>
                        <div className='flex items-center sm:items-start'>
                            <FontAwesomeIcon icon={faMapMarker} color='#fff' />
                            <button onClick={openLocation} className='text-white underline ml-2'>
                                Ramaseetha Complex, 4th Floor, 5/4, Arundelpet, Guntur, AP, India 522002
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <label className='text-2xl font-bold font-raleway text-white mt-6 sm:text-xl'>
                © 2024. All Rights Reserved. ZM QR Code
            </label>
            {showAlert && (
                <CustomAlert 
                    message={"Thanks for reaching out. Our team will get back to you shortly."} 
                    onClose={() => setShowAlert(false)} // Properly set the state to false on close
                />
            )}
        </div>
    );
};

export default Footer;
