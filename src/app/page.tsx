import About from "../../components/About";
import Contact from "../../components/Contact";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
