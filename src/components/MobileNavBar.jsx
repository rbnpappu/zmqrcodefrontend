import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MobileNavBar = ({ setToggleHamBurger }) => {
    const newRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (newRef.current && !newRef.current.contains(e.target)) {
                setToggleHamBurger(false); // Close the menu
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setToggleHamBurger]);

    return (
        <div className="w-[60%] bg-customBlue p-4 z-50 fixed top-0 right-0 h-full flex flex-col items-start shadow-lg" ref={newRef}>
            <FontAwesomeIcon
                icon={faTimes}
                className="text-white text-2xl cursor-pointer hover:text-gray-300 self-end mb-4 p-2"
                onClick={() => setToggleHamBurger(false)}
            />
            <ul className="list-none flex flex-col space-y-4 w-full">
                <li className="w-full">
                <Link to="/services" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">QR CODE SERVICES</Link>
                </li>
                <li className="w-full">
                <AnchorLink href="#about-section" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">About Us</AnchorLink>
                </li>
                <li className="w-full">
                <AnchorLink href="#contact-section" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">Contact Us</AnchorLink>
                </li>
                <li className="w-full">
                <Link to="/faq" className="block text-white text-[18px] py-[10px] px-[15px] hover:bg-white hover:text-customBlue rounded transition-colors duration-200 w-full">FAQ</Link>
                </li>
                <li className="w-full">
                    <Link to="/comingsoon" className="block text-white text-[18px] py-[10px] px-[15px] hover:bg-white hover:text-customBlue rounded transition-colors duration-200 w-full">Pricing</Link>
                </li>
                <li className="w-full">
                <Link to="/comingsoon" className="text-white text-[15px] p-[5px] hover:bg-white hover:text-customBlue rounded">Languages</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileNavBar;
