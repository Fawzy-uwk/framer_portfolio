import {
  FaCopyright,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer({ dark }) {
  return (
    <footer className="flex items-center justify-center flex-col p-4">
      <div className="flex foot items-center justify-between ">
        <motion.a
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl text-blue-950 font-bold decoration-transparent "
        >
          LOGO
        </motion.a>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="social flex items-center gap-5"
        >
          <FaLinkedin size={35} color="#0077b5" />
          {dark === "dark" ? (
            <FaGithubSquare size={35} color="#2b3137" fill="#0076d1" />
          ) : (
            <FaGithubSquare size={35} color="#2b3137" fill="#0b168e" />
          )}
          <FaInstagramSquare size={35} color="#bc1888" />
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
