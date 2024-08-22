// FacebookLoginButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const FacebookLoginButton = () => {
  const handleLogin = () => {
    // Redirect to the Facebook OAuth route
    window.location.href = 'http://localhost:3000/auth/facebook';
  };

  return (
    <button
      className="flex items-center justify-center p-2 border rounded-lg text-white mt-2"
      style={{ backgroundColor: '#3b5998' }}
      onClick={handleLogin}
    >
      <FontAwesomeIcon icon={faFacebook} className="mr-2" />
      <span>Sign in with Facebook</span>
    </button>
  );
};

export default FacebookLoginButton;
