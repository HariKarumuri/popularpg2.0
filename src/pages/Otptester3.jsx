// Otptester3.js
import React, { useState } from 'react';
import OTPWidget from './OTPtester';
import { useOtp } from '../context/OtpContext';

const Otptester3 = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { isVerified } = useOtp(); // Access isVerified state from the context

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formattedNumber = `91${phoneNumber}`;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Enter Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render OTPWidget based on verification status */}
      {submitted && !isVerified && <OTPWidget number={formattedNumber} />}
      {isVerified && <p>Verification Successful!</p>}
    </div>
  );
};

export default Otptester3;
