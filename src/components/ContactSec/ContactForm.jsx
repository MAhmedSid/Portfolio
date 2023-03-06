import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useForm } from "@formspree/react";
import * as Yup from "yup";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import "./FormButton.css";
import gsap from "gsap";
import chroma from "chroma-js";
import Overlay from "./FormResOverlay";
import SubmitConfetti from "./SubmitConfetti";
import PulseLoader from "react-spinners/PulseLoader";
import { Animated } from "react-animated-css";

const ContactForm = () => {
  //FOR REMOVING CONFETTI ANIMATION AFTER EFFECT
  const confettiRemover = async () => {
    setTimeout(() => {
      setRunConfetti(false);
    }, 5000);
  };

  // const formId = process.env.REACT_APP_FORM_ID

  // DISCLOSURE FOR SUBMIT RESPONSE MODAL.
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SWITCH FOR RUN CONFETTI EXPLOSION.
  const [runConfetti, setRunConfetti] = useState(false);

  // USEFORM HOOK FOR SUBMITTING FORM TO FORMSPREE.
  const [state, handleSubmitFormSpree] = useForm(process.env.VITE_FORM_ID);

  // FORMIK FORM STRUCTURING
  const { touched, errors, getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phnum: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Let'me know your good name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Let'me know your email address"),
      phnum: Yup.string().optional(),
      subject: Yup.string().required("Please give a title"),
      message: Yup.string()
        .required("Please provide your valuable message")
        .min(25, "I am looking for your message with atleast 25 characters"),
    }),
    onSubmit: async (values, actions) => {
      const response = await handleSubmitFormSpree(values);
      await callBack(response.body.ok, actions);
    },
  });

  const callBack = async (status, action) => {
    if (status) {
      onOpen();
      setRunConfetti(true);
      action.resetForm();
      confettiRemover();
    }
  };
  //JSX OF SUBMIT BUTTON
  useEffect(() => {
    document.querySelectorAll(".glow-button").forEach((button) => {
      const gradientElem = document.createElement("div");
      gradientElem.classList.add("gradient");

      button.appendChild(gradientElem);

      button.addEventListener("pointermove", (e) => {
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
          "--pointer-x": `${x}px`,
          "--pointer-y": `${y}px`,
          duration: 0.6,
        });

        gsap.to(button, {
          "--button-glow": chroma
            .mix(
              getComputedStyle(button)
                .getPropertyValue("--button-glow-start")
                .trim(),
              getComputedStyle(button)
                .getPropertyValue("--button-glow-end")
                .trim(),
              x / rect.width
            )
            .hex(),
          duration: 0.2,
        });
      });
    });
  }, []);

  return (
    <>
    {console.log(process.env.VITE_FORM_ID)}
      <Box
        id="contact"
        bg="blackAlpha.500"
        backdropBlur="3xl"
        my={["8", "8"]}
        mx={["8", "0"]}
        rounded={["lg", "none"]}
      >
        <Heading
          data-aos="zoom-in"
          data-aos-duration="1000"
          fontSize={["3xl", "6xl"]}
          textAlign={["center", "center"]}
          mt={["8", "8"]}
        >
          Get in touch
        </Heading>
        <Box className="outerBox" px={["0", "24"]} py={["0", "4"]}>
          <Box className="innerBox">
            <form onSubmit={handleSubmit}>
              <Flex
                mt={["0", "8"]}
                direction={["column", "row"]}
                justify={["normal", "space-between"]}
              >
                <FormControl
                  isInvalid={touched.name && errors.name}
                  px={["8", "0"]}
                  pt={["8", "0"]}
                  isRequired
                >
                  <FormLabel
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontFamily="baloo2"
                    fontSize={["md", "xl"]}
                  >
                    Name
                  </FormLabel>
                  <Input
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontFamily="Montserrat"
                    {...getFieldProps("name")}
                    name="name"
                    variant="filled"
                    backgroundColor="blackAlpha.500"
                    autoComplete="off"
                    _hover={{ borderColor: "#332db3" }}
                    textColor="white"
                    fontWeight="light"
                    _focus={{ borderColor: "#332db3", boxShadow: "none" }}
                    size={["md", "lg"]}
                    type="text"
                  />
                  <FormErrorMessage position="absolute" textColor="red">
                    {errors.name}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  ml={["0", "16"]}
                  isInvalid={touched.email && errors.email}
                  px={["8", "0"]}
                  pt={["14", "0"]}
                  isRequired
                >
                  <FormLabel
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontFamily="baloo2"
                    fontSize={["md", "xl"]}
                  >
                    Email
                  </FormLabel>
                  <Input
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontFamily="Montserrat"
                    {...getFieldProps("email")}
                    name="email"
                    variant="filled"
                    size={["md", "lg"]}
                    autoComplete="off"
                    backgroundColor="blackAlpha.500"
                    _hover={{ borderColor: "#332db3" }}
                    textColor="white"
                    fontWeight="light"
                    _focus={{ borderColor: "#332db3", boxShadow: "none" }}
                    type="email"
                  />
                  <FormErrorMessage position="absolute" textColor="red">
                    {errors.email}
                  </FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex
                mt={["0", "8"]}
                direction={["column", "row"]}
                justify={["normal", "space-between"]}
              >
                <FormControl
                  isInvalid={touched.phnum && errors.phnum}
                  px={["8", "0"]}
                  pt={["14", "10"]}
                >
                  <FormLabel
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontSize={["md", "xl"]}
                    fontFamily="baloo2"
                  >
                    Ph. number <span className="font-light">(optional)</span>
                  </FormLabel>
                  <Input
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontFamily="Montserrat"
                    {...getFieldProps("phnum")}
                    name="phnum"
                    variant="filled"
                    size={["md", "lg"]}
                    autoComplete="off"
                    backgroundColor="blackAlpha.500"
                    _hover={{ borderColor: "#332db3" }}
                    textColor="white"
                    fontWeight="light"
                    _focus={{ borderColor: "#332db3", boxShadow: "none" }}
                    type="tel"
                  />
                  <FormErrorMessage position="absolute" textColor="red">
                    {errors.phnum}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  ml={["0", "16"]}
                  isInvalid={touched.subject && errors.subject}
                  px={["8", "0"]}
                  pt={["8", "10"]}
                >
                  <FormLabel
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontSize={["md", "xl"]}
                    fontFamily="baloo2"
                  >
                    Title
                  </FormLabel>
                  <Input
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    fontFamily="Montserrat"
                    {...getFieldProps("subject")}
                    name="subject"
                    variant="filled"
                    size={["md", "lg"]}
                    autoComplete="off"
                    backgroundColor="blackAlpha.500"
                    _hover={{ borderColor: "#332db3" }}
                    textColor="white"
                    fontWeight="light"
                    _focus={{ borderColor: "#332db3", boxShadow: "none" }}
                    type="text"
                  />
                  <FormErrorMessage position="absolute" textColor="red">
                    {errors.subject}
                  </FormErrorMessage>
                </FormControl>
              </Flex>

              <FormControl
                mt={["0", "8"]}
                pb={["8", "0"]}
                isInvalid={touched.message && errors.message}
                px={["8", "0"]}
                pt={["12", "10"]}
                isRequired
              >
                <FormLabel
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  fontSize={["md", "xl"]}
                  fontFamily="baloo2"
                >
                  Message
                </FormLabel>
                <Textarea
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  fontFamily="Montserrat"
                  {...getFieldProps("message")}
                  name="message"
                  variant="filled"
                  backgroundColor="blackAlpha.500"
                  autoComplete="off"
                  _hover={{ borderColor: "#332db3" }}
                  textColor="white"
                  fontWeight="light"
                  _focus={{ borderColor: "#332db3", boxShadow: "none" }}
                  height={["auto", "250"]}
                  resize="none"
                />
                <FormErrorMessage position="absolute" textColor="red">
                  {errors.message}
                </FormErrorMessage>
              </FormControl>
              <Animated animationIn="fadeInUp">
                <Box>
                  <button
                    disabled={state.submitting}
                    type="submit"
                    className={`glow-button mt-12 md:mt-20 m-auto block md:w-48 rounded-xl mb-5 md:mb-0 ${
                      errors.message ||
                      errors.name ||
                      errors.email ||
                      errors.phnum ||
                      errors.subject
                        ? "opacity-50"
                        : "opacity-100"
                    }`}
                  >
                    <span
                      style={{ fontFamily: "baloo2" }}
                      className=" text-base  md:text-2xl px-4 md:px-2 py-3 "
                    >
                      {state.submitting ? (
                        <PulseLoader
                          color="#399fe9"
                          size={12}
                          speedMultiplier={0.9}
                        />
                      ) : (
                        "Let's Connect"
                      )}
                    </span>
                  </button>
                </Box>
              </Animated>
            </form>
          </Box>
        </Box>
      </Box>
      {isOpen && <Overlay isOpen={isOpen} onClose={onClose} />}
      <Box
        position="absolute"
        className={`left-36 md:left-[800px] ${!runConfetti && "display-none"}`}
      >
        {runConfetti && <SubmitConfetti isExploding={runConfetti} />}
      </Box>
    </>
  );
};

export default ContactForm;
