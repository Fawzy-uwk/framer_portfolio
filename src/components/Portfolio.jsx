import imgurl from "../assets/img/The_Wild_Oasis.png";
import imgurl2 from "../assets/img/Three-JS-Animation.png";

import imgurl6 from "../assets/img/UsePopcorn.png";

import imgurl11 from "../assets/img/Coffee - Google Chrome 12_14_2023 9_05_49 PM.png";
import imgurl12 from "../assets/img/WC-2022 - Google Chrome 12_16_2023 4_31_51 PM.png";
import imgurl13 from "../assets/img/Travel - Google Chrome 12_16_2023 4_34_44 PM.png";
import imgurl14 from "../assets/img/Home - Google Chrome 12_16_2023 4_38_41 PM.png";
import imgurl15 from "../assets/img/PopCorn.png";
import imgurl16 from "../assets/img/Crypto.png";
import imgurl17 from "../assets/img/Dashboard.png";
import imgurl18 from "../assets/img/ReactChat.png";
import imgurl19 from "../assets/img/Real-estate.png";
import imgurl20 from "../assets/img/google.png";
import imgurl21 from "../assets/img/reactBoot.png";

import imgurl22 from "../assets/img/ReactForecast.png";

import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "The Wild Oasis",
    description:
      "A project with React JS with advanced features and with supabase DB server and styled components",
    image: imgurl,

    url: "https://the-wild-oasis2023.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/wild_oasis",
  },
  {
    title: "ThreeJs Animation",
    description:
      "A React JS (vite) project using ThreeJS library that provides good animations",
    image: imgurl2,
    url: "https://threejs-animation-4412fd.netlify.app",
    repo: "https://github.com/Fawzy-uwk/portfolio",
  },

  {
    title: "Use PopCorn",
    description:
      "A React Js Projects that fetches a movies API with some other features",
    image: imgurl6,
    url: "https://use-popcorn-2023.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/UsePopCorn",
  },

  {
    title: "Coffee Site",
    description:
      "A HTML CSS(pure) JS project as a simulation of coffee store website",
    image: imgurl11,
    url: "https://good-coffee-df4006.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/Coffee-site",
  },

  {
    title: "WC 2022",
    description:
      "A HTML CSS(with bootstrap) JS project as a simulation of sports website about Qatar World Cup 2022",
    image: imgurl12,
    url: "https://world-cup-86e09b.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/WC2022",
  },

  {
    title: "Travel Site",
    description:
      "A HTML CSS JS project as a simulation of a travel booking website",
    image: imgurl13,
    url: "https://travel-site-5e166d.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/Travel",
  },

  {
    title: "PopCorn",
    description:
      "A HTML CSS JS project as a simulation of movies website using tmdb API ",
    image: imgurl15,
    url: "https://popcorn-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/popcorn",
  },

  {
    title: "Hendami",
    description:
      "A Real-world website for a Qatari clothes brand with HTML CSS(with bootstrab) and Js with python(django) backend. I did the front-end with my team  ",
    image: imgurl14,
    url: "https://hindami.site/",
    repo: "https://github.com/tabana1/Hendami",
  },

  {
    title: "CryptoReact",
    description:
      "ReactJs project that displays data about cryptocurrency and its news from a fetched API ",
    image: imgurl16,
    url: "https://cryptoreact2024.netlify.app",
    repo: "https://github.com/Fawzy-uwk/cryptoReact",
  },

  {
    title: "Dashboard",
    description:
      "ReactJs project that displays cahrts and cards from syncfusion and gets data from a dummy data file as a simulation of a market",
    image: imgurl17,
    url: "https://shopdash2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/ShopDash",
  },

  {
    title: "React Caht",
    description:
      "ReactJs project as simulation of chatting app with firebase firestore that stores chats and users with redux and redux toolkit for state management ",
    image: imgurl18,
    url: "https://react-chat-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/chat",
  },

  {
    title: "ReactEstate",
    description:
      "ReactJS project as a simulation of real estate websites that displays data from a dummy data file  ",
    image: imgurl19,
    url: "https://react-estate-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/estate",
  },

  {
    title: "Google Search",
    description:
      "ReactJS project as a simulation of google search engine using google-search API ",
    image: imgurl20,
    url: "https://react-estate-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/estate",
  },

  {
    title: "Portofolio Version 2.0",
    description:
      "ReactJS project using react-bootstrap that can be used as a portofolio website and ability to send emails",

    image: imgurl21,
    url: "https://glowing-lebkuchen-200f5b.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/porfolio_v2",
  },

  {
    title: "React Forecast",
    description:
      "ReactJS project that`s a simulation of weather&forcasting apps using fetched data from openWeatherMap API ",

    image: imgurl22,
    url: "https://react-forecast-2024.netlify.app/",
    repo: "https://github.com/Fawzy-uwk/weather",
  },
];

const Project = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <motion.section
      ref={ref}
      className="min-h-[100dvh] lg:h-[100vh] flex items-center justify-center "
    >
      <motion.div
        className="flex items-center px-3 lg:px-0 justify-center gap-8 mt-28 flex-wrap overflow-hidden"
        style={{ y }}
      >
        <motion.img
          src={project.image}
          className="lg:w-[50%] lg:h-[30rem] rounded-md object-cover"
        />
        <motion.div className="flex flex-col items-center lg:items-start gap-6 justify-center w-[28rem]">
          <h2 className="text-4xl  font-bold text-sky-950">{project.title}</h2>
          <p className="text-lg text-center lg:text-start font-normal text-sky-950">
            {project.description}
          </p>
          <div className="flex gap-4 flex-row md:flex-row">
            <a
              className="portButton text-2xl px-6 py-3 text-center bg-sky-950 text-white rounded-md hover:bg-transparent hover:border-2 hover:text-sky-950 hover:border-sky-950"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
            <a
              className="portButton text-2xl px-6 py-3 bg-sky-950 text-center text-white rounded-md hover:bg-transparent hover:border-2 hover:text-sky-950 hover:border-sky-950"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Ropository
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"], //because we started at 100%,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  return (
    <motion.div className="relative" ref={ref}>
      <motion.div className="feature sticky w-full top-0  left-0 pt-8 lg:pt-4 z-10">
        <motion.h1 className="text-center font-bold text-5xl lg:text-7xl text-blue-950 z-10">
          Featured Work
        </motion.h1>
        <motion.div
          style={{ scaleX }}
          className="line h-2 mt-2 bg-sky-950 w-full rounded-full"
        ></motion.div>
      </motion.div>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </motion.div>
  );
}

export default Portfolio;
