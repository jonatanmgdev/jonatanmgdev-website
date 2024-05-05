import welcomeSectionBackground from "@assets/images/welcome-section-bg.png";
import {
  WelcomeSection,
  PortfolioSection,
  SkillsSection,
  ContactSection,
  AboutMeSection,
  ExperienceSection,
} from "./components/index";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="bg-neutral-dark bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('${welcomeSectionBackground.src}')` }}
      >
        <div id="welcome-section" className="relative overflow-hidden lg:overflow-visible py-[4rem] sm:py-[14rem]">
          <div className="container p-4">
            <WelcomeSection />
          </div>
        </div>
      </div>
      <div id="aboutme-section" className="bg-neutral-deep relative overflow-visible py-12 md:py-16 lg:py-24">
        <div className="container p-4">
          <AboutMeSection />
        </div>
      </div>
        <div id="experience-section" className="bg-neutral-dark relative overflow-visible py-12 md:py-16 lg:py-24">
          <div className="container p-4">
            <ExperienceSection />
          </div>
        </div>
        <div id="portfolio-section" className="bg-neutral-dark relative overflow-visible py-12 md:py-16 lg:py-24">
          <div className="container p-4">
            <PortfolioSection />
          </div>
        </div>
      <div id="skills-section" className="bg-neutral-deep relative overflow-visible py-12 md:py-16 lg:py-24">
        <div className="container p-4">
          <SkillsSection />
        </div>
      </div>
      <div id="contact-section" className="bg-neutral-dark relative overflow-visible py-12 md:py-16 lg:py-24">
        <div className="container p-4">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
