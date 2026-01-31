import ServicesHero from "../components/ServicesHero";
import ServicesList from "../components/ServicesList";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import AnimatedSection from "../components/AnimatedSection";

export default function Services() {
    return (
        <main>
            <ServicesHero />
            <AnimatedSection>
                <ServicesList />
            </AnimatedSection>
            <Footer />
            {/* <SubFooter /> */}
        </main>
    );
}

