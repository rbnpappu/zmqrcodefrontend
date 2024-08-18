import { useState, useRef, useEffect } from 'react';
import styles from './module/navbar.module.css'; // Ensure the path is correct
import SignUP from './UserRegistrayion/SignUP';
import LoginUP from './UserRegistrayion/LoginUp';

const JoinUs = () => {
    const [switchButton, setSwitchButton] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        // Play the video when the user interacts with the page
        const handleUserInteraction = () => {
            if (videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.log('Autoplay was prevented:', error);
                });
                document.removeEventListener('click', handleUserInteraction);
            }
        };

        document.addEventListener('click', handleUserInteraction);
        return () => {
            document.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    return (
        <div className={styles.vedioCard}>
            <label className={styles.labelText}>Why Join Us</label>
            <div className={styles.vedioComponent}>
                <video
                    ref={videoRef}
                    className={styles.vedio}
                    src="/ZMQRCODE.mp4" // Adjust path as necessary
                    controls
                    autoPlay
                    muted // Add muted for autoplay to work across browsers
                    loop
                >
                    Your browser does not support the video tag.
                </video>
                <div className='flex flex-col w-full mb-4 pl-5 pr-5'>
                    <div className='flex flex-row'>
                        <button 
                            className={switchButton ? styles.selected : styles.notselected} 
                            onClick={() => setSwitchButton(true)}
                        >
                            Sign Up
                        </button>
                        <button
                            className={!switchButton ? styles.selected : styles.notselected}  
                            onClick={() => setSwitchButton(false)}
                        >
                            Login
                        </button>
                    </div>
                    {switchButton ? <SignUP/> : <LoginUP/>}
                </div>
            </div>
        </div>
    );
}

export default JoinUs;
