import Contact from "@/components/Contact/contact";
import First from "@/components/First/first";
import Footer from "@/components/Footer/footer";
import Formations from "@/components/Formations/formations";
import Header from "@/components/Header/header";
import Projects from "@/components/Projects/projects";
import Skills from "@/components/Skills/skills";

export default function Gaspard() {
  return (
    <div>
      <Header />
      <First />
      <Skills />
      <Projects />
      <Formations />
      <Contact />
      <Footer />
    </div>
  );
}
