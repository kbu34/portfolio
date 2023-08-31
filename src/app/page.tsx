import Image from "next/image";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
