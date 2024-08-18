import React from 'react';
import styles from './module/navbar.module.css';

const AboutUsHomePage = () => {
    return (
        <div  id="about-section" className={styles.AboutUsHomePage}>
            <label className="text-2xl font-bold font-raleway">About Us</label>
            <div className={styles.AboutUsHomePageContainer}>
                <img
                    src="/close-up-hands-scanning-qr-code.jpg"
                    className="rounded-full w-[150px] h-[150px]"
                    alt="About Us"
                />

                <p className="text-[18px]  font-bold font-raleway ml-4 justify-center items-center">
                    We offer Advanced QR code Solutions for your businesses, including creating unique QR codes, providing analytics, and integrating videos and images. Our services also cover digital business cards, event ticketing, and social media integration for better connections with audiences, aiming to streamline operations and marketing strategies effectively.
                </p>
            </div>
            <div className={styles.AboutUsHomePageContainer}>
            <img
                    src="/Vission.jpg"
                    className="rounded-full w-[150px] h-[150px]"
                    alt="About Us"
                />
              
              
                <div className="flex flex-col items-center mt-2">
                <label className="text-2xl font-bold font-raleway">Vision</label>
                    <p className="text-[18px] font-bold font-raleway justify-center items-center">
                        We offer Advanced QR code Solutions for your businesses, including creating unique QR codes, providing analytics, and integrating videos and images. Our services also cover digital business cards, event ticketing, and social media integration for better connections with audiences, aiming to streamline operations and marketing strategies effectively.
                    </p>
                </div>
            </div>
            <div className={styles.AboutUsHomePageContainer}>
            <img
                    src="/mission.png"
                    className="rounded-full w-[150px] h-[150px]"
                    alt="mission"
                />
                  <div className="flex flex-col items-center mt-2">
                <label className="text-2xl font-bold font-raleway">Mission</label>
                <div className="flex items-center mt-2">
                    <p className="text-[18px] font-bold font-raleway justify-center items-center">
                        To offer a comprehensive suite of QR code services that enhance user engagement, streamline operations, and provide actionable insights through advanced analytics.
                    </p>
                </div>
                </div>
            </div>
            <div className={styles.AboutUsHomePageContainer}>
            <img
                    src="/Goals.jpg"
                    className="rounded-full w-[150px] h-[150px]"
                    alt="Goals"
                />
                <div className="flex flex-col items-center mt-2">
                <label className="text-2xl font-bold font-raleway">Goals</label>
                <div className="flex items-center mt-2">
                    <p className="text-[18px] font-bold font-raleway justify-center items-center">
                        To continuously innovate and provide customized QR code designs that cater to the unique needs of each business.
                       
                        To maintain a user-friendly platform that simplifies the creation and management of QR codes for businesses of all sizes.
                        
                        To ensure customer satisfaction through reliable support and versatile services that cover various aspects of digital marketing and operations.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHomePage;
