import { Text, Box, HStack, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={["column", "column"]}
        alignItems="center"
        backgroundColor={["none", "blackAlpha.200"]}
      >
        <Text
          data-aos="zoom-in"
          fontFamily="baloo2"
          mt={["4", "10"]}
          fontSize={["2xl", "3xl"]}
        >
          Thank you for your time
        </Text>
        <Text
          data-aos="zoom-in"
          fontFamily="Montserrat"
          mb={["4", "6"]}
          textAlign={["center", "left"]}
          px={["4", "0"]}
          fontSize={["sm", "md"]}
        >
          Living,Learning,& Leveling up one day at a time.
        </Text>
        <HStack mb={["4", "4"]}>
          <Link
            data-aos="zoom-in"
            data-aos-once="true"
            href="https://github.com/MAhmedSid"
            target="_blank"
          >
            <i className="hoverBg    fa-brands fa-github border-2 border-black rounded-full border-solid md:text-3xl text-xl md:p-2 p-1 "></i>
          </Link>
          <Link
            data-aos="zoom-in"
            data-aos-once="true"
            href=" https://www.linkedin.com/in/muhammad-ahmed-siddiqui-webdeveloper/ "
            target="_blank"
          >
            <i className="hoverBg   fa-brands fa-linkedin border-2 border-black rounded-full border-solid md:text-3xl text-xl md:p-2 p-1 "></i>
          </Link>
        </HStack>

        <Text
          data-aos="zoom-in"
          data-aos-once="true"
          fontSize={["sm", "md"]}
          fontFamily="Montserrat"
          mb={["4", "6"]}
        >
          Handcrafted by me
          <i className="fa-regular fa-copyright px-1 font-thin"></i> 2023
        </Text>
      </Box>
    </>
  );
};

export default Footer;
