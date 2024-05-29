import { SpotlightWrapper } from "@/components";
import { AboutMeSection } from "./components/aboutMe";
import { ContactSection } from "./components/contact";
import { ExperienceSection } from "./components/experience";
import { PortfolioSection } from "./components/portfolio";
import { SkillsSection } from "./components/skills";
import { WelcomeSection } from "./components/welcome";
import FormationSection from "./components/formation/FormationSection";

export default function Home() {
  return (
    <>
      <main>
        <SpotlightWrapper>
          <div id="welcome-section">
            <div className="container py-24 sm:py-32 md:py-48 lg:py-60">
              <WelcomeSection />
            </div>
          </div>
        </SpotlightWrapper>

        <div id="aboutme-section">
          <div className="container py-16 sm:py-20 md:py-24 lg:py-28">
            <AboutMeSection />
          </div>
        </div>

        <div id="formation-section">
          <div className="container pt-16 sm:pt-20 md:pt-24 lg:pt-24">
            <FormationSection />
          </div>
        </div>

        <div id="experience-section">
          <div className="container py-16 sm:py-20 md:py-24 lg:py-24">
            <ExperienceSection />
          </div>
        </div>

        <div id="portfolio-section">
          <div className="container pb-16 sm:pb-20 md:pb-24 lg:pb-24">
            <PortfolioSection />
          </div>
        </div>

        <div id="skills-section">
          <div className="container pb-16 sm:pb-20 md:pb-24 lg:pb-24">
            <SkillsSection />
          </div>
        </div>
      </main>

      <aside>
        <div id="contact-section">
          <div className="container pb-16 sm:pb-20 md:pb-24 lg:pb-24">
            <ContactSection />
          </div>
        </div>
      </aside>
    </>
  );
}
