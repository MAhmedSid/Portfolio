import { Box, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const TopNavBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const firstSectionHeight = window.innerHeight;

      setShowButton(scrollY > firstSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          onClick={handleClick}
          style={{
            backgroundColor: "#FF3CAC",
            backgroundImage:
              "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
            backgroundClip: "text",
          }}
          _hover={{
            color:
              "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            backgroundClip: "text",
          }}
          pos="fixed"
          className={`z-10 md:bottom-5 md:right-3 right-5  bottom-5   rounded-full ${
            showButton ? "visible" : "hidden"
          }`}
        >
          <Link>
            <i className="fa-solid  md:px-3.5 md:py-2  py-1 px-2 fa-arrow-up md:text-4xl text-3xl  "></i>
          </Link>
        </Box>
      )}
    </>
  );
};

export default TopNavBtn;
