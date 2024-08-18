import React, { useEffect } from 'react';

const GoogleSignIn = () => {
  useEffect(() => {
    // Load the Google API platform script
    const loadGoogleSignInScript = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleSignIn;
      document.body.appendChild(script);
    };

    // Initialize Google Sign-In
    const initializeGoogleSignIn = () => {
      window.gapi.signin2.render('my-signin2', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: onSuccess,
        onfailure: onFailure,
      });
    };

    const onSuccess = (googleUser) => {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    };

    const onFailure = (error) => {
      console.error('Google Sign-In failed:', error);
    };

    loadGoogleSignInScript();
  }, []);

  return (
    <div>
      <div id="my-signin2"></div>
    </div>
  );
};

export default GoogleSignIn;
