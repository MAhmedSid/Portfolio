import {
  Avatar,
  Flex,
  Image,
  VStack,
  Text,
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Link,
} from "@chakra-ui/react";
import React from "react";
import bioImg from "../../assets/bio.png";
import profilePic from "../../assets/profile.jpeg";
import "./nameStyle.css";
import { Animated } from "react-animated-css";

const About = () => {
  return (
    <Box>
      <Flex mt={["0", "24"]} direction={["column", "row", "row"]}>
        <Box mb={["auto", "52"]} w="100%">
          <Animated animationIn="flipInY" animationInDuration={1000}>
            <Image
              borderRadius="3xl"
              pointerEvents="none"
              draggable="false"
              src={bioImg}
              alt="Personal Knowledge"
              mt={["24", "0"]}
              ml={["0", "48"]}
            />
          </Animated>
        </Box>
        <Center height="80" display={["none", "block"]} pr="20" mt="24">
          <Divider orientation="vertical" />
        </Center>
        <VStack mt={["24", "0"]} w="100%" pr={["0", "16"]}>
          <Animated animationIn="fadeIn" animationInDuration={3000}>
            <Avatar
              pointerEvents="none"
              className="nodrag"
              boxShadow="dark-lg"
              src={profilePic}
              size={["xl", "2xl"]}
            />
          </Animated>
          <Box textAlign={["center", "left"]}>
            <Animated animationIn="fadeIn" animationInDuration={2000}>
              <Text mt="12" mb={["6", "0"]} as="p" fontSize={["2xl", "2xl"]}>
                I'm!
              </Text>

              <Box
                mx={["auto", "0"]}
                fontSize={["2xl", "6xl"]}
                w={["60", "2xl"]}
              >
                <div className="Title">
                  <h1>
                    M.Ahmed Siddiqui
                    <div className="Title__highlight"></div>
                  </h1>
                  <div className="Title__underline"></div>
                  <div aria-hidden className="Title__filled">
                    M.Ahmed Siddiqui
                  </div>
                </div>
              </Box>
              <Heading
                as="h2"
                style={{ fontFamily: "baloo2" }}
                fontSize={["lg", "3xl"]}
              >
                Frontend Developer
              </Heading>
            </Animated>
            <HStack
              mb={["4", "4"]}
              mt={["4", "8"]}
              justify={["center", "left"]}
            >
              <Link href="https://github.com/MAhmedSid" target="_blank">
                <i className="hoverBg hover:text-white  fa-brands fa-github border-2 border-black rounded-full border-solid text-3xl p-2 "></i>
              </Link>
              <Link
                href=" https://www.linkedin.com/in/muhammad-ahmed-siddiqui-webdeveloper/ "
                target="_blank"
              >
                <i className="hoverBg hover:text-white  fa-brands fa-linkedin border-2 border-black rounded-full border-solid text-3xl p-2 "></i>
              </Link>
            </HStack>

            <Animated animationIn="fadeIn" animationInDuration={1000}>
              <Text
                as="p"
                fontSize="md"
                mt={["16", "8"]}
                px={["8", "0"]}
                mb={["24", "0"]}
                fontFamily="Montserrat"
              >
                "I am a skilled React and Front End Developer with experience
                working with a variety of UI libraries. I have a passion for
                creating visually stunning and intuitive web applications and
                delivering high-quality results."
              </Text>
            </Animated>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default About;
