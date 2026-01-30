import ProjectsHero from "../components/ProjectsHero";
import ProjectPortfolioOverview from "../components/ProjectPortfolioOverview";
import ProjectCategories from "../components/ProjectCategories";
import ProjectExecution from "../components/ProjectExecution";
import ConfidentialityDisclosure from "../components/ConfidentialityDisclosure";
import CurrentCompletedProjects from "../components/CurrentCompletedProjects";
import ClientsPartners from "../components/ClientsPartners";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import AnimatedSection from "../components/AnimatedSection";

export default function ProjectsPage() {
    return (
        <main className="bg-[#0a0a0a]">
            <ProjectsHero />
            <AnimatedSection>
                <ProjectPortfolioOverview />
            </AnimatedSection>
            <AnimatedSection>
                <ProjectCategories />
            </AnimatedSection>
            <AnimatedSection>
                <ProjectExecution />
            </AnimatedSection>
            <AnimatedSection>
                <ConfidentialityDisclosure />
            </AnimatedSection>
            <AnimatedSection>
                <CurrentCompletedProjects />
            </AnimatedSection>
            <AnimatedSection>
                <ClientsPartners />
            </AnimatedSection>
            <Footer />
            <SubFooter />
        </main>
    );
}

