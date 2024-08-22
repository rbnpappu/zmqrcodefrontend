import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';


const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <button
      className="flex items-center justify-center p-2 border rounded-lg text-white"
      style={{ backgroundColor: '#4285F4' }}
      onClick={handleLogin}
    >
      <FontAwesomeIcon icon={faGoogle} className="mr-2" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default GoogleLoginButton;