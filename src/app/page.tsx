import { AboutMeSection, ContactSection, ExperienceSection, FormationSection, PortfolioSection, SkillsSection, WelcomeSection } from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <main>
        <div id="welcome-section" rel="preload">
          <div className="container pt-32 pb-8 sm:pt-40 sm:pb-10 md:pt-52 md:pb-12 lg:pt-60 lg:pb-14">
            <WelcomeSection />
          </div>
        </div>

        <div id="aboutme-section">
          <div className="container pt-10 pb-3 sm:pb-6 sm:pt-12 md:pb-6 md:pt-24 lg:pb-8 lg:pt-32">
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
