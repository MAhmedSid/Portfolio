import "./App.css";
import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/NavbarContainer";
import ProjectsSec from "./components/ProjectsSec/ProjectContainer";
import Skills from "./components/SkillSec/SkillContainer";
import Contact from "./components/ContactSec/ContactContainer";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import bg from "./assets/contactBg.jpg";
import TopNavBtn from "./TopNavBtn.jsx";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // EFFECT FOR AOS ANIMATIONS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Animated Cursor Integration */}
      <AnimatedCursor
        color="12,12,12"
        innerSize={25}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.5}
        innerStyle={{
          background:
            "linear-gradient(225deg, #0536bd 0%, #32126e 50%, #0074c7 100%)",
        }}
        outerStyle={{
          border: "1px solid #121212",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'input[type="tel"]',
          "label[for]",
          "div",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <TopNavBtn />
      <Box background="linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);">
        <Navbar />
        <About />
      </Box>

      <Skills />
      <ProjectsSec />
      <Box backgroundImage={bg}>
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;
