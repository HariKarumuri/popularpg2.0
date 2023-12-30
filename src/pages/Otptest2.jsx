import React, { useEffect } from 'react';
import axios from 'axios';

const Otptest2 = () => {
  useEffect(() => {
    const sendOTP = async () => {
      const options = {
        method: 'POST',
        url: 'https://control.msg91.com/api/v5/otp',
        params: { template_id: '658da52ed6fc054992656e43', mobile: '917661908534' },
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authkey: '404534AD7bgL7ea8l65843682P1',
        },
        data: { Param1: 'value1', Param2: 'value2', Param3: 'value3' },
      };

      try {
        const response = await axios(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to send OTP when the component mounts
    sendOTP();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return <div></div>;
};

export default Otptest2;
