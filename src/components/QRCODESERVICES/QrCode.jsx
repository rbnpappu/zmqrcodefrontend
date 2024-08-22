import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setstickactiveValue } from '../store/stickactive';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import styles from '../module/navbar.module.css';
import AboutUsHomePage from '../AboutUsHomePage';
import ContactUs from '../ContactUs';
import services from '../resources/services.json';
import Footer from '../Footer';

const QrCode = () => {
    const navRef = useRef(null); // Reference for the NavBar container
    const [scrollTop, setScrollTop] = useState(0);
    const [navHeight, setNavHeight] = useState(0); // NavBar height

    const dispatch = useDispatch();

    const handleScroll = () => {
        setScrollTop(window.scrollY);
    };

    const updateNavHeight = () => {
        if (navRef.current) {
            const { height } = navRef.current.getBoundingClientRect();
            setNavHeight(height);
        }
    };

    useEffect(() => {
        updateNavHeight();
        window.addEventListener('resize', updateNavHeight);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', updateNavHeight);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const threshold = 200; // Adjust based on when you want to trigger stickiness
  
        if (scrollTop > threshold) {
            dispatch(setstickactiveValue(true));
        } else {
            dispatch(setstickactiveValue(false));
        }
    }, [scrollTop, navHeight, dispatch]);

    return (
        <div className={styles.container} ref={navRef}>
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
                                src="/QrCodeServices.jpg" // Ensure this path is correct; it should be in the `public` directory
                                className={styles.qrCodeImage}
                                alt="QR Code"
                            />
                            <ul className={styles.qrCodeList}>
                                <li key="qr-1" className={styles.qrCodeListItem}>
                                    Enhance customer engagement and elevate scan rates by over 50% with our exclusive QR shapes and stickers.
                                </li>
                                <li key="qr-2" className={styles.qrCodeListItem}>
                                    Gain deeper insights into your campaign performance with advanced real-time analytics.
                                </li>
                                <li key="qr-3" className={styles.qrCodeListItem}>
                                    Streamline your QR operations with automated bulk uploads and folder organization.
                                </li>
                                <li key="qr-4" className={styles.qrCodeListItem}>
                                    Begin with our free plan and seamlessly transition to customized paid options designed for businesses of all sizes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.servicesCards}>
                {services.map((item, index) => (
                    <div key={index} className={styles.serviceContainer}>
                        <label className="text-2xl font-bold font-raleway">{item.name}</label>
                        <Link to="/comingsoon">
                            <img
                                src={item.img} // Ensure this path is correct based on where `item.img` is defined in your `services.json`
                                className="w-[255px] rounded-[11px] p-1"
                                alt="Service"
                            />
                            <p className="text-[18px] font-bold font-raleway justify-center items-center">
                                {item.desc}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>

            <AboutUsHomePage />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default QrCode;
