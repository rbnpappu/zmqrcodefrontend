import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faUsers } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const PlansCard = ({ props }) => {
    const { name, description, price, storageRange, reviews = {} } = props;
    const { count = 0, rating = 0 } = reviews;

    return (
        <div className="flex flex-col m-[15px] justify-center items-center w-full rounded-lg p-4 transition-all duration-150 ease-in-out transform group hover:bg-[#1D91AA] hover:text-white hover:shadow-lg cursor-pointer">
            <div className="flex flex-col justify-center items-center">
                <label className="text-[25px] font-bold font-raleway transition-colors duration-150 ease-in-out group-hover:text-white">
                    {name}
                </label>
                <p className="text-[16px] font-extrabold font-raleway transition-colors duration-150 ease-in-out group-hover:text-white">
                    {description}
                </p>
            </div>
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faRupeeSign} size="2x" className="transition-colors duration-150 ease-in-out text-[#1D91AA] group-hover:text-white" />
                <label className="text-[34px] text-[#1D91AA] font-semibold font-raleway transition-colors duration-150 ease-in-out group-hover:text-white">
                    {`${price}`}
                </label>
                <label className='text-[34px] text-[#1D91AA] font-semibold font-raleway transition-colors duration-150 ease-in-out group-hover:text-white'>
                    /
                </label>
                <label className="text-[25px] text-[#1D91AA] font-semibold font-raleway transition-colors duration-150 ease-in-out group-hover:text-white">
                    {`${storageRange}`}
                </label>
            </div>
            <div className="flex  flex-col lex flex-wrap justify-center items-center p-1 items-center space-x-2">
                <div className='flex justify-center items-center p-1'>
                    <FontAwesomeIcon icon={faUsers} size="1x" className="transition-colors duration-150 ease-in-out text-[#1D91AA] group-hover:text-white" />
                    <p className="text-[15px] text-[#1D91AA] font-semibold font-raleway transition-colors duration-150 ease-in-out group-hover:text-white">
                        Users: {count}
                    </p>
                </div>
                <StarRating rating={rating} color="customBlue" />
            </div>
            <button
                className="flex items-center m-[16px] justify-center px-4 py-2 rounded-md transition-all duration-150 ease-in-out transform hover:scale-105 bg-white text-[#1D91AA] border-[#1D91AA] border-2 shadow-md hover:bg-[#1D91AA] hover:text-white hover:border-white"

            >
                <Link to='/services'>
                    <span className='font-raleway text-[32px] font-medium'>Buy Now</span>
                </Link>
            </button>
        </div>
    );
};

export default PlansCard;
