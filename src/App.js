import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cta from "./components/CTA/Cta";
import PgListing from "./components/Pg-Listing/PgListing";
import Home from "./pages/Home";
import Pgdetails from "./components/Pg-Listing/PgDetail"
import LoginPage from "./admin/LoginPage";
import Dashboard from "./admin/Dashboard/Dashboard";
import PostPg from './admin/Dashboard/Postpg';
import ViewPGs from './admin/Dashboard/Viewpgs';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <HeaderTop />
          <NavBar />
        </header>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/listings" element={<PgListing />} />
          <Route path="pgdetails" element={<Pgdetails />} />


          {/* admin routes  */}
          <Route path="/admin/login" element={<LoginPage/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/dashboard/postpg" element={<PostPg/>}/>
          <Route path="/admin/dashboard/viewpgs" element={<ViewPGs/>}/>
        </Routes>
        <Cta />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
