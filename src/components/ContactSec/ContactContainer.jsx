import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import "./FormButton.css";

const Contact = () => {
  return (
    <Flex direction={["column", "row"]} justify="space-around">
      <Box>
        <Heading
          display={["block", "block"]}
          data-aos="fade-right"
          data-aos-duration="1000"
          fontFamily="baloo2"
          px={["6", "0"]}
          mx={["4", "auto"]}
          mt={["12", "44"]}
          textAlign={["center", "left"]}
          opacity="0.5 !important"
          fontSize={["3xl", "6xl"]}
          maxH={["8", "0"]}
        >
          <span className="text-blue-700">Have</span> <span>a</span>{" "}
          <span className="text-indigo-700">Project!</span>
        </Heading>
        <Heading
          data-aos="fade-right"
          data-aos-duration="1000"
          fontFamily="baloo2"
          display={window.innerWidth > 500 ? "block" : "block"}
          textAlign={["center", "left"]}
          opacity="0.5 !important"
          fontSize={["3xl", "6xl"]}
          mt={["4", "20"]}
        >
          <span className="text-violet-600">I</span> Would{" "}
          <span className="text-fuchsia-500">Love</span> to{" "}
          <span className="text-indigo-700">help.</span>
        </Heading>
        <Flex
          mt={["8", "96"]}
          alignItems={["center", "left"]}
          direction={["column", "row"]}
        >
          <Text
            data-aos="fade-right"
            data-aos-duration="1000"
            fontSize={["sm", "lg"]}
            fontFamily="Montserrat"
          >
            - mahmedsiddiqui333@gmail.com
          </Text>
          <Text
            data-aos="fade-right"
            data-aos-duration="1000"
            fontSize={["sm", "lg"]}
            fontFamily="Montserrat"
            ml={["0", "12"]}
          >
            - (+92) 333-0233-082
          </Text>
        </Flex>
      </Box>

      <ContactForm />
    </Flex>
  );
};

export default Contact;
