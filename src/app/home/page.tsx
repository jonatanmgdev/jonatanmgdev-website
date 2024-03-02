import AboutMeComponent from "./components/AboutMe";
import ExperienceComponent from "./components/Experience";
import WelcomeComponent from "./components/Welcome";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <WelcomeComponent />
      <AboutMeComponent />
      <ExperienceComponent />
    </div>
  );
}
