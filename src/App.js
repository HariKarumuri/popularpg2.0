import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import NavBar from "./components/navBar/NavBar";
import Hero from './components/Hero/Hero';
import AboutUs from "./pages/AboutUs";
import Services from "./components/Services/Services";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Cta from "./components/CTA/Cta";
import BlogList from './components/Blog/BlogList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <HeaderTop />
          <NavBar />
        </header>
        <Hero/>
        <AboutUs/>
        <Services/>
        <Featured/>
        <BlogList/>
        <Cta/>
        <Footer/>
        <Routes>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
