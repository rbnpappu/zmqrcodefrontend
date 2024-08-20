import React from 'react';
import NavBar from './NavBar';
import AboutUsHomePage from './AboutUsHomePage';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from './Footer';
const ComingSoon = () => {
    return (
        <div>
            <NavBar />
            <Link to="/" className="text-[16px] underline decoration-[#1D91AA]">
                    Home
                </Link>
            <div className="flex justify-start p-2">
                    <Link to="/services" className="text-[16px] underline decoration-[#1D91AA]">
                    QR CODE SERVICES
                    </Link>
                </div>
            <div className="w-full flex-col" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <img 
                    src="/Coming_SOON.png" // Corrected from href to src
                    alt="Coming Soon"
                    className="rounded-[11px] w-full m-[16px]"
                />
                <div className="flex rounded-[11px] m-[14px] shadow-[0px_5px_15px_rgba(0,_0,_0,_0.35)] flex-col">
                    <label className="text-3xl font-bold font-raleway">Coming Soon</label>
                    <p className="text-[13px] font-bold font-raleway ml-4">
                        We’re working hard to bring you something amazing. Stay tuned for updates and be the first to know when we launch!
                    </p>
                </div>
            </div>
            <AboutUsHomePage />
            <ContactUs />
            <Footer/>
        </div>
    );
};

export default ComingSoon;
