import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import SignatureRecognition from "./pages/CaseStudies/SignatureRecognition";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import InventorySystem from "./pages/CaseStudies/InventorySystem";
import TrafficManagement from "./pages/CaseStudies/TrafficManagement";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import AppDevelopment from "./servicePages/AppDevelopment";
import UIDesign from "./servicePages/UIDesign";
import WebDevelopment from "./servicePages/WebDevelopment";
import DigitalMarketing from "./servicePages/DigitalMarketing";
import ARVR from "./servicePages/ARVR";
import ThreeDModeling from "./servicePages/ThreeDModeling";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {

  return (

    <BrowserRouter>


      <Navbar />


      <Routes>


        {/* Home */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* About */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* Services */}

        <Route
          path="/services"
          element={<Services />}
        />


        {/* Portfolio */}

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />


        {/* Contact */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* Careers */}

        <Route
          path="/careers"
          element={<Careers />}
        />
            <Route
          path="/blog"
          element={<Blog />}
        />



        {/* Service Details */}

        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />

        <Route
        path="/services/app-development"
        element={<AppDevelopment />}
        />
        <Route
         path="/services/ui-ux-design"
         element={<UIDesign />}
         />
         <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
          />
          <Route
          path="/services/ar-vr"
          element={<ARVR />}
          />
          <Route
           path="/services/3d-modeling"
           element={<ThreeDModeling />}
           />
           <Route
            path="/portfolio/traffic-management"
            element={<TrafficManagement />}
             />
             <Route
 path="/portfolio/inventory-system"
 element={<InventorySystem />}
/>
<Route
 path="/portfolio/signature-recognition"
 element={<SignatureRecognition />}
/>



      </Routes>



      <Footer />

      <FloatingCTA />

<WhatsAppButton />
    </BrowserRouter>

  );

}


export default App;