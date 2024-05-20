import { Spotlight, SpotlightCard } from "@/components";
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
        <Spotlight>
          <SpotlightCard>
            <div id="welcome-section">
              <div className="container py-16 sm:py-32 md:py-60">
                <WelcomeSection />
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>

        <div id="aboutme-section">
          <div className="container py-16 sm:py-20 md:py-24 lg:py-28">
            <AboutMeSection />
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
