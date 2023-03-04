import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const SkillCard = (props) => {
  return (
    <Box className="backdrop-blur-lg">
      <Flex data-aos="zoom-in" data-aos-duration="1000">
        <Image
          boxSize={["12", "16"]}
          mt="8"
          ml={["2", "4"]}
          src={props.imgSrc}
        ></Image>
        <Text
          opacity="0.7"
          textColor="black"
          mt="12"
          ml={["0", "4"]}
          fontSize={["md", "2xl"]}
        >
          {props.heading}
        </Text>
      </Flex>
      <Text
        data-aos="zoom-in"
        data-aos-duration="1000"
        fontSize={["xx-small", "md"]}
        mt={["2", "8"]}
        pb="24"
        px="6"
        fontWeight="normal"
        textColor="black"
        textAlign="center"
      >
        {props.desc}
      </Text>
    </Box>
  );
};

export default SkillCard;
