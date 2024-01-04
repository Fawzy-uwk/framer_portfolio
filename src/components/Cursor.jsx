import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosision] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosision({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor xl:fixed xl:w-12 xl:h-12 xl:rounded-full xl:border-2 xl:border-gray-400 xl:z-[100000]"
      animate={{ x: position.x+10, y: position.y+10 }}
    ></motion.div>
  );
}

export default Cursor;
