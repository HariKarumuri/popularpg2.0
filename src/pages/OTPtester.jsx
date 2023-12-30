// OTPWidget.js
import React, { useEffect, useState } from 'react';
import { useOtp } from '../context/OtpContext'; 

const OTPWidget = ({ number }) => {
  const { setVerified } = useOtp(); // Access setVerified function from the context
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const configuration = {
      widgetId: "3368426d5242333736343738",
      tokenAuth: "404534TIMvB7gwt2C654a6ec5P1",
      identifier: number,
      exposeMethods: "<true | false> (optional)",
      success: (data) => {
        console.log('success response', data);

        // Handle success, e.g., send the verified token to the server
        // You may want to send the data to your server for verification

        // Set the successMessage state
        setSuccessMessage(data.message);
      },
      failure: (error) => {
        console.log('failure reason', error);
        // Handle failure
      },
      var1: "<var1>",
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      window.initSendOTP(configuration);
    };
    script.src = 'https://control.msg91.com/app/assets/otp-provider/otp-provider.js';

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, [number, setVerified]);

  useEffect(() => {
    // Check for the successMessage and call setVerified
    if (successMessage) {
      setVerified();
    }
  }, [successMessage, setVerified]);

  return <div></div>; // You can add any additional components or UI elements here
};

export default OTPWidget;
