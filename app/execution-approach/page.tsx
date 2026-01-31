import ExecutionHero from "../components/ExecutionHero";
import ProjectPlanningMobilisation from "../components/ProjectPlanningMobilisation";
import HealthSafetyManagement from "../components/HealthSafetyManagement";
import QualityAssuranceControl from "../components/QualityAssuranceControl";
import ConstructionSiteExecution from "../components/ConstructionSiteExecution";
import ScheduleCostControl from "../components/ScheduleCostControl";
import RegulatoryContractualCompliance from "../components/RegulatoryContractualCompliance";
import ReportingOversight from "../components/ReportingOversight";
import ProjectHandover from "../components/ProjectHandover";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import AnimatedSection from "../components/AnimatedSection";

export default function ExecutionApproachPage() {
    return (
        <main className="bg-[#0a0a0a]">
            <ExecutionHero />
            <AnimatedSection>
                <ProjectPlanningMobilisation />
            </AnimatedSection>
            <AnimatedSection>
                <HealthSafetyManagement />
            </AnimatedSection>
            <AnimatedSection>
                <QualityAssuranceControl />
            </AnimatedSection>
            <AnimatedSection>
                <ConstructionSiteExecution />
            </AnimatedSection>
            <AnimatedSection>
                <ScheduleCostControl />
            </AnimatedSection>
            <AnimatedSection>
                <RegulatoryContractualCompliance />
            </AnimatedSection>
            <AnimatedSection>
                <ReportingOversight />
            </AnimatedSection>
            <AnimatedSection>
                <ProjectHandover />
            </AnimatedSection>
            <Footer />
            {/* <SubFooter /> */}
        </main>
    );
}

