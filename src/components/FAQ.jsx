import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUsHomePage from './AboutUsHomePage';
import ContactUs from './ContactUs';
import Footer from './Footer';

const FAQ = () => {
    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="flex justify-start p-2">
                <Link to="/" className="text-[16px] underline decoration-[#1D91AA]">
                    Home
                </Link>
            </div>
            <div className="flex shadow-[0_5px_15px_rgba(0,0,0,0.35)] m-4 rounded-[11px]">
                <ul className="flex flex-wrap gap-4 justify-center">

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">2D Barcodes</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Everything You Need to Know</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Chatbot</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Discover Our Chatbot Features</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Getting Started</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Your Guide to QR Codes</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Setting Up Your Account</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Simple Steps for Account Setup</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">14-Day Free Trial</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Experience Our Services Free for 14 Days</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Plan Information</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Details on Our Subscription Plans</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Managing Your Subscription</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Subscription Management Made Easy</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Pricing and Billing</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Understanding Our Pricing and Billing</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Managing Your QR Codes</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Organize and Control Your QR Codes</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Designing Your QR Codes</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Customize Your QR Codes with Style</p>
                        </Link>
                    </li>

                    <li className="flex flex-col flex-wrap bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[11px] m-4 transition-all hover:scale-105">
                        <Link to="/comingsoon">
                            <h4 className="text-2xl font-bold font-raleway">Tracking Your QR Codes</h4>
                            <p className="text-[18px] font-bold font-raleway text-center">Learn About Tracking and Analytics</p>
                        </Link>
                    </li>

                </ul>
            </div>
            <AboutUsHomePage />
            <ContactUs />
            <Footer/>
        </div>
    );
}

export default FAQ;
