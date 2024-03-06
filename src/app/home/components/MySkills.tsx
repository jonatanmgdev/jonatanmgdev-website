"use server";

import SkillCard from "@/components/SkillCard";
import IconNodeJS from "@/components/svgs/IconNodeJS";
import IconDocker from "@/components/svgs/IconDocker";
import IconFigma from "@/components/svgs/IconFigma";
import IconFlutter from "@/components/svgs/IconFlutter";
import IconGithub from "@/components/svgs/IconGithub";
import IconHTML from "@/components/svgs/IconHTML";
import IconMaterialUI from "@/components/svgs/IconMaterialUI";
import IconPhotoshop from "@/components/svgs/IconPhotoshop";
import IconTailwindCSS from "@/components/svgs/IconTailwindCSS";
import IconPostgreSQL from "@/components/svgs/IconPostgreSQL";
import IconTypescript from "@/components/svgs/IconTypescript";
import IconWordpress from "@/components/svgs/IconWordpress";

export default async function MySkillsComponent() {
  return (
    <section className="bg-[--primary-color]">
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
        </div>
      </div>
    </section>
  );
}
