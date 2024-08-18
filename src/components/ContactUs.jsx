import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {


    return (
        <div  id="contact-section" className='flex justify-center items-center rounded-lg p-5 m-[16px] rounded-[11px]' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
            <div className="w-full max-w-lg">
                <label className="text-2xl font-bold font-raleway mb-4 block">Contact Us</label>

                <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                    <FontAwesomeIcon icon={faUser} size="1x" color="#1D91AA" />
                    <input
                        className="border-none ml-2 p-1 w-full focus:outline-none"
                        placeholder="Please Type Username"
                    />
                </div>

                <div className="flex items-center border rounded-lg w-full m-[5px] p-3">
                    <input
                        className="border-none ml-2 p-3 w-full focus:outline-none"

                        placeholder="Send The Message"
                    />
                </div>

                <div className="flex items-center border rounded-lg w-full p-3 m-[5px]">
                    <input
                        className="border-none ml-2 p-1 w-full focus:outline-none"
                        type='text'
                        placeholder="Enter Phone Number or Email"
                    />
                </div>


                <button
                    className="rounded-[11px] w-full text-black bg-[#1D91AA] hover:bg-white hover:text-[#1D91AA] transition duration-300 ease-in-out p-2 active:bg-[#1D91AA] active:text-white"
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                >
                    <span className="inline-block transition-transform duration-300 ease-in-out">
                        Send Message
                    </span>
                </button>

                <label className="mt-4  justify-center text-2xl flex font-bold font-raleway m-[16px]">Join The Community</label>

                <div className="flex  justify-center mt-2">
                    <a href='https://www.instagram.com/zmqrcode?igsh=YzljYTk1ODg3Zg==' className="mr-2 p-1">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#1D91AA" />
                    </a>
                    <a href='https://www.facebook.com/people/ZMQRCodes/61559950102078/' className="mr-2 p-1">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="#1D91AA" />
                    </a>
                    <a href='https://x.com/i/flow/login?redirect_after_login=%2Fzmqrcode' className="mr-2 p-1">
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#1D91AA" />
                    </a>
                </div>

                <label className="mt-4 text-2xl font-bold font-raleway m-[16px] flex justify-center">Get In Touch</label>
                <div className="mt-2 text-lg">
                    <div className='flex  justify-center flex-row items-center mb-2'>
                        <FontAwesomeIcon icon={faPhone} className="mr-2" color='#1D91AA' />
                        <p className='text-black  font-bold font-raleway'>86396 83839</p>
                    </div>
                    <div className='flex justify-center items-center mb-2'>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" color='#1D91AA' />
                        <p className='text-black  font-bold font-raleway'>connect@zmqrcode.com</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;
