import ContactHero from "../components/ContactHero";
import HeadOffice from "../components/HeadOffice";
import CorporateEnquiries from "../components/CorporateEnquiries";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import AnimatedSection from "../components/AnimatedSection";

export default function ContactPage() {
    return (
        <main className="bg-[#0a0a0a]">
            <ContactHero />
            <AnimatedSection>
                <HeadOffice />
            </AnimatedSection>
            <AnimatedSection>
                <CorporateEnquiries />
            </AnimatedSection>
            <Footer />
            {/* <SubFooter /> */}
        </main>
    );
}

