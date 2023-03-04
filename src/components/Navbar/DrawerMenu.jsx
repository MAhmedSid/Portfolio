import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  useDisclosure,
  Link,
  Box,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const DrawerMenu = () => {
  //CHAKRA-UI HOOK FOR OPENING/CLOSING CALLS
  const { isOpen, onOpen, onClose } = useDisclosure();

  //FOR PREVENTING FROM CONFLICT OF (DRAWER NOT CLOSING WHEN CLICKED ON NAVIGATION LINK)
  function handleLinkClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    onClose();
    setTimeout(() => {
      window.location = href;
    }, 200);
  }

  return (
    <>
      <IconButton
        aria-label="Open mobile navbar"
        icon={<HamburgerIcon />}
        size="md"
        variant="ghost"
        onClick={onOpen}
      />

      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Box>
              <Heading href="#" fontFamily="baloo2" fontSize="4xl">
                Portfolio
              </Heading>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Button
              background="linear-gradient(to right, #232526, #414345);"
              fontSize="xl"
              fontWeight="hairline"
              textColor="white"
              _hover={{ textColor: "black" }}
              fontFamily="baloo2"
              my="8"
            >
              <a
                href="../../assets/Resume.pdf"
                download="../../assets/Resume.pdf"
              >
                Resume
              </a>
            </Button>
            <VStack
              fontFamily="baloo2"
              textDecoration="none"
              w="3"
              align="left"
              textTransform="uppercase"
            >
              <Link
                onClick={handleLinkClick}
                href="#work"
                fontSize="xl"
                fontWeight="normal"
                mb="8"
                mt="12"
              >
                Work
              </Link>
              <Link
                onClick={handleLinkClick}
                href="#contact"
                fontSize="xl"
                fontWeight="normal"
              >
                Contact
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
