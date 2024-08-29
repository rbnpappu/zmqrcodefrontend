import { useState, useEffect, useRef } from 'react';
import styles from './module/navbar.module.css'; // Adjust if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MobileNavBar from './MobileNavBar';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSelector } from 'react-redux';
import languages from './resources/languages.json'; // Adjust import based on export style

const NavBar = () => {
    const [toggleHamBurger, setToggleHamBurger] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const isActive = useSelector(state => state.stickactive.stickactiveValue); // Ensure correct selector

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={isActive ? styles.sticky : styles.navBar}>
            <div className="flex items-center">
                <img
                    src='/ZMQRCODEORIGINALOGO.jpg'
                    alt='ZM QR Code Logo'
                    className={styles.logo}
                />
                <div className="flex flex-col items-center text-white mt-[16px] ml-4">
                    <label className="text-2xl font-semibold text-white font-raleway">
                        zmqrcode.in
                    </label>
                    <p className="text-base text-white font-raleway">
                        Your Security is Our Priority
                    </p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className={styles.navigation}>
                    <ul className='list-none hidden sm:flex pr-[15px] font-raleway'>
                        <li className='flex'>
                            <Link to="/" className="text-white text-[15px] p-4 hover:bg-white hover:text-customBlue rounded">Home</Link>
                            <Link to="/services" className="text-white text-[15px] p-4 hover:bg-white hover:text-customBlue rounded">Generate Qr code</Link>
                            <AnchorLink href="#about-section" className="text-white text-[15px] p-4 hover:bg-white hover:text-customBlue rounded">About Us</AnchorLink>
                            <AnchorLink href="#contact-section" className="text-white text-[15px] p-4 hover:bg-white hover:text-customBlue rounded">Contact Us</AnchorLink>
                            <Link to="/faq" className="text-white text-[15px] p-4 hover:bg-white hover:text-customBlue rounded">FAQ</Link>
                            <Link to="/comingsoon" className="text-white text-[15px] p-4 hover:bg-white hover:text-customBlue rounded">Pricing</Link>
                            <div className="relative text-white flex-col text-[15px] p-4 hover:bg-white hover:text-customBlue rounded" ref={dropdownRef}>
                                <button 
                                    onClick={handleDropdownToggle} 
                                    className="w-full text-left flex items-center justify-between"
                                >
                                    Languages
                                    <span className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="absolute top-full left-0 bg-white text-black w-full mt-2 p-2 rounded shadow-lg">
                                        {languages.map((item) => (
                                            <li key={item.code} className='p-2 hover:bg-gray-200'>
                                                <Link to="/comingsoon">{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div> 
                        </li>
                    </ul>
                </div>
                <div className={styles.hamburger}>
                    <FontAwesomeIcon
                        icon={toggleHamBurger ? faTimes : faBars}
                        className="text-white text-2xl cursor-pointer hover:text-gray-300"
                        onClick={() => setToggleHamBurger(!toggleHamBurger)}
                    />
                    {toggleHamBurger && <MobileNavBar setToggleHamBurger={() => setToggleHamBurger(false)} />}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
