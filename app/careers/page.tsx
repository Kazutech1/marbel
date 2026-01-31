import CareersHero from "../components/CareersHero";
import WorkingAtMarbleGrove from "../components/WorkingAtMarbleGrove";
import CareerOpportunities from "../components/CareerOpportunities";
import CurrentVacancies from "../components/CurrentVacancies";
import ExpressionsOfInterest from "../components/ExpressionsOfInterest";
import EqualOpportunity from "../components/EqualOpportunity";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

export default function CareersPage() {
    return (
        <main className="bg-white">
            <CareersHero />
            <WorkingAtMarbleGrove />
            <CareerOpportunities />
            <CurrentVacancies />
            <ExpressionsOfInterest />
            <EqualOpportunity />
            {/* Career opportunities/information would go here */}
            <Footer />
            <SubFooter />
        </main>
    );
}
