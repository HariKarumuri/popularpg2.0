import React from 'react'
import { Link } from 'react-scroll'
const PGScrollBar = () => {
  return (
    <div className="pg_nav bg-white">
        <nav class="navbar navbar-expand-lg navbar-white  shadow">
       
  <div class="container-fluid  ">
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <ul class="navbar-nav " style={{
        marginLeft: "15%",
        marginRight: "auto",
      }}  >
        <li class="nav-item">
        <Link to="property" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >Property Details</Link>
        </li>
        <li class="nav-item">
        <Link to="PgAreaAmenities" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >Common Amenities</Link>
        </li>
        <li class="nav-item">
          <Link to="PgFoodKitchen" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >Food and Kitchen</Link>
        </li>
        <li class="nav-item">
          <Link to="PgOtherCharges" spy={true} smooth={true} offset={-100} duration={300} className="nav-link" >OtherCharges</Link>
        </li>
        <li class="nav-item">
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