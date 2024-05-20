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
          <div className="container py-10 sm:py-14 md:py-16 lg:py-20">
            <AboutMeSection />
          </div>
        </div>

        <div id="experience-section">
          <div className="container py-10 sm:py-14 md:py-16 lg:py-20">
            <ExperienceSection />
          </div>
        </div>

        <div id="portfolio-section">
          <div className="container pb-10 sm:pb-14 md:pb-16 lg:pb-20">
            <PortfolioSection />
          </div>
        </div>

        <div id="skills-section">
          <div className="container pb-10 sm:pb-14 md:pb-16 lg:pb-20">
            <SkillsSection />
          </div>
        </div>
      </main>

      <aside>
        <div id="contact-section">
          <div className="container py-10 sm:py-14 md:py-16 lg:py-20">
            <ContactSection />
          </div>
        </div>
      </aside>
    </>
  );
}
