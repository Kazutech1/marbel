import AboutHero from "../components/AboutHero";
import OurMandate from "../components/OurMandate";
import PositionWithinGroup from "../components/PositionWithinGroup";
import OperatingFocus from "../components/OperatingFocus";
import ExecutionDiscipline from "../components/ExecutionDiscipline";
import GovernanceResponsibility from "../components/GovernanceResponsibility";
import LookingAhead from "../components/LookingAhead";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
    return (
        <main>
            <AboutHero />
            <AnimatedSection>
                <OurMandate />
            </AnimatedSection>
            <AnimatedSection>
                <PositionWithinGroup />
            </AnimatedSection>
            <AnimatedSection>
                <OperatingFocus />
            </AnimatedSection>
            <AnimatedSection>
                <ExecutionDiscipline />
            </AnimatedSection>
            <AnimatedSection>
                <GovernanceResponsibility />
            </AnimatedSection>
            <AnimatedSection>
                <LookingAhead />
            </AnimatedSection>
            <Footer />
        </main>
    );
}

