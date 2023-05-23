import React from 'react'
import { Link } from 'react-scroll'
const PGScrollBar = () => {
  return (
    <div className="pg_nav bg-white">
        <nav className="navbar navbar-expand-lg navbar-white  shadow">
       
  <div className="container-fluid  ">
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <ul className="navbar-nav " style={{
        marginLeft: "15%",
        marginRight: "auto",
      }}  >
        <li className="nav-item">
        <Link to="property" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >Property Details</Link>
        </li>
        <li className="nav-item">
        <Link to="PgAreaAmenities" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >Common Amenities</Link>
        </li>
        <li className="nav-item">
          <Link to="PgFoodKitchen" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >Food and Kitchen</Link>
        </li>
        <li className="nav-item">
          <Link to="PgOtherCharges" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >OtherCharges</Link>
        </li>
        <li className="nav-item">
        <Link to="PgMap" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" > Explore Neighbourhood </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>

    
  )
}

export default PGScrollBar