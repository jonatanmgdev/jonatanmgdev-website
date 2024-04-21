"use server";
import { SkillCard, SoftSkillCard } from "@/components";
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

export default async function SkillsSectionComponent() {
  return (
    <section id="skills-section">
      <div>
        <div className="flex">
          <div className="flex w-max ">
            <p className="animate-typing overflow-hidden whitespace-nowrap text-xl font-semibold leading-7 text-[--tertiary-color]">
              Teconologías y skills
            </p>
          </div>
        </div>
        <h2 className="animate-slideinLeft mt-2">Mis Habilidades</h2>
        <p>
          Dedico tiempo al aprendizaje de nuevas tecnologías, con clara predilección por javascript y sus frameworks.
        </p>
      </div>
      <div className="my-8">
        <div className="grid my-auto">
          <p className="text-xl font-semibold leading-7 text-[--text-color] mt-4 mb-4">
            Tech skills
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center my-auto gap-6">
          <SkillCard
            skillName="Typescript"
            svg={IconTypescript(35)}
            skillValue={7}
          />
          <SkillCard skillName="Next.js" svg={IconNextJS(35)} skillValue={8} />
          <SkillCard skillName="Node.js" svg={IconNodeJS(35)} skillValue={5} />
          <SkillCard
            skillName="Tailwind CSS"
            svg={IconTailwindCSS(35)}
            skillValue={7}
          />
          <SkillCard
            skillName="Material UI"
            svg={IconMaterialUI(35)}
            skillValue={6}
          />
          <SkillCard
            skillName="Wordpress"
            svg={IconWordpress(35)}
            skillValue={8}
          />
          <SkillCard
            skillName="Photoshop"
            svg={IconPhotoshop(35)}
            skillValue={7}
          />
          <SkillCard skillName="HTML" svg={IconHTML(35)} skillValue={7} />
          <SkillCard skillName="Flutter" svg={IconFlutter(35)} skillValue={6} />
          <SkillCard
            skillName="PostgreSQL"
            svg={IconPostgreSQL(35)}
            skillValue={5}
          />
          <SkillCard skillName="Figma" svg={IconFigma(35)} skillValue={5} />
          <SkillCard skillName="Github" svg={IconGithub(35)} skillValue={4} />
        </div>
        <div className="grid my-auto">
          <p className="text-xl font-semibold leading-7 text-[--text-color] mt-8 mb-4">
            Soft Skills
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center my-auto gap-6">
          <SoftSkillCard
            skillName={"Trabajo en equipo"}
            svg={IconTeamWork(40)}
          />
          <SoftSkillCard skillName={"Empatía"} svg={IconEmpathy(40)} />
          <SoftSkillCard
            skillName={"Intelecto emocional"}
            svg={IconEmotionalIntelligence(40)}
          />
          <SoftSkillCard
            skillName={"Comunicación"}
            svg={IconCommunication(40)}
          />
          <SoftSkillCard
            skillName={"Resolución de conflictos"}
            svg={IconConflitctResolution(40)}
          />
          <SoftSkillCard
            skillName={"Escucha activa"}
            svg={IconActiveListening(40)}
          />
          <SoftSkillCard
            skillName={"Manejo del tiempo"}
            svg={IconTimeManagment(40)}
          />
          <SoftSkillCard
            skillName={"Auto-aprendizaje"}
            svg={IconSelfLearning(40)}
          />
        </div>
      </div>
    </section>
  );
}