import React,{useState,useEffect} from 'react'

const Pg_map = ({data}) => {
     const [map,setMap]=useState(data);
     
     useEffect(()=>{
          if(map===""){
               setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5668109772!2d77.46578382530087!3d12.954280018657819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1688017532171!5m2!1sen!2sin")
          }
     },[])

     
  return (
    <div>
     	<div>
          <div className="card mb-3 mx-auto  responsiveness" id="PgMap">
        <h4 className="name mr-2 mx-2 text-dark">Explore Neighbourhood</h4>
           <iframe title="hii" src={map} width="auto" height="450" style={{"border":0, }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
      </div>
            </div>
    </div>
  )
}

export default Pg_map