import WhatsappButton from "./components/button/whatsapp";
import PhotoProfile from "./components/photoProfile";
import ProjectsSection from "./components/projects";
import SkillsSection from "./components/skills";
import WelcomeSection from "./components/welcome";

export default function Home() {
  return (
    <div>
      <PhotoProfile/>
      <WelcomeSection />
      <ProjectsSection />
      <SkillsSection />
      <WhatsappButton />
    </div>
  );
}
