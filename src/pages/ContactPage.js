import React,{useEffect} from 'react'
import axios from 'axios';


const ContactPage = () => {

    const fetchProducts = () => {
        axios.get('http://13.53.149.253/products/')
          .then(response => {
            // Handle the response data
            const products = response.data;
            console.log(products);
            // Do something with the products data
          })
          .catch(error => {
            // Handle the error
            console.error('Error fetching products:', error);
          });
      };
      useEffect(() => {
        fetchProducts();
      }, []);
      
  return (
    <div>
      hello
    </div>
  )
}

export default ContactPage
