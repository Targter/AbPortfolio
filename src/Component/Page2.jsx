// for this i have to import vertical timecomponet from react
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "./MotionValue";
import { experiences } from "./ALLData";
import StarWrapper from "./StarWrapper";
import React from "react";
import Page2ModelContainer from "./Page2ModelContainer";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ExperienceCard = React.memo(({ experience }) => {
  // const { experience } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: "#1d1836",
        background: "rgba(45 55 69)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center lg:w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      className="lg:w-full w-[95%] h-auto"
    >
      <div>
        <h3 className="text-white lg:text-[24px] text-lg font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary lg:text-[16px] text-sm font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="lg:mt-5 mt-3 list-disc lg:ml-5 ml-2 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 lg:text-[14px] text-[12px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

const Box3Container = ({ ClickForBg }) => {
  const fun2 = () => {
    ClickForBg(3);
  };
  return (
    <>
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={` w-full mx-auto relative h-4/5 bg-black lg:pl-28 lg:pt-[80px] overflow-x-hidden flex flex-col items-center ]`}
      >
        <motion.div
          className="w-full h-auto bg-black relative lg:pl-11 pl-2  "
          variants={staggerContainer(0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          id="WorkExperience"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="lg:w-4/5 w-full h-auto flex flex-col items-center ml-1 lg:ml-11 md:ml-24 mt-11">
            <motion.div variants={textVariant()}>
              <div className="text-sm text-white md:text-lg ">
                WHAT I HAVE DONE SO FAR
              </div>
              <div className="md:text-6xl text-4xl text-white md:mt-5 mt-2 md:mb-4 mb-1.5 font-bold md:font-extrabold md:w-full">
                Work Experience
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-8 flex flex-col mb-[100px]">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
          {/* <Page2ModelContainer></Page2ModelContainer> */}
        </motion.div>

        <motion.span
          className="sideIcon w-[10px] text-5xl mb-[100px] text-center"
          initial={{ color: "#1e207d", scale: 1 }}
          animate={{ color: ["#1d2529", "#1e207d"], scale: [1.2, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={fun2}
        >
          <Link to="/Projects">
            <FaCircleArrowDown />
          </Link>
        </motion.span>
      </motion.section>
    </>
  );
};

export default Box3Container;

// export default StarWrapper(Box3Container, "work");
