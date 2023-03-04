import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import Logo from "./Logo";
import DrawerMenu from "./DrawerMenu";
import { Animated } from "react-animated-css";

const Navbar = () => {
  // FOR ENABLING/DISABLING DRAWERMENU
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Flex h={["auto", "36"]} as="nav" justify="space-between">
        <Box w={["44", "60"]} ml={["0", "44"]} mt={["6", "34"]}>
          <Logo />
        </Box>
        {isLargerThan768 ? (
          <Animated animationIn="fadeIn">
            <HStack
              fontSize="2xl"
              fontFamily="baloo2"
              mr="16"
              mt="16"
              spacing="16"
            >
              <Link href="#work">Work</Link>
              <Link href="#contact">Contact</Link>

              <Button
                background="linear-gradient(to right, #232526, #414345);"
                fontSize="xl"
                fontWeight="hairline"
                textColor="white"
                _hover={{ textColor: "black", background: "white" }}
              >
                <a
                  href="../../assets/Resume.pdf"
                  download="../../assets/Resume.pdf"
                >
                  Resume
                </a>
              </Button>
            </HStack>
          </Animated>
        ) : (
          <Box mt="12" mr="6">
            <DrawerMenu></DrawerMenu>
          </Box>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
