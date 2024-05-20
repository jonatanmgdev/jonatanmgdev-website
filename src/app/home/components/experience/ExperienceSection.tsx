"use server";
import { experienceDataList } from "@/data/experienceDataList";
import { ExperienceCard } from ".";
import { SectionHeader } from "@/components/layout/sectionHeader";
import { Blockquote } from "@/components/blockquote/blockquote";

async function ExperienceSectionComponent() {
  return (
    <section>
      <SectionHeader
        title={"Mi experiencia"}
        subtitle={"Trayectoria profesional"}
        description="Este es un resumen de mi trayectoria profesional, busco oportunidades de trabajo con proyectos interesantes donde aprender sobre nuevas tecnologías, conceptos o pronfundizar en mi base de conocmientos."
      />
      <div className="flex w-full justify-center mb-8">
        <Blockquote
          author={`Benito Pérez Galdós`}
          quote="Dichoso el que le gusta las dulzuras del trabajo sin ser su esclavo"
          className="text-center lg:max-w-5xl"
        />
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        <ExperienceCard experienceData={experienceDataList} />
      </div>
    </section>
  );
}

export default ExperienceSectionComponent;
