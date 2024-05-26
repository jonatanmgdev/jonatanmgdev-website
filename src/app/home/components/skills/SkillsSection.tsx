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
import { SectionHeader } from "@/components/layout/SectionHeader";
import IconNestJS from "@/assets/icons/IconNestJS";
import IconReactJS from "@/assets/icons/IconReactJS";
import IconIniciative from "@/assets/icons/IconInicitative";
import IconResilience from "@/assets/icons/IconResilience";
import IconAutonomy from "@/assets/icons/IconAutonomy";
import IconOrganization from "@/assets/icons/IconOrganization";

async function SkillsSection() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        title="Mis habilidades"
        subtitle="Conocimientos y cualidades"
        description="Cada vez dedico más tiempo y esfuerzo en profundizar mis conocimientos. Además, considero que las soft skills son igualmente importantes, ya que me permiten integrarme mejor en los equipos de trabajo."
      />
      <div className="grid my-auto py-4">
        <span className="text-xl font-semibold">Tech skills</span>
        <p>
          Tengo una gran predilección por JavaScript y sus frameworks pero
          siempre tengo la capacidad y motivación necesarias para aprender
          rápido cualquier otra tecnología.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center my-auto gap-6 mb-4">
        <SkillCard name="React.js" svg={IconReactJS(35)} />
        <SkillCard name="Typescript" svg={IconTypescript(35)} />
        <SkillCard name="Next.js" svg={IconNextJS(35)} />
        <SkillCard name="Node.js" svg={IconNodeJS(35)} />
        <SkillCard name="Nest.js" svg={IconNestJS(35)} />
        <SkillCard name="Tailwind CSS" svg={IconTailwindCSS(35)} />
        <SkillCard name="Material UI" svg={IconMaterialUI(35)} />
        <SkillCard name="Wordpress" svg={IconWordpress(35)} />
        <SkillCard name="HTML" svg={IconHTML(35)} />
        <SkillCard name="Flutter" svg={IconFlutter(35)} />
        <SkillCard name="Figma" svg={IconFigma(35)} />
        <SkillCard name="Github" svg={IconGithub(35)} />
      </div>
      <div className="grid my-auto py-4">
        <span className="text-xl font-semibold">Soft skills</span>
        <p>
          Estas son algunas de mis cualidades más destacables pero no definen
          por completo quién soy. Son las que destacan cuando trabajo en un
          equipo de desarrollo.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center my-auto gap-6">
        <SkillCard name="Trabajo en equipo" svg={IconTeamWork(35)} />
        <SkillCard name="Empatía" svg={IconEmpathy(35)} />
        <SkillCard
          name="Gestión emocional"
          svg={IconEmotionalIntelligence(35)}
        />
        <SkillCard
          name="Comunicación efectiva"
          svg={IconCommunication(35)}
        />
        <SkillCard
          name="Resolución de conflictos"
          svg={IconConflitctResolution(35)}
        />
        <SkillCard name="Escucha activa" svg={IconActiveListening(35)} />
        <SkillCard
          name="Manejo del tiempo"
          svg={IconTimeManagment(35)}
        />
        <SkillCard name="Auto-aprendizaje" svg={IconSelfLearning(35)} />
        <SkillCard name="Iniciativa propia" svg={IconIniciative(35)} />
        <SkillCard name="Autonomía" svg={IconAutonomy(35)} />
        <SkillCard name="Resiliencia" svg={IconResilience(35)} />
        <SkillCard name="Organización" svg={IconOrganization(35)} />
      </div>
    </section>
  );
}

export default SkillsSection;
