import { useState } from 'react';
import styles from './module/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MobileNavBar from './MobileNavBar';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
    const [toggleHamBurger, setToggleHamBurger] = useState(false);


    return (
        <div className="bg-customBlue flex justify-between items-center p-4">
            <div className="flex items-center">
                <img
                    src='/ZMQRCODEORIGINALOGO.jpg'
                    alt='ZM QR Code Logo'
                    className={styles.logo}
                />
                <label className={styles.logoText}>
                    ZM QR CODE SERVICES
                </label>
            </div>
            <div className='flex items-center'>
                <div className={styles.navigation}>
                    <ul className='list-none hidden sm:flex pr-[15px]'>
                        <li>
                            <Link to="/services" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">QR CODE SERVICES</Link>
                            <AnchorLink href="#about-section" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">About Us</AnchorLink>
                            <AnchorLink href="#contact-section" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">Contact Us</AnchorLink>
                            <Link to="/faq"  className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">FAQ</Link>
                            <Link to="/comingsoon"  className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">Pricing</Link>
                            <Link to="/comingsoon" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">Languages</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.hamburger}>
                    <FontAwesomeIcon
                        icon={toggleHamBurger ? faTimes : faBars}
                        className="text-white text-2xl cursor-pointer hover:text-gray-300"
                        onClick={() => setToggleHamBurger(true)}
                    />
                    {toggleHamBurger && <MobileNavBar setToggleHamBurger={() => setToggleHamBurger(false)} />} {/* Correct function passing */}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
