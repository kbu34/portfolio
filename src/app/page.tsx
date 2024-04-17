import Image from "next/image";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
