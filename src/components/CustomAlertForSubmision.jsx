import React from 'react';

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#1D91AA] text-white p-6 rounded-lg shadow-lg w-80">
                <p className="mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-black text-[#1D91AA] px-4 py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-[#1D91AA] hover:text-white"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;
