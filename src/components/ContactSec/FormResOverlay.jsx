import {
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Modal,
  Button,
  Text,
} from "@chakra-ui/react";

const FormResOverlay = (props) => {
  //OVERLAY CREATED FOR MODAL
  const Overlay = () => (
    <ModalOverlay
      className="!z-10"
      backgroundColor="blackAlpha.500"
      backdropFilter="blur(4px)"
    />
  );

  return (
    <Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
      <Overlay />
      <ModalContent
        p={["8", "8"]}
        w={["16rem", "28rem"]}
        textAlign={["center", "left"]}
        mx={["8", "auto"]}
        borderRadius="2xl"
        boxShadow="dark-lg"
        background="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)"
      >
        <ModalBody
          fontWeight={["auto", "normal"]}
          backgroundClip="text"
          bgGradient="linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);"
        >
          <Text fontFamily="baloo2" fontSize={["auto", "2xl"]}>
            Thank you for your interest in connecting with me. Your submission
            has been received and I appreciate the time you've taken to reach
            out. I look forward to reviewing your information and will be in
            touch with you soon. In the meantime, stay inspired!
          </Text>
        </ModalBody>

        {/* #FIXME   BUG NEED TO FIX (CURSOR IS HIDING BY THE MODAL CONTENT - ZINDEX ISSUE) */}
        <ModalFooter
          display={["block", "none"]}
          justifyContent={["center", "flex-end"]}
        >
          <Button
            fontFamily="baloo2"
            rounded="3xl"
            _hover={{
              color:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              backgroundClip: "text",
            }}
            style={{
              backgroundColor: "#FBAB7E",
              backgroundImage:
                "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
              backgroundClip: "text",
            }}
            fontSize={["auto", "4xl"]}
            py={["auto", "6"]}
            onClick={props.onClose}
          >
            <i className="fas fa-thumbs-up  "></i>
            <span className="md:pt-2 pt-1">Great!</span>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormResOverlay;
