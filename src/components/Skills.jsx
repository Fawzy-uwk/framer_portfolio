import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import tail from "../../public/tailwind.svg";
import { useRef } from "react";

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Skills() {
  const ref = useRef();

  const isInView = useInView(ref, { threshold: 0.5, rootMargin: "-50px" });

  return (
    <motion.div
      className="min-h-[100dvh] flex items-start flex-col z-[100] bg-transparent "
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div
        className="min-h-[100dvh] w-full m-auto flex items-center flex-col gap-20 py-8 bg-transparent"
        variants={variants}
      >
        <motion.div
          className="flex w-full sm:w-auto self-end items-center gap-4 bg-transparent"
          variants={variants}
        >
          <p className="text-end font-[500] text-lg text-sky-950 capitalize bg-transparent">
            I focus on developing websites <br /> and myself
          </p>
          <hr className="w-80  border-[1.5px] border-sky-900 bg-transparent" />
        </motion.div>
        <motion.div variants={variants}>
          <motion.div className="flex items-center justify-center flex-wrap lg:p-0 px-20 text-start gap-3 bg-transparent">
            <img
              src="people.webp"
              className="h-[4.8rem] w-[15rem] rounded-[50px] object-cover"
            />
            <h1 className="s text-6xl font-bold text-sky-950 capitalize hover:text-sky-600">
              Unique
            </h1>
            <span className="capitalize font-thin text-sky-950 text-6xl ">
              ideas
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-center xl:text-start gap-3 flex-wrap lg:p-0 px-20"
            variants={variants}
          >
            <h1 className="s text-6xl font-bold text-sky-950 capitalize  hover:text-sky-600">
              for your
            </h1>
            <span className="font-thin capitalize text-sky-950 text-6xl ">
              business.
            </span>
            <span className="px-12 py-7 bg-sky-950 text-sky-50 text-lg capitalize rounded-full">
              what is my skills?
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 py-8"
          variants={variants}
        >
          <div className="card xl:border-r-0 xl:border-b-0 ">
            <h2 className="H2 ">
              <FaHtml5 fill="#e34c26" />
              HTML
            </h2>
            <p className="P ">
              The first thing I have learned in this track with a very good
              knoledge of it and it is the base of web development
            </p>
            <a href="#" className="button text-center">
              See Projects
            </a>
          </div>

          <div className="card xl:border-r-0  xl:border-b-0 ">
            <h2 className="H2 ">
              <FaCss3 fill="#264de4" />
              CSS
            </h2>
            <p className="P ">
              The second thing I have learned with a very good knowledge of it
              and the ability to develope in it
            </p>
            <a href="#" className="button text-center">
              See Projects
            </a>
          </div>

          <div className="card xl:border-b-0 xl:border-r-0">
            <h2 className="H2 ">
              <FaBootstrap fill="#0275d8" />
              Bootstrap
            </h2>
            <p className="P ">
              The first CSS framework I have learned with a decent knowledge of
              it and the ability to develope in it
            </p>
            <a href="#" className="button text-center">
              See Projects
            </a>
          </div>

          <div className="card xl:border-b-0">
            <h2 className="H2 flex items-center">
              <FaSass fill="#cc6699" size={32} />
              Sass
            </h2>
            <p className="P ">
              The second CSS framework I have learned with a decent knowledge of
              it and the ability to develope in it
            </p>
            <a href="#" className="button text-center">
              See Projects
            </a>
          </div>

          <div className="card xl:border-r-0">
            <h2 className="H2 flex items-center mr-0">
              <img src={tail} className="h-8" />
              TailwindCss
            </h2>
            <p className="P leading-[1.1]">
              The third CSS framework I have learned (and the prefered styling
              method for me) with excellent knowledge of it and the ability to
              develop in it
            </p>
            <a href="#" className="button text-center ">
              See Projects
            </a>
          </div>

          <div className="card xl:border-r-0">
            <h2 className="H2 flex items-center">
              <FaJs fill="#cfb719" color="#fff" size={32} />
              JavaScript
            </h2>
            <p className="P ">
              The third thing that i have learned with a very good knowledge of
              its basics and DOM and OOP and ES6
            </p>
            <a href="#" className="button text-center ">
              See Projects
            </a>
          </div>

          <div className="card xl:border-r-0 ">
            <h2 className="H2 flex items-center">
              <FaReact fill="#00c5d9" color="#fff" size={32} />
              React JS
            </h2>
            <p className="P ">
              a good knowledge with this library and I have worked with
              (state,redux,redux toolkit,react-router,and other npm libraries)
            </p>
            <a href="#" className="button text-center ">
              See Projects
            </a>
          </div>

          <div className="card ">
            <h2 className="H2 flex items-center">
              <FaGit fill=" #f1502f" color="#fff" size={32} /> &{" "}
              <FaGithub fill="#003c81" size={32} />
              Git & Github
            </h2>
            <p className="P ">
              A very good knowledge fo dealing with it on commiting ,pulling and
              pushing projects and manipulating repository
            </p>
            <a href="#" className="button text-center ">
              See Projects
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
