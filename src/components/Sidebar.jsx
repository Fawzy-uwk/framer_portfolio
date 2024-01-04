import { motion } from "framer-motion";
import { useState } from "react";

import { Toggle } from "./Toggle";
import NavItems from "./NavItems";


function Sidebar({setDark,dark,handleDarkModeToggle}) {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1400px at 40px 40px)",
      transition: { type: "spring", stiffness: 40, damping: 40 },
      animate: { opacity: 1, scale: 1 },
      initial: { opacity: 0, scale: 0 },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { delay: 0.2, type: "spring", stiffness: 300, damping: 40 },
      animate: { opacity: 1, scale: 1 },
      initial: { opacity: 0, scale: 0 },
    },
  };
  return (
    <motion.div
      className="flex fixed items-center justify-center flex-col z-[999]"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="side fixed w-80 h-[100dvh] bg-blue-50 top-0 left-0"
        initial={false}
        variants={variants}
      >
        <NavItems setDark={setDark} dark={dark} handleDarkModeToggle={handleDarkModeToggle} />
       
      </motion.div>

      <Toggle setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
