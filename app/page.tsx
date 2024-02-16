import WhatsappButton from "./components/button/whatsapp";
import ProjectsSection from "./components/projects";
import SkillsSection from "./components/skills";
import WelcomeSection from "./components/welcome";

export default function Home() {
  return (
    <div>
      <WelcomeSection />
      <ProjectsSection />
      <SkillsSection />
      <WhatsappButton />
    </div>
  );
}
