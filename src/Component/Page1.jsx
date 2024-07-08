import React from "react";
// import Tilt from "react-tilt";
import { Tilt } from "react-tilt";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion-3d";
import { services } from "./ALLData.js";
import { fadeIn, textVariant } from "./MotionValue.js";

import { FaCircleArrowDown } from "react-icons/fa6";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.7)}
      initial="hidden"
      animate={"show"}
      viewport={{ once: true, amount: 0.5 }}
      className="lg:w-64 w-36  p-[2px] rounded-[20px] "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-[20px] py-5 px-12 lg:min-h-[280px] min-h-[200px] lg:mx-0 mx-auto flex justify-evenly items-center flex-col bg-gray-700"
      >
        <img
          src={icon}
          alt="web-development"
          className="lg:w-16 lg:h-16 w-9 h-9 object-contain"
        />

        <h3 className="text-white lg:text-[20px] text-sm lg:font-bold font-light text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ ClickForBg }) => {
  const fun = () => {
    ClickForBg(2);
  };
  return (
    <>
      <div
        className={`max-w-7xl w-[100%] mx-auto relative z-0 h-4/5 lg:pl-28  pl-2 pt-6 text-black overflow-hidden page1skills `}
      >
        <motion.div
          variants={textVariant()}
          className=" lg:flex-none flex flex-col lg:items-start items-center mt-[50px] gap-3"
          id="Skills"
        >
          {/* <div className="text-black md:text-xl text-sm">My Work</div> */}
          <motion.div className="md:text-6xl text-4xl text-black font-bold md:font-extrabold md:w-full">
            Skills
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-3 lg:w-[60%] w-full md:text-[16px] text-lg text-black text-justify lg:pr-0 pr-4 lg:pl-0 pl-2 page1skills font-medium"
          variants={fadeIn("", "", 0.6, 1)}
        >
          I am a proficient full stack developer skilled in frontend
          technologies such as React.js for building interactive user interfaces
          and Three.js for integrating 3D models into websites. I specialize in
          creating smooth animations using GSAP and Framer Motion to enhance
          user experience. On the backend, I excel in Node.js, proficient in
          developing RESTful APIs, managing databases, and ensuring scalable
          server architecture. My expertise allows me to deliver end-to-end web
          applications that are both dynamic and responsive.
        </motion.div>
        <div className="mt-6 flex flex-wrap gap-5 lg:justify-start items-center justify-center pb-2 ">
          {services.map((service, index) => (
            <ServiceCard
              title={service.title}
              index={index}
              icon={service.icon}
              key={index}
            />
          ))}
        </div>
        <motion.div className="w-full mt-7 flex justify-center h-[70px] ">
          <motion.span
            className="sideIcon w-[10px] text-5xl"
            initial={{ color: "#1e207d", scale: 1 }}
            animate={{ color: ["#1d2529", "#1e207d"], scale: [1.2, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            onClick={fun}
          >
            <Link to="/Work-experience">
              <FaCircleArrowDown />
            </Link>
          </motion.span>
        </motion.div>
      </div>
    </>
  );
};
export default About;
// export default StarWrapper(About, "about");
