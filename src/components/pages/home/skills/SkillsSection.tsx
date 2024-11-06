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
  IconPostgreSQL,
  IconSelfLearning,
  IconTailwindCSS,
  IconTeamWork,
  IconTimeManagment,
  IconTypescript,
  IconWordpress,
  IconExpress,
  IconNPM,
  IconPostman,
  IconPhotoshop,
  IconFirebase,
} from "@/components/svgIcons";
import { SkillCard } from ".";
import IconNestJS from "@/components/svgIcons/IconNestJS";
import IconReactJS from "@/components/svgIcons/IconReactJS";
import IconIniciative from "@/components/svgIcons/IconInicitative";
import IconResilience from "@/components/svgIcons/IconResilience";
import IconAutonomy from "@/components/svgIcons/IconAutonomy";
import IconOrganization from "@/components/svgIcons/IconOrganization";
import SectionHeader from "@/components/SectionHeader";

async function SkillsSection() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        title="Mis habilidades"
        subtitle="Conocimientos y cualidades"
        description="Soy un apasionado de JavaScript y sus frameworks. Cuando se trata de frontend, mis puntos fuertes son Next.js y Tailwind CSS. Para el backend, mis preferidos son Nest.js y Node.js. Aunque tengo más experiencia y habilidades en el frontend, siempre estoy dispuesto a aprender cualquier cosa que se ponga por delante. En cuanto a las soft skills, en un equipo, soy esa persona que siempre está lista para colaborar, aportar ideas frescas y echar una mano cuando se necesita."
      />
      <div className="grid my-auto py-4">
        <h3>Tech skills</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
        <div className="flex flex-col w-full border-2 border-neutral-light rounded-lg p-4">
          <span className="flex flex-row text-xl font-semibold mb-2">
            Frontend
          </span>
          <div className="flex flex-wrap gap-2">
            <SkillCard
              name="React.js"
              svg={IconReactJS(25)}
              background={"bg-[#1c4e62]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Next.js"
              svg={IconNextJS(25)}
              background={"bg-[#2e2e2e]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Typescript"
              svg={IconTypescript(25)}
              background={"bg-[#28568b]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Tailwind CSS"
              svg={IconTailwindCSS(25)}
              background={"bg-[#348c8c]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="HTML"
              svg={IconHTML(25)}
              background={"bg-[#b35929]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Material UI"
              svg={IconMaterialUI(25)}
              background={"bg-[#0666cc]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Wordpress"
              svg={IconWordpress(25)}
              background={"bg-[#3a3938]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Flutter"
              svg={IconFlutter(25)}
              background={"bg-[#004477]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="React Native"
              svg={IconReactJS(25)}
              background={"bg-[#1c4e62]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col w-full border-2 border-neutral-light rounded-lg p-4">
          <span className="flex flex-row text-xl font-semibold mb-2">
            Backend
          </span>
          <div className="flex flex-wrap gap-2">
            <SkillCard
              name="Node.js"
              svg={IconNodeJS(25)}
              background={"bg-[#2d5c2e]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Nest.js"
              svg={IconNestJS(25)}
              background={"bg-[#b02034]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Express.js"
              svg={IconExpress(25)}
              background={"bg-[#996a00]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="PostgreSQL"
              svg={IconPostgreSQL(25)}
              background={"bg-[#28547d]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Firebase"
              svg={IconFirebase(25)}
              background={"bg-[#cc6a08]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col w-full border-2 border-neutral-light rounded-lg p-4">
          <span className="flex flex-row text-xl font-semibold mb-2">
            Tools
          </span>
          <div className="flex flex-wrap gap-2">
            <SkillCard
              name="Figma"
              svg={IconFigma(25)}
              background={"bg-[#813dcb]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Github"
              svg={IconGithub(25)}
              background={"bg-[#404040]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="NPM"
              svg={IconNPM(25)}
              background={"bg-[#992828]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Postman"
              svg={IconPostman(25)}
              background={"bg-[#cc531e]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
            <SkillCard
              name="Photoshop"
              svg={IconPhotoshop(25)}
              background={"bg-[#1c7fcc]"}
              inactiveColor="text-white"
              activeColor="group-hover:text-white"
            />
          </div>
        </div>
      </div>
      <div className="grid my-auto py-4">
        <h3>Soft skills</h3>
      </div>
      <div className="flex flex-wrap w-full border-2 border-neutral-light rounded-lg p-4 gap-2">
        <SkillCard
          name="Trabajo en equipo"
          svg={IconTeamWork(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Empatía"
          svg={IconEmpathy(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Gestión emocional"
          svg={IconEmotionalIntelligence(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Comunicación"
          svg={IconCommunication(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Resolver conflictos"
          svg={IconConflitctResolution(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Escucha activa"
          svg={IconActiveListening(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Manejo del tiempo"
          svg={IconTimeManagment(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Auto-aprendizaje"
          svg={IconSelfLearning(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Iniciativa propia"
          svg={IconIniciative(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Autonomía"
          svg={IconAutonomy(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Resiliencia"
          svg={IconResilience(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
        <SkillCard
          name="Organización"
          svg={IconOrganization(25)}
          background={"bg-neutral-light"}
          inactiveColor="text-white"
          activeColor="group-hover:text-white"
        />
      </div>
    </section>
  );
}

export default SkillsSection;
