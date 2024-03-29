import welcomeSectionBackground from "@assets/images/welcome-section-bg.jpg";
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
    <div className="flex min-h-screen flex-col w-full">
      <div
        className="bg-[--secondary-color] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('${welcomeSectionBackground.src}')` }}
      >
        <div className="relative overflow-hidden lg:overflow-visible py-8 md:py-36 lg:pt-48 lg:pb-40">
          <div className="max-w-7xl mx-auto p-4">
            <WelcomeSection />
          </div>
        </div>
      </div>
      <div className="bg-[--primary-color] relative overflow-visible py-12 md:py-24 lg:py-36">
        <div className="max-w-7xl mx-auto p-4">
          <AboutMeSection />
        </div>
      </div>
      <div className="bg-[--primary-color] relative overflow-visible pb-12 md:pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto p-4">
          <ExperienceSection />
        </div>
      </div>
      <div className="bg-[--primary-color] relative overflow-visible pb-12 md:pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto p-4">
          <PortfolioSection />
        </div>
      </div>
      <div className="bg-[--primary-color] relative overflow-visible pb-12 md:pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto p-4">
          <SkillsSection />
        </div>
      </div>
      <div className="bg-[--secondary-color] relative overflow-visible  py-8 md:py-36 lg:pt-48 lg:pb-40">
        <div className="max-w-7xl mx-auto p-4">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
