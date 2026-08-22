import { Header } from "@/components/site/Header";
import { StationRail } from "@/components/site/StationRail";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Arrival } from "@/scenes/Arrival";
import { Thinking } from "@/scenes/Thinking";
import { Transformation } from "@/scenes/Transformation";
import { ExperienceRoute } from "@/scenes/ExperienceRoute";
import { TechUniverse } from "@/scenes/TechUniverse";
import { Lab } from "@/scenes/Lab";
import { WhyMe } from "@/scenes/WhyMe";
import { ProfessionalProfile } from "@/scenes/ProfessionalProfile";
import { Contact } from "@/scenes/Contact";

export function App() {
  return (
    <LanguageProvider>
      <Header />
      <StationRail />
      <main>
        <Arrival />
        <Thinking />
        <Transformation />
        <ExperienceRoute />
        <TechUniverse />
        <Lab />
        <WhyMe />
        <ProfessionalProfile />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
