import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavBar from '../NavBar';
import styles from '../module/navbar.module.css';
import AboutUsHomePage from '../AboutUsHomePage';
import ContactUs from '../ContactUs';
import services from '../resources/services.json'

const QrCode = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className="flex justify-start p-2">
                    <Link to="/" className="text-[16px] underline decoration-[#1D91AA]">
                        Home
                    </Link>
                </div>
            <div className={styles.qrCodeSection}>
          

                <div className={styles.qrCodeContent}>
                    <label className={styles.qrCodeTitle}>ZM QR Code Services</label>
                    <div className={styles.qrCodeTextSection}>
                        <p className={styles.qrCodeDescription}>
                            As the preferred QR Code solution provider for leading global brands, we offer comprehensive services for all your QR Code marketing and business requirements.
                        </p>
                        <div className={styles.qrCodeContentWrapper}>
                            <img
                                src="/QrCodeServices.jpg" // Ensure this path is correct
                                className={styles.qrCodeImage}
                                alt="QR Code"
                            />
                            <ul className={styles.qrCodeList}>
                                <li className={styles.qrCodeListItem}>
                                    Enhance customer engagement and elevate scan rates by over 50% with our exclusive QR shapes and stickers.
                                </li>
                                <li className={styles.qrCodeListItem}>
                                    Gain deeper insights into your campaign performance with advanced real-time analytics.
                                </li>
                                <li className={styles.qrCodeListItem}>
                                    Streamline your QR operations with automated bulk uploads and folder organization.
                                </li>
                                <li className={styles.qrCodeListItem}>
                                    Begin with our free plan and seamlessly transition to customized paid options designed for businesses of all sizes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.servicesCards}>
                {services.map((item)=>
                <div className={styles.serviceContainer}>

                <label className="text-2xl font-bold font-raleway">{item.name}</label>
                
                    <Link to="/comingsoon">
                    
                        <img
                            src={item.img} // Ensure this path is correct
                            className="w-[255px] rounded-[11px] p-1"
                            alt="QRCODE"
                        />
                        <p className="text-[18px] font-bold font-raleway justify-center items-center">
                          {item.desc}
                        </p>
                    </Link>
                </div>
                )}
            </div>

            <AboutUsHomePage />
            <ContactUs />
        </div>
    );
};

export default QrCode;