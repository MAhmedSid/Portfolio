import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { Animated } from "react-animated-css";

const Logo = () => {
  return (
    <>
      <Flex direction={["column", "row"]}>
        <Animated animationIn="bounceIn" animationInDelay={2000}>
          <Image pointerEvents="none" draggable={false} src={logo}></Image>
        </Animated>
      </Flex>
    </>
  );
};

export default Logo;
