import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const data = [
    "Programmer",
    "Web Developer",
    "React Developer",
    "Front-End Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });
  const tick = () => {
    let i = loopNum % data.length;
    let fullText = data[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);
    if (isDeleting) setDelta((prev) => prev / 2);
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);

      setDelta(200);
      setLoopNum(loopNum + 1);
    }
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const Sbutton = {
    y: 20,
    opacity: 0,
    transition: { duration: 2, repeat: Infinity },
  };

  const textSlide = {
    initial: { x: "120%" },
    animate: {
      x: "-120%",

      transition: { duration: 15, repeatType: "loop", repeat: Infinity },
    },
  };
  return (
    <div className="lg:h-[88%] h-full relative">
      <div className="xl:w-[1366px] m-auto flex items-center h-full flex-col xl:flex-row gap-20">
        <motion.div
          className="flex items-center lg:items-start gap-8 flex-col mt-2"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-3xl font-[600] text-sky-800"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Welcome to my Portfolio 
          </motion.h2>

          <motion.h1
            className="text-4xl text-center lg:text-start lg:text-6xl text-sky-800 font-bold lg:leading-[1.4]"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            {`I'm Fawzy Mohamed`} <span className="txt-rotate"></span>
            <br /> <span className="wrap text-sky-950">A {text}</span>
          </motion.h1>

          <motion.div
            className="flex gap-8 z-[8]"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="#portfolio"
              className="py-4 px-6 bg-transparent rounded-md border-[2px] text-sky-950 font-medium text-lg border-sky-950"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Latest Work
            </motion.a>
            <motion.a
              className="py-4 px-6 bg-sky-950 rounded-md  text-sky-50 font-medium text-xl tracking-widest"
              href="#contact"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Contact
            </motion.a>
          </motion.div>

          <motion.img
            src="./scroll.png"
            className=" rounded-lg"
            animate={Sbutton}
          />
        </motion.div>
        <motion.div
          className="back bottom-64 xl:bottom-[-5%] text-8xl lg:text-[30rem] w-[full] absolute text-nowrap text-[#4c79ff20] opacity-50"
          variants={textSlide}
          animate="animate"
          initial="initial"
        >
          HTML CSS ReactJS
        </motion.div>

        <motion.img
          src="./hero.png"
          className="xl:absolute xl:top-0 h-100% w-full xl:w-[60%] xl:-right-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        />
      </div>
    </div>
  );
}

export default Hero;
