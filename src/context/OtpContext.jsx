// OtpContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const OtpContext = createContext();

export const OtpProvider = ({ children }) => {
  // Retrieve the isVerified state from localStorage or default to false
  const [isVerified, setIsVerified] = useState(
    JSON.parse(localStorage.getItem('isVerified')) || false
  );

  const setVerified = () => {
    setIsVerified(true);
  };

  // Update localStorage whenever isVerified changes
  useEffect(() => {
    localStorage.setItem('isVerified', JSON.stringify(isVerified));
  }, [isVerified]);

  // Clear isVerified after 5 hours
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVerified(false);
    }, 5 * 60 * 60 * 1000); // 5 hours

    // Cleanup function to clear the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, [isVerified]);

  return (
    <OtpContext.Provider value={{ isVerified, setVerified }}>
      {children}
    </OtpContext.Provider>
  );
};

export const useOtp = () => {
  const context = useContext(OtpContext);
  if (!context) {
    throw new Error('useOtp must be used within an OtpProvider');
  }
  return context;
};
