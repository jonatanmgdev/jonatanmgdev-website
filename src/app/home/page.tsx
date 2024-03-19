import AboutMeComponent from "./components/AboutMe";
import ContactComponent from "./components/Contact";
import MyExperienceComponent from "./components/MyExperience";
import MyPortfolioComponent from "./components/MyPortfolio";
import MySkillsComponent from "./components/MySkills";
import WelcomeComponent from "./components/Welcome";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <WelcomeComponent />
      <AboutMeComponent />
      <MyExperienceComponent />
      <MyPortfolioComponent />
      <MySkillsComponent />
      <ContactComponent />
    </div>
  );
}
