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
import { SkillCard, SoftSkillCard } from ".";

async function SkillsSectionComponent() {
  return (
    <section>
      <div className="flex flex-col w-full text-center justify-center items-center md:justify-start md:items-start md:text-start">
        <span>Teconologías y habilidades</span>
        <h2>Mis Skills</h2>
        <p className="mt-2">
          Dedico tiempo al aprendizaje de nuevas tecnologías, con clara
          predilección por javascript y sus frameworks.
        </p>
      </div>
      <div className="my-8">
        <div className="grid my-auto">
          <p className="text-xl font-semibold leading-7 text-neutral-light mt-4 mb-4">
            Tech skills
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center my-auto gap-6">
          <SkillCard skillName="Typescript" svg={IconTypescript(35)} />
          <SkillCard skillName="Next.js" svg={IconNextJS(35)} />
          <SkillCard skillName="Node.js" svg={IconNodeJS(35)} />
          <SkillCard skillName="Tailwind CSS" svg={IconTailwindCSS(35)} />
          <SkillCard skillName="Material UI" svg={IconMaterialUI(35)} />
          <SkillCard skillName="Wordpress" svg={IconWordpress(35)} />
          <SkillCard skillName="Photoshop" svg={IconPhotoshop(35)} />
          <SkillCard skillName="HTML" svg={IconHTML(35)} />
          <SkillCard skillName="Flutter" svg={IconFlutter(35)} />
          <SkillCard skillName="PostgreSQL" svg={IconPostgreSQL(35)} />
          <SkillCard skillName="Figma" svg={IconFigma(35)} />
          <SkillCard skillName="Github" svg={IconGithub(35)} />
        </div>
        <div className="grid my-auto">
          <p className="text-xl font-semibold leading-7 text-neutral-light mt-8 mb-4">
            Soft Skills
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  justify-center items-center my-auto gap-6">
          <SoftSkillCard
            skillName={"Trabajo en equipo"}
            svg={IconTeamWork(35)}
          />
          <SoftSkillCard skillName={"Empatía"} svg={IconEmpathy(35)} />
          <SoftSkillCard
            skillName={"Intelecto emocional"}
            svg={IconEmotionalIntelligence(35)}
          />
          <SoftSkillCard
            skillName={"Comunicación"}
            svg={IconCommunication(35)}
          />
          <SoftSkillCard
            skillName={"Resolución de conflictos"}
            svg={IconConflitctResolution(35)}
          />
          <SoftSkillCard
            skillName={"Escucha activa"}
            svg={IconActiveListening(35)}
          />
          <SoftSkillCard
            skillName={"Manejo del tiempo"}
            svg={IconTimeManagment(35)}
          />
          <SoftSkillCard
            skillName={"Auto-aprendizaje"}
            svg={IconSelfLearning(35)}
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsSectionComponent;
