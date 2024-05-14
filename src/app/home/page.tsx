import { AboutMeSection } from "./components/aboutMe";
import { ContactSection } from "./components/contact";
import { ExperienceSection } from "./components/experience";
import { PortfolioSection } from "./components/portfolio";
import { SkillsSection } from "./components/skills";
import { WelcomeSection } from "./components/welcome";

export default function Home() {
  return (
    <>
      <main>
        <div id="welcome-section">
          <div className="container py-16 sm:py-32 md:py-60">
            <WelcomeSection />
          </div>
        </div>

        <div id="aboutme-section">
          <div className="container p-4">
            <AboutMeSection />
          </div>
        </div>

        <div id="experience-section">
          <div className="container p-4">
            <ExperienceSection />
          </div>
        </div>

        <div id="portfolio-section">
          <div className="container p-4">
            <PortfolioSection />
          </div>
        </div>

        <div id="skills-section">
          <div className="container p-4">
            <SkillsSection />
          </div>
        </div>
      </main>

      <aside>
        <div id="contact-section">
          <div className="container p-4">
            <ContactSection />
          </div>
        </div>
      </aside>
    </>
  );
}
