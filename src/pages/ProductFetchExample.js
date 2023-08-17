import React, { useEffect } from 'react';
import axios from 'axios';

const ProductFetchExample = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://popularpg.in/products/');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     hello
    </div>
  );
};

export default ProductFetchExample;
