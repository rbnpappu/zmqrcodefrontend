import React from 'react';

const StarRating = ({ rating, color }) => {
    // Define a dynamic style for the star color
    const starStyle = {
        color: color,
        transition: 'color 0.15s ease-in-out'
    };

    // Number of stars (example: 5 stars)
    const stars = Array(5).fill(0);

    return (
        <div className="flex space-x-1">
            {stars.map((_, index) => (
                <span key={index} className={`text-xl ${rating > index ? 'text-yellow-500' : 'text-gray-300'}`} style={starStyle}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
