import React, { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination ,Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import ProjectCard from "./ProjectCard";
import "swiper/css/pagination";

const ProjectSwiper = () => {


  //hook for stop autoplay on mouse hover.
  const swiperRef = useRef(null);

  //for getting active slide refence.
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  //for updating active slide index.
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };


  //Cards Data rendered by slider.
  const projects = [
    {
      id: 1,
      imgSrc: "https://swiperjs.com/demos/images/nature-1.jpg",
      title: "Netflix Clone",
      desc: "this is project of netflix clone,fantastic web 3 based and advanced web app",
      link: "",
    },
    {
      id: 2,
      imgSrc: "https://swiperjs.com/demos/images/nature-2.jpg",
      title: "project2",
      desc: "Most advancecd concept using website clone or code editor or something advanced from which i can learn ",
      link: "",
    },
    {
      id: 3,
      imgSrc: "https://swiperjs.com/demos/images/nature-3.jpg",
      title: "any creative and expensive project",
      desc: "this is project 3",
      link: "",
    },
    {
      id: 4,
      imgSrc: "https://swiperjs.com/demos/images/nature-4.jpg",
      title: "any creative and expensive project",
      desc: "this is project 4",
      link: "",
    },
  ];

  return (
    <Box
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            speed: 2000,
          },
        }}
       
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        id="projectsSwiper"
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={4000}
        coverflowEffect={{
          rotate: 50,
          stretch: 70,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination,Keyboard]}
        className="mySwiper "
      >
        {projects.map((obj, index) => {
          return (
            <SwiperSlide
              style={{
                filter: index === activeSlideIndex ? "none" : "blur(8px)",
                backgroundImage: `url(${obj.imgSrc})`,
              }}
              key={obj.id}
              className={`projectsSlides  md:h-96 hover:object-cover`}
            >
              <ProjectCard title={obj.title} desc={obj.desc} link={obj.link} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ProjectSwiper;
