import { Flex, Heading, Box, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import bg from "../../assets/skillBg.svg";
import bgMb from "../../assets/skillBgMb.svg";
import SkillCard from "./SkillCard";

const Skills = () => {
  //PROJECTS DATA (WILL BE SEPARATE)
  const skills = [
    {
      id: 1,

      imageSrc: "images/react.png",
      heading: "React JS",
      desc: "ReactJS is a game-changer in UI development, enabling faster, more efficient, and cost-effective projects with scalable, maintainable, and high-quality code, backed by a large and active community.",
    },
    {
      id: 2,
      imageSrc: "images/node.png",
      heading: "Node JS",
      desc: "Node.js is a cutting-edge platform for building fast, scalable, and highly performant server-side applications, enabling your project to handle heavy traffic and data-intensive operations with ease.",
    },
    {
      id: 3,
      imageSrc: "images/ts.png",
      heading: "TypeScript",
      desc: "TypeScript is a game-changing language for building scalable, maintainable, and error-free applications, providing increased code reliability, improved team productivity, and reduced maintenance costs.",
    },
    {
      id: 4,
      imageSrc: "images/js.png",
      heading: "JavaScript",
      desc: "JavaScript is the backbone of web development, enabling dynamic user experiences, seamless integration with technologies, and endless possibilities for your project.",
    },
  ];

  return (
    <>
      <Box
        backgroundImage={[bgMb, bg]}
        backgroundRepeat="no-repeat"
        backgroundSize={["cover", "auto"]}
      >
        <Flex justify="space-around" direction={["column", "row"]}>
          <Box>
            <Heading
              data-aos="fade-right"
              data-aos-duration="1000"
              pb={["0", "8"]}
              mt="16"
              ml={["auto", "32"]}
              textAlign={["center", "left"]}
              fontSize={["3xl", "8xl"]}
              w={["100%", "37rem"]}
              bgGradient="linear-gradient(to right, #040404, #000000, #656565);"
              bgClip="text"
            >
              Focused on Cutting Edge Technologies
            </Heading>
          </Box>

          <VStack mb={["16", "28"]}>
            <Box mt={["16", "16"]} mb={["16", "24"]}>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-36 md:w-60 h-60 md:h-96"
              >
                {skills.map((obj) => {
                  return (
                    <SwiperSlide className="cardBg " key={obj.id}>
                      <SkillCard
                        imgSrc={obj.imageSrc}
                        heading={obj.heading}
                        desc={obj.desc}
                      />
                    </SwiperSlide>
                  );
                })}
                <SwiperSlide className="cardBg ">
                  <Heading
                    bgGradient=" radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
                    bgClip="text"
                    fontSize={["md", "3xl"]}
                    pt={["16", "16"]}
                    pb={["20", "20"]}
                    px={["4", "6"]}
                    textAlign="center"
                    className="backdrop-blur-lg"
                  >
                    I am adept at acquiring new knowledge. Next Card adding
                    soon...
                  </Heading>
                </SwiperSlide>
              </Swiper>
            </Box>
            <Text
              data-aos="zoom-in"
              data-aos-duration="1000"
              px={["8", "auto"]}
              textAlign={["center", "center"]}
              fontSize={["sm", "lg"]}
              w={["auto", "40rem"]}
              fontFamily="Montserrat"
            >
              "I gotta say, I'm just super into learning new stuff, especially
              when it comes to the latest and greatest tech. I mean, it's just
              so exciting to see how these advancements can change the game and
              really make a difference. That's why I'm always looking for ways
              to keep up-to-date and stay on top of the latest trends. And
              honestly, it's not just about staying ahead of the curve - I just
              genuinely love this stuff and I'm always hungry for more
              knowledge. So whether you're a client, a collaborator, or just
              someone who's as into this stuff as I am, let's chat and see where
              this journey takes us!"
            </Text>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Skills;
