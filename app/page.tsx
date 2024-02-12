import WhatsappButton from "./components/button/whatsapp";
import NavbarSection from "./components/navbar";
import OngoingProjectsSection from "./components/ongoingProjects";
import ProjectsSection from "./components/projects";
import SkillsSection from "./components/skills";
import WelcomeSection from "./components/welcome";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <NavbarSection />
      <WelcomeSection />
      <ProjectsSection />
      <OngoingProjectsSection/>
      <SkillsSection />
      <WhatsappButton />
    </div>
  );
}
