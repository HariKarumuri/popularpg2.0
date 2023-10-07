import {  Route, Routes ,useLocation } from "react-router-dom";
import "./App.css";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cta from "./components/CTA/Cta";
import Home from "./pages/Home";
import Pgdetails from "./components/Pg-Listing/Pg_details"
import ContactPage from './pages/ContactPage';
import Employee from './components/Employee/Employee';
import Pg_Product_List from "./components/Pg-Listing/Pg_Product_List";
import ProductFetchExample from './pages/ProductFetchExample';
import Pg_Listing_Card from "./components/Pg-Listing/Cards/Pg_Listing_Card";
import ContactDetailsPage from "./components/Pg-Listing/Util/ContactDetailPage";
import SearchState from "./components/Appcontext/SearchState";
import Login from './components/Login/Login';
import { useEffect } from "react";
function App() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Check if the current path is "/admin"
    if (location.pathname === "/admin") {
      // Redirect to the admin page
      window.location.href = "http://13.53.149.253/admin/";
    }
  }, [location.pathname]); // Listen for changes in pathname

  

  return (
    
      <div className="App">
      <SearchState>
        <header>
        {/* {isHomePage && <HeaderTop />} */}
          <NavBar />
        </header>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/listings" element={<Pg_Product_List />} />
          <Route path="/listings/contact-details/:id" element={<ContactDetailsPage/>} /> 
          <Route path="/pgdetails/:id" element={<Pgdetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/newListings" element={<Pg_Listing_Card />} />
          <Route path="/tester" element={<ProductFetchExample/>} />
          <Route  path="/employee/:uniqueId" element={<Employee/>} />
          {/* <Route  path="/login" element={<Login/>} /> */}
          

        </Routes>
{/*         <Cta /> */}
        <Footer />
        </SearchState>
      </div>
    
  );
}

export default App;
