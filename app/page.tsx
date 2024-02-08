import WhatsappButton from "./components/button/whatsapp";
import NavbarSection from "./components/navbar";
import ProjectsSection from "./components/projects";
import SkillsSection from "./components/skills";
import WelcomeSection from "./components/welcome";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <NavbarSection />
      <WelcomeSection />
      <ProjectsSection />
      <SkillsSection />
      <WhatsappButton />
    </div>
  );
}
