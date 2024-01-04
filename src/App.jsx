import { useState } from "react";
import "./app.scss";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import Prallax from "./components/Prallax";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  const [dark, setDark] = useState(localStorage.getItem("dark") || "dark");

  const handleDarkModeToggle = () => {
    setDark((prevDark) => {
      const newDark = prevDark === "dark" ? "light" : "dark";
      localStorage.setItem("dark", newDark);
      return newDark;
    });
  };

  return (
    <div className={dark === "dark" ? "app dark" : "app"}>
      <Cursor />
      <HomePage
        setDark={setDark}
        dark={dark}
        handleDarkModeToggle={handleDarkModeToggle}
      />
      <section id="about" className="h-[50dvh] lg:h-[100vh]">
        <Prallax type="do" dark={dark} />
      </section>

      <section id="skills" className="min-h-[100dvh] lg:min-h-[100vh]">
        <Skills />
      </section>

      <section id="portfolio" className="h-[50dvh] lg:h-[100vh]">
        <Prallax type="did" dark={dark} />
      </section>

      <Portfolio/>

      <section id="contact" className="h-[100dvh] lg:h-[100vh]">
        <Contact dark={dark} />
      </section>

      <section>
        <Footer
          setDark={setDark}
          dark={dark}
          handleDarkModeToggle={handleDarkModeToggle}
        />
      </section>
    </div>
  );
};

export default App;
