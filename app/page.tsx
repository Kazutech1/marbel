import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import HowWeDeliver from "./components/HowWeDeliver";
import Projects from "./components/Projects";
import MarbleGroup from "./components/MarbleGroup";
import Governance from "./components/Governance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection>
        <WhatWeDo />
      </AnimatedSection>
      <AnimatedSection>
        <HowWeDeliver />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <MarbleGroup />
      </AnimatedSection>
      <AnimatedSection>
        <Governance />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
      {/* <SubFooter /> */}
    </main>
  );
}

