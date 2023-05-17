import React , {useState ,useEffect} from "react";
import Logo from "../../assets/images/popular pg logo.png"
import { Link } from "react-router-dom";


const NavBar = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      document.querySelector('.header-bottom').classList.add('active');
    } else {
      document.querySelector('.header-bottom').classList.remove('active');
    }
  };

  window.addEventListener('scroll', handleScroll);

return (
    
    

  <div className="header-bottom">
  <div className="container">
    <Link to="/" className="logo">
      <img src={Logo} alt="Homeverse logo" height="55px"/>
    </Link>

    <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
      <div className="navbar-top">
        <Link to="/" className="logo">
          <img src={Logo} alt="Homeverse logo" height="40px"  />
        </Link>
        <button className="nav-close-btn" onClick={closeNavbar} aria-label="Close Menu">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <div className="navbar-bottom">
        <ul className="navbar-list">
          <li>
            <Link to="/" className="navbar-link" onClick={closeNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link" onClick={closeNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="navbar-link" onClick={closeNavbar}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/listings" className="navbar-link" onClick={closeNavbar}>
              Explore Pg
            </Link>
          </li>
          <li>
            <Link to="/blog" className="navbar-link" onClick={closeNavbar}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link" onClick={closeNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="header-bottom-actions">
      <button className="header-bottom-actions-btn" aria-label="Search">
        <ion-icon name="search-outline"></ion-icon>
        <span>Search</span>
      </button>
      <button className="header-bottom-actions-btn" aria-label="Profile">
        <ion-icon name="person-outline"></ion-icon>
        <span>Profile</span>
      </button>
      
      <button
        className="header-bottom-actions-btn"
        onClick={toggleNavbar}
        aria-label="Open Menu"
      >
        <ion-icon name="menu-outline"></ion-icon>
        <span>Menu</span>
      </button>
    </div>
  </div>
</div>
  );
};

export default NavBar;
