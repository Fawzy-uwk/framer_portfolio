import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax({ type, dark }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yScroll = useTransform(scrollYProgress, [0, 2], ["0%", "1000%"]);
  const sScroll = useTransform(scrollYProgress, [0, 2], ["0%", "200%"]);
  const starsScroll = useTransform(scrollYProgress, [0, 2], ["0%", "280%"]);

  return (
    <motion.div
      className="h-[50dvh] lg:h-[100dvh] w-full flex items-center justify-center relative overflow-hidden"
      ref={ref}
    >
      <motion.h1
        className="lg:text-8xl  text-5xl  text-blue-950 z-[5] font-bold text-center"
        style={{ y: yScroll }}
      >
        {type === "do" ? "What I Do 🤔?" : "What I Did 🔚 ?"}
      </motion.h1>
      <motion.img
        src="/mountains.png"
        className="absolute z-10 w-full bottom-0 lg:bottom-auto lg:h-full"
      />
      {dark === "dark" && (
        <motion.img
          src="stars.png"
          style={{ x: starsScroll }}
          className="absolute"
        />
      )}
      {dark === "dark" ? (
        <motion.img
          src="/planets.png"
          style={{ y: sScroll }}
          className="absolute bottom-96 lg:-bottom-24"
        />
      ) : (
        <motion.img
          src="/sun.png"
          style={{ y: sScroll }}
          className="absolute bottom-96 lg:-bottom-28"
        />
      )}
    </motion.div>
  );
}

export default Parallax;
