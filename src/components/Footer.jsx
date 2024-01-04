import {
  FaCopyright,
  FaGithub,
  FaLinkedin,
  
} from "react-icons/fa";
import { motion } from "framer-motion";
import navIcon3 from "../assets/img/nav-icon3.svg";


function Footer({ dark }) {
  return (
    <footer className="flex items-center justify-center flex-col p-4">
      <div className="flex foot items-center justify-between ">
      
      <motion.a
      href="#home"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-blue-950 font-bold decoration-transparent "
      >
        LOGO
      </motion.a>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.8 }}
        className="social lg:flex items-center gap-5 hidden"
      >
        <a
          href="https://www.linkedin.com/in/fawzy-mohamed-501610236/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={35} color="#0077b5" />
        </a>
        {dark === "dark" ? (
          <a
            href="https://github.com/Fawzy-uwk"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={35} color="#4078c0" fill="#0076d1" />
          </a>
        ) : (
          <a
            href="https://github.com/Fawzy-uwk"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={35} color="#2b3137" fill="#0b168e" />
          </a>
        )}
        <a
          href="https://www.frontendmentor.io/profile/Fawzy-uwk"
          className="w-10 h-10 p-[7px] rounded-full border-2 border-sky-900 flex items-center justify-center"
          target="_blank"
          rel="noreferrer"
        >
          <img src={navIcon3} alt="" className="w-10 h-10" />
        </a>
      </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.8 ,staggerChildren:.2}}
        
        className="gap-3 lg:text-3xl text-xl text-sky-500 flex text-center  items-center"
      >
        <FaCopyright size={35} stroke="white" color="white" />{" "}
        <strong className={dark === "dark" ? "text-sky-300" : "text-sky-900"}>
          2024
        </strong>{" "}
        by{" "}
        <h4
          className={
            dark === "dark"
              ? "text-sky-300 font-bold"
              : "text-sky-900 font-bold"
          }
        >
          Fawzy Mohamed
        </h4>
      </motion.div>
    </footer>
  );
}

export default Footer;
