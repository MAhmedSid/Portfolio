import { Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import "./project.css";
import ProjectSwiper from "./ProjectSwiper";

const ProjectsSec = () => {
  
  return (
    <Box  id="work"   className="projectBg" pb={["auto", "20"]}>
      <Box
        display="flex"
        flexDirection={["column", "column"]}
        alignItems={["center", "center"]}
      >
        <Heading
         data-aos="zoom-in" 
         data-aos-duration="1000" 
          pb={["0", "4"]}
          mt={["20", "20"]}
          fontSize={["5xl", "8xl"]}
          ml={["0", "46"]}
          bgGradient=" linear-gradient(to top, #dfe9f3 0%, white 100%);"
          bgClip="text"
        >
          My Work
        </Heading>
        <Text
         data-aos="zoom-in" 
         data-aos-duration="1000" 
          w={["auto", "40%"]}
          textAlign="center"
          mt={["20", "32"]}
          mb={["auto", "46"]}
          fontSize={["sm", "xl"]}
          textColor="white"
          fontFamily="Montserrat"
        >
          "In the Projects section, you'll find a variety of work that I've
          completed, each one with the goal of learning something new. I believe
          that by challenging myself with new technologies and techniques, I can
          continue to improve my skills and provide better results in my work. I
          hope you'll find inspiration in my dedication to continuous learning"
        </Text>
        <Heading
         data-aos="zoom-in" 
         data-aos-duration="1000" 
          fontSize={["xl", "4xl"]}
          mt={["20", "12"]}
          bgGradient=" linear-gradient(to top, #dfe9f3 0%, white 100%);"
          bgClip="text"
        >
          Featured Projects
        </Heading>
      </Box>
        <ProjectSwiper/>
    </Box>
  );
};

export default ProjectsSec;
