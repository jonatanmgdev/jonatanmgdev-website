"use server";

import SkillCard from "@/components/SkillCard";
import IconNodeJS from "@assets/icons/IconNodeJS";
import IconDocker from "@assets/icons/IconDocker";
import IconFigma from "@assets/icons/IconFigma";
import IconFlutter from "@assets/icons/IconFlutter";
import IconGithub from "@assets/icons/IconGithub";
import IconHTML from "@assets/icons/IconHTML";
import IconMaterialUI from "@assets/icons/IconMaterialUI";
import IconPhotoshop from "@assets/icons/IconPhotoshop";
import IconTailwindCSS from "@assets/icons/IconTailwindCSS";
import IconPostgreSQL from "@assets/icons/IconPostgreSQL";
import IconTypescript from "@assets/icons/IconTypescript";
import IconWordpress from "@assets/icons/IconWordpress";
import SoftSkillCard from "@/components/SoftSkillCard";
import IconTeamWork from "@assets/icons/IconTeamWork";
import IconEmpathy from "@assets/icons/IconEmpathy";
import IconEmotionalIntelligence from "@assets/icons/IconEmotionalIntelligence";
import IconCommunication from "@assets/icons/IconCommunication";
import IconConflitctResolution from "@assets/icons/IconConflitctResolution";
import IconActiveListening from '../../../../public/assets/icons/iconActiveListening';
import IconTimeManagment from "@assets/icons/IconTimeManagment";
import IconSelfLearning from "@assets/icons/IconSelfLearning";

export default async function MySkillsComponent() {
  return (
    <section id="skills-section" className="bg-[--primary-color]">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-20 lg:px-12 lg:py-20 xl:px-0 xl:pt-28">
        <div>
          <div className="flex">
            <div className="flex w-max ">
              <p className="animate-typing overflow-hidden whitespace-nowrap text-xl font-semibold leading-7 text-[--tertiary-color]">
                El conocimiento es poder
              </p>
            </div>
          </div>
          <h2 className="animate-slideinLeft mt-2">Mis habilidades</h2>
          <p className="mt-6">
            Dedico tiempo al aprendizaje de nuevas tecnologías, tengo además una
            tendencia por javascript y sus frameworks.
          </p>
        </div>
        <div className="my-8">
        <div className="grid my-auto">
            <p className="text-xl font-semibold leading-7 text-[--text-color] mt-4 mb-4">
              Tech skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center my-auto gap-6">
            <SkillCard skillName="Typescript" svg={IconTypescript(35)} skillValue={7} />
            <SkillCard skillName="Next.js" svg={IconDocker(35)} skillValue={8} />
            <SkillCard skillName="Node.js" svg={IconNodeJS(35)} skillValue={5} />
            <SkillCard skillName="Tailwind CSS" svg={IconTailwindCSS(35)} skillValue={7} />
            <SkillCard skillName="Material UI" svg={IconMaterialUI(35)} skillValue={6} />
            <SkillCard skillName="Wordpress" svg={IconWordpress(35)} skillValue={8} />
            <SkillCard skillName="Photoshop" svg={IconPhotoshop(35)} skillValue={7} />
            <SkillCard skillName="HTML" svg={IconHTML(35)} skillValue={7} />
            <SkillCard skillName="Flutter" svg={IconFlutter(35)} skillValue={6} />
            <SkillCard skillName="PostgreSQL" svg={IconPostgreSQL(35)} skillValue={5}/>
            <SkillCard skillName="Figma" svg={IconFigma(35)} skillValue={5} />
            <SkillCard skillName="Github" svg={IconGithub(35)} skillValue={4} />
          </div>
          <div className="grid my-auto">
            <p className="text-xl font-semibold leading-7 text-[--text-color] mt-8 mb-4">
              Soft Skills
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center my-auto gap-6">
            <SoftSkillCard skillName={"Trabajo en equipo"} svg={IconTeamWork(40)} />
            <SoftSkillCard skillName={"Empatía"} svg={IconEmpathy(40)} />
            <SoftSkillCard skillName={"Intelecto emocional"} svg={IconEmotionalIntelligence(40)} />
            <SoftSkillCard skillName={"Comunicación"} svg={IconCommunication(40)} />
            <SoftSkillCard skillName={"Resolución de conflictos"} svg={IconConflitctResolution(40)} />
            <SoftSkillCard skillName={"Escucha activa"} svg={IconActiveListening(40)} />
            <SoftSkillCard skillName={"Manejo del tiempo"} svg={IconTimeManagment(40)} />
            <SoftSkillCard skillName={"Auto-aprendizaje"} svg={IconSelfLearning(40)} />
          </div>
        </div>
      </div>
    </section>
  );
}
