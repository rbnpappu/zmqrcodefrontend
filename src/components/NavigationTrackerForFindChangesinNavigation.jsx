import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setstickactiveValue } from './store/stickactive'; // Ensure this path is correct

const NavigationTracker = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        // Dispatch the action to update the Redux store
        dispatch(setstickactiveValue(false));
    }, [location, dispatch]); // Add `location` and `dispatch` to the dependency array

    return null; // This component does not render anything
}

export default NavigationTracker;
