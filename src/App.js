import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Page/Home";
import Footer from "./Components/Footer";
import About from "./Components/Page/About";
import Contact from "./Components/Page/Contact";
import Career from "./Components/Page/Career";
// product pages
import Ecommerce from "./Components/Page/Products/Ecommerce";
import Bbhrm from "./Components/Page/Products/Bbhrm";
import Erpof from "./Components/Page/Products/Erpof";
import Glm from "./Components/Page/Products/Glm";
import Medicalbilling from "./Components/Page/Products/Medicalbilling";
import Travelerp from "./Components/Page/Products/Travelerp";
import Pos from "./Components/Page/Products/Pos";
import Minibanking from "./Components/Page/Products/Minibanking";
// Services Page
import Androidapplication from "./Components/Page/Services/Androidapplication";
import IOSApplication from "./Components/Page/Services/IOSApplication";
import Bulksms from "./Components/Page/Services/Bulksms";
import Hrm from "./Components/Page/Services/Hrm";
import Crp from "./Components/Page/Services/Crp";
import WebsiteDesign from "./Components/Page/Services/WebsiteDesign";
import Erp from "./Components/Page/Services/Erp";
import Customized from "./Components/Page/Services/Customized";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* page navigation*/}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        {/* Products */}
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/bbh" element={<Bbhrm />} />
        <Route path="/erpof" element={<Erpof />} />
        <Route path="/gold" element={<Glm />} />
        <Route path="/medicalbilling" element={<Medicalbilling />} />
        <Route path="/travelerp" element={<Travelerp />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/minibank" element={<Minibanking />} />
        {/* Services */}
        <Route path="/androidapplication" element={<Androidapplication />} />
        <Route path="/IOSApplication" element={<IOSApplication />} />
        <Route path="/Bulksms" element={<Bulksms />} />
        <Route path="/Hrm" element={<Hrm />} />
        <Route path="/Crp" element={<Crp />} />
        <Route path="/WebsiteDesign" element={<WebsiteDesign />} />
        <Route path="/Erp" element={<Erp />} />
        <Route path="/Customized" element={<Customized />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
