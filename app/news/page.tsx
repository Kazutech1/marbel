import NewsHero from "../components/NewsHero";
import LatestUpdates from "../components/LatestUpdates";
import AnnouncementsSection from "../components/AnnouncementsSection";
import ProjectRelatedUpdates from "../components/ProjectRelatedUpdates";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

export default function NewsPage() {
    return (
        <main className="bg-white">
            <NewsHero />
            <LatestUpdates />
            <AnnouncementsSection />
            <ProjectRelatedUpdates />
            {/* News articles/feed would go here */}
            <Footer />
            <SubFooter />
        </main>
    );
}
