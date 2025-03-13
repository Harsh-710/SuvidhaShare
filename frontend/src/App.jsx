import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Solutions from "./components/Solutions";
import Nutrition from "./components/nutrition";
import WhyUseSuvidhaShare from "./components/whyUseSuvidhaShare";
import Gallery from "./components/gallery";
import ClientTestimonials from "./components/clientTestmonials";
import SignIn from "./components/signin";

const App = () => {
  return (
    <div>
      <Navbar />
      <SignIn />
      <HeroSection />
      <Solutions />
      <Nutrition />
      <WhyUseSuvidhaShare />
      <div>
        <Gallery />
      </div>
      <div>
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default App;
