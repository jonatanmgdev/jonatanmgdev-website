"use server";
import {
  IconActiveListening,
  IconCommunication,
  IconConflitctResolution,
  IconEmotionalIntelligence,
  IconEmpathy,
  IconFigma,
  IconFlutter,
  IconGithub,
  IconHTML,
  IconMaterialUI,
  IconNextJS,
  IconNodeJS,
  IconSelfLearning,
  IconTailwindCSS,
  IconTeamWork,
  IconTimeManagment,
  IconTypescript,
  IconWordpress,
} from "@assets/icons";
import { SkillCard } from ".";
import IconNestJS from "@/assets/icons/IconNestJS";
import IconReactJS from "@/assets/icons/IconReactJS";
import IconIniciative from "@/assets/icons/IconInicitative";
import IconResilience from "@/assets/icons/IconResilience";
import IconAutonomy from "@/assets/icons/IconAutonomy";
import IconOrganization from "@/assets/icons/IconOrganization";
import { SectionHeader } from "@/components/layout";

async function SkillsSection() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        title="Mis habilidades"
        subtitle="Conocimientos y cualidades"
        description="Tengo una gran predilección por JavaScript y sus frameworks pero siempre tengo la motivación necesaria para aprender cualquier otra tecnología. En cuanto a las soft skills no definen por completo quién soy, pero son las que destacan cuando trabajo en un equipo."
      />
      <div className="grid my-auto py-4">
        <span className="text-xl font-semibold">Tech skills</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center my-auto gap-6 mb-4">
        <SkillCard name="React.js" svg={IconReactJS(25)} />
        <SkillCard name="Typescript" svg={IconTypescript(25)} />
        <SkillCard name="Next.js" svg={IconNextJS(25)} />
        <SkillCard name="Node.js" svg={IconNodeJS(25)} />
        <SkillCard name="Nest.js" svg={IconNestJS(25)} />
        <SkillCard name="Tailwind CSS" svg={IconTailwindCSS(25)} />
        <SkillCard name="Material UI" svg={IconMaterialUI(25)} />
        <SkillCard name="Wordpress" svg={IconWordpress(25)} />
        <SkillCard name="HTML" svg={IconHTML(25)} />
        <SkillCard name="Flutter" svg={IconFlutter(25)} />
        <SkillCard name="Figma" svg={IconFigma(25)} />
        <SkillCard name="Github" svg={IconGithub(25)} />
      </div>
      <div className="grid my-auto py-4">
        <span className="text-xl font-semibold">Soft skills</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center my-auto gap-6">
        <SkillCard name="Trabajo en equipo" svg={IconTeamWork(25)} />
        <SkillCard name="Empatía" svg={IconEmpathy(25)} />
        <SkillCard
          name="Gestión emocional"
          svg={IconEmotionalIntelligence(25)}
        />
        <SkillCard
          name="Comunicación efectiva"
          svg={IconCommunication(25)}
        />
        <SkillCard
          name="Resolver conflictos"
          svg={IconConflitctResolution(25)}
        />
        <SkillCard name="Escucha activa" svg={IconActiveListening(25)} />
        <SkillCard
          name="Manejo del tiempo"
          svg={IconTimeManagment(25)}
        />
        <SkillCard name="Auto-aprendizaje" svg={IconSelfLearning(25)} />
        <SkillCard name="Iniciativa propia" svg={IconIniciative(25)} />
        <SkillCard name="Autonomía" svg={IconAutonomy(25)} />
        <SkillCard name="Resiliencia" svg={IconResilience(25)} />
        <SkillCard name="Organización" svg={IconOrganization(25)} />
      </div>
    </section>
  );
}

export default SkillsSection;
