import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./MotionValue";
import { projects } from "./ALLData";
import { Tilt } from "react-tilt";
import Box6container from "./Page3ContactForm";
import StarWrapper from "./StarWrapper";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  topath,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex flex-wrap justify-center w-auto addfontpage3"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="p-5 lg:rounded-2xl rounded-xl lg:w-[350px] w-[250px] bg-[rgb(21 16 48)] bg-[rgb(45,55,69)] lg:flex-none flex flex-col lg:items-start items-center overflow-hidden h-[450px]"
      >
        <div className="relative lg:w-[80%] w-[120px] lg:h-[120px] h-[120px]  flex gap-4">
          <div
            onClick={() => window.open(topath, "_blank")}
            className="hover:scale-[1.1]"
          >
            <img
              src={image}
              alt="project_image"
              className="lg:w-[120px] lg:h-[120px] h-[80px] w-[80px] object-cover rounded-2xl overflow-hidden "
            />
          </div>

          <div className="relative flex items-start card-img_hover w-[30px] h-[30px] mt-5">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient rounded-full cursor-pointer "
            >
              <img
                src="git.png"
                alt="source code"
                className="hover:scale-[1.3]"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 lg:text-start text-center">
          <h3 className="text-white font-bold text-[24px] ">{name}</h3>
          <p className="mt-2 text-stone-100 text-[14px] addfontpage3">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-white">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Box5Container = () => {
  return (
    <>
      <motion.div
        className="w-full h-auto bg-black relative lg:pl-11 pl-2 "
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        id="WorkExperience"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="lg:w-4/5 w-full h-auto flex flex-col items-center ml-1 lg:ml-1 md:ml-24 mt-14 ">
          <motion.div variants={textVariant()} id="Projects">
            <p className="text-lg text-white md:text-xl font-bold w-full text-center">
              My work
            </p>
            <h2 className="md:text-6xl text-4xl text-white mt-2 mb-1.5 font-bold md:font-extrabold md:w-full ">
              Projects.
            </h2>
          </motion.div>
          <div className="w-full flex overflow-hidden justify-center">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-white overflow-hidden lg:pl-0 pl-2 text-center addfontpage3
          lg:pr-0 pr-2 "
            >
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </motion.p>
          </div>
        </motion.div>
        <div className="h-auto mt-[20px] flex flex-wrap lg:gap-11 gap-5 lg:justify-start justify-center ">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        <Box6container />
      </motion.div>
    </>
  );
};

// export default Box5Container;
export default StarWrapper(Box5Container, "projectbox");
