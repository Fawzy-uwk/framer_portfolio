import Hero from "./Hero";
import NavBar from "./NavBar";

function HomePage({setDark,dark,handleDarkModeToggle}) {
  return (
    <section id="home" className="lg:h-[100dvh]">
      <NavBar setDark={setDark} dark={dark} handleDarkModeToggle={handleDarkModeToggle} />
      <Hero />
    </section>
  );
}

export default HomePage;
