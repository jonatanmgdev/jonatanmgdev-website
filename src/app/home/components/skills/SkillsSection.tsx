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
  IconPhotoshop,
  IconPostgreSQL,
  IconSelfLearning,
  IconTailwindCSS,
  IconTeamWork,
  IconTimeManagment,
  IconTypescript,
  IconWordpress,
} from "@assets/icons";
import { SkillCard } from ".";
import { SectionHeader } from "@/components/layout/sectionHeader";
import IconNestJS from "@/assets/icons/IconNestJS";
import IconReactJS from "@/assets/icons/IconReactJS";
import IconIniciative from "@/assets/icons/IconInicitative";
import IconResilience from "@/assets/icons/IconResilience";
import IconAutonomy from "@/assets/icons/IconAutonomy";
import IconOrganization from "@/assets/icons/IconOrganization";

async function SkillsSectionComponent() {
  return (
    <section>
      <SectionHeader
        title="Mis habilidades"
        subtitle="Conocimientos y cualidades"
        description="Cada vez dedico más tiempo y esfuerzo en profundizar mis conocimientos. Además, considero que las soft skills son igualmente importantes, ya que me permiten integrarme mejor en los equipos de trabajo."
      />
      <div>
        <div className="grid my-auto py-4">
          <span className="text-xl font-semibold leading-7">Tech skills</span>
          <p>
            Tengo una gran predilección por
            JavaScript y sus frameworks pero siempre tengo la capacidad y
            motivación necesarias para aprender rápido cualquier otra
            tecnología.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center my-auto gap-6">
          <SkillCard skillName="React.js" svg={IconReactJS(35)} />
          <SkillCard skillName="Typescript" svg={IconTypescript(35)} />
          <SkillCard skillName="Next.js" svg={IconNextJS(35)} />
          <SkillCard skillName="Node.js" svg={IconNodeJS(35)} />
          <SkillCard skillName="Nest.js" svg={IconNestJS(35)} />
          <SkillCard skillName="Tailwind CSS" svg={IconTailwindCSS(35)} />
          <SkillCard skillName="Material UI" svg={IconMaterialUI(35)} />
          <SkillCard skillName="Wordpress" svg={IconWordpress(35)} />
          <SkillCard skillName="HTML" svg={IconHTML(35)} />
          <SkillCard skillName="Flutter" svg={IconFlutter(35)} />
          <SkillCard skillName="Figma" svg={IconFigma(35)} />
          <SkillCard skillName="Github" svg={IconGithub(35)} />
        </div>
        <div className="grid my-auto py-4">
          <span className="text-xl font-semibold leading-7">Soft skills</span>
          <p>
            Estas son algunas de mis cualidades más destacables pero no definen
            por completo quién soy. Son las que destacan cuando trabajo en
            un equipo de desarrollo.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center my-auto gap-6">
          <SkillCard
            skillName={"Trabajo en equipo"}
            svg={IconTeamWork(35)}
          />
          <SkillCard skillName={"Empatía"} svg={IconEmpathy(35)} />
          <SkillCard
            skillName={"Gestión emocional"}
            svg={IconEmotionalIntelligence(35)}
          />
          <SkillCard
            skillName={"Comunicación efectiva"}
            svg={IconCommunication(35)}
          />
          <SkillCard
            skillName={"Resolución de conflictos"}
            svg={IconConflitctResolution(35)}
          />
          <SkillCard
            skillName={"Escucha activa"}
            svg={IconActiveListening(35)}
          />
          <SkillCard
            skillName={"Manejo del tiempo"}
            svg={IconTimeManagment(35)}
          />
          <SkillCard
            skillName={"Auto-aprendizaje"}
            svg={IconSelfLearning(35)}
          />
          <SkillCard
            skillName={"Iniciativa propia"}
            svg={IconIniciative(35)}
          />
          <SkillCard
            skillName={"Autonomía"}
            svg={IconAutonomy(35)}
          />
          <SkillCard
            skillName={"Resiliencia"}
            svg={IconResilience(35)}
          />
          <SkillCard
            skillName={"Organización"}
            svg={IconOrganization(35)}
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsSectionComponent;
