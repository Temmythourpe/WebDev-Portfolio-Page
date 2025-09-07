// import Header from "@/components/layout/header";
import Hero from "@/components/landing_page/hero";
import Footer from "@/components/layout/footer";
import About from "@/components/landing_page/about";
import Contact from "@/components/landing_page/contact";
import Projects from "@/components/landing_page/projects";
import Experience from "@/components/landing_page/experience";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
