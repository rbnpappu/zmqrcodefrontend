import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setstickactiveValue } from './store/stickactive'; // Adjust import path as needed

const ScrollEventTracker = () => {
    const dispatch = useDispatch();

    // Use useCallback to memoize the handleScroll function
    const handleScroll = useCallback(() => {
        if (window.scrollY === 0) {
            setTimeout(()=>{
                dispatch(setstickactiveValue(false));
            },1000)
        } else {
            dispatch(setstickactiveValue(true));
        }
    }, [dispatch]);

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); // Dependency array now includes the memoized handleScroll function

    return null; // This component does not render anything
};

export default ScrollEventTracker;
