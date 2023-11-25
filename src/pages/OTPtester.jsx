import React, { useState } from 'react';

const SendAndVerifyOTP = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const sendOTP = async () => {
    try {
      const response = await fetch('/api/sendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authkey': '404534TIMvB7gwt2C654a6ec5P1', // Include your MSG91 Auth Key here
        },
        body: JSON.stringify({
          template_id: '6559e35dd6fc056fa0575512',
          mobile: mobileNumber,
          otp_expiry: 5, // Optional: OTP expiry time in minutes
        }),
      });

      if (response.ok) {
        console.log('OTP sent successfully');
        // Handle success, maybe redirect the user or show a success message
      } else {
        console.error('Failed to send OTP');
        // Handle failure, show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await fetch(`/api/verifyOTP?otp=${otp}&mobile=91${mobileNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authkey': '404534TIMvB7gwt2C654a6ec5P1', // Include your MSG91 Auth Key here
        },
      });

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.type === 'success' && responseData.message === 'OTP verified successfully') {
          console.log('OTP Verified Successfully');
        } else {
          console.error('Failed to verify OTP:', responseData.message);
        }
      } else {
        console.error('Error verifying OTP. Status code:', response.status);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h1>Send and Verify OTP</h1>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="otp">Custom OTP (Optional):</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>

      <button onClick={sendOTP}>Send OTP</button>
      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
};

export default SendAndVerifyOTP;
