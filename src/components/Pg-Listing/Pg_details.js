import React, { useState, useEffect } from "react";
import PgDetails from "./Cards/PgDetailsCard";
import axios from "axios";
const PgDetail = () => {
  const [pg, setpg] = useState(null);
 
  useEffect(() => {
    const fetchdata = async (req, res)=>{
      //get the id from the url
      const url = new URL(window.location.href);
      const idParam = url.pathname.split("/")[2];
    const response = await axios.get(`https://popularpg.in/products/${idParam}/`);
    console.log(response.data);
    setpg(response.data);
    }
    fetchdata();
  }, []);

  return (
    <>
      {pg ? ( <PgDetails pg={pg} />) : null}
    </>
  );
};

export default PgDetail;
