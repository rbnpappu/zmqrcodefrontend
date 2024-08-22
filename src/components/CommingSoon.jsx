
import NavBar from './NavBar';
import AboutUsHomePage from './AboutUsHomePage';
import ContactUs from './ContactUs';
import Footer from './Footer';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setstickactiveValue } from './store/stickactive'

const ComingSoon = () => {
    const navRef = useRef(null); // Define the ref
    const [scrollTop, setScrollTop] = useState(0);
    const [navHeight, setNavHeight] = useState(0); // Renamed for clarity

  
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
      const threshold = 200; // Adjust this threshold as needed
     // Adjust this value if necessary
  
      if (scrollTop > threshold) {
        dispatch(setstickactiveValue(true));
      } else {
        dispatch(setstickactiveValue(false));
      }
    }, [scrollTop, navHeight, dispatch]);

    return (
        <div ref={navRef}>
            <NavBar />
   
       
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
