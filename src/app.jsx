import { Routes,Route } from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Work from "./pages/work/work";
import Pricing from "./pages/pricing/pricing";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Work" element={<Work />} />
    <Route path="/Pricing" element={<Pricing />} />
    <Route path="/Contact" element={<Contact />} />
    
  </Routes>
  <Footer></Footer>
    </div>
  );
}

export default App;
