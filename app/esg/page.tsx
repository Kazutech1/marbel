import ESGHero from "../components/ESGHero";
import EnvironmentalResponsibility from "../components/EnvironmentalResponsibility";
import HealthSafetyWorkforce from "../components/HealthSafetyWorkforce";
import CommunitySocialConsiderations from "../components/CommunitySocialConsiderations";
import GovernanceEthicalConduct from "../components/GovernanceEthicalConduct";
import RegulatoryComplianceESG from "../components/RegulatoryComplianceESG";
import ContinuousImprovement from "../components/ContinuousImprovement";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

export default function ESGPage() {
    return (
        <main className="bg-white">
            <ESGHero />
            <EnvironmentalResponsibility />
            <HealthSafetyWorkforce />
            <CommunitySocialConsiderations />
            <GovernanceEthicalConduct />
            <RegulatoryComplianceESG />
            <ContinuousImprovement />
            {/* Future ESG sections would go here */}
            <Footer />
            <SubFooter />
        </main>
    );
}
