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
        <div id="welcome-section">
          <div className="container py-32 sm:py-40 md:py-52 lg:py-60">
            <WelcomeSection />
          </div>
        </div>

        <div className="m-4 md:m-0">
          <div className="container">
            <AboutMeSection />
          </div>
        </div>

        <div id="formation-section">
          <div className="container pt-16 pb-8 sm:pb-10 sm:pt-20 md:pb-12 md:pt-24 lg:pb-16 lg:pt-32">
            <FormationSection />
          </div>
        </div>

        <div id="experience-section">
          <div className="container py-8 sm:py-10 md:py-12 lg:py-16">
            <ExperienceSection />
          </div>
        </div>

        <div id="portfolio-section">
          <div className="container py-8 sm:py-10 md:py-12 lg:py-16">
            <PortfolioSection />
          </div>
        </div>

        <div id="skills-section">
          <div className="container py-8 sm:py-10 md:py-12 lg:py-16">
            <SkillsSection />
          </div>
        </div>
      </main>

      <aside>
        <div id="contact-section">
          <div className="container pb-16 pt-8 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
            <ContactSection />
          </div>
        </div>
      </aside>
    </>
  );
}
