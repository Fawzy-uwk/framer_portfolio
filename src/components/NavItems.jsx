import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const links = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Porfolio", path: "portfolio" },
  { name: "Contact", path: "contact" },
];

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
function NavItems({dark, handleDarkModeToggle }) {
  return (
    <motion.div className="absolute w-full h-full flex items-center justify-center flex-col gap-6">
      {links.map((link) => (
        <motion.a
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          variants={variants}
          key={link.name}
          href={`#${link.path}`}
          className="link text-4xl text-blue-950 font-[medium] cursor-pointer"
        >
          {link.name}
        </motion.a>
      ))}

      {dark === "dark" ? (
        <FaSun
          size={36}
          color="#FCB813"
          className="cursor-pointer"
          onClick={handleDarkModeToggle}
        />
      ) : (
        <FaMoon
          className="cursor-pointer"
          size={36}
          color="#100e76"
          onClick={handleDarkModeToggle}
        />
      )}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.8 }}
        className="social flex items-center gap-5 lg:hidden"
      >
        <FaLinkedin height={28} width={28} color="#0077b5" />
        <FaGithub height={28} width={28} color="#2b3137" fill="#0b168e" />
        <FaInstagram height={28} width={28} color="#bc1888" />
      </motion.div>
    </motion.div>
  );
}

export default NavItems;
