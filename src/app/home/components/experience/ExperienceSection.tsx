"use server";
import { experienceDataList } from "@/data/experienceDataList";
import { ExperienceCard } from ".";
import { Blockquote } from "@/components/blockquote/blockquote";
import { SectionHeader } from "@/components/layout";


async function ExperienceSection() {
  return (
    <section>
      <SectionHeader
        className="pb-4"
        title="Mi experiencia"
        subtitle="Trayectoria profesional"
        description="Busco oportunidades laborales las cuales me ofrezcan proyectos interesantes donde aprender sobre nuevas tecnologías, descubrir nuevos conceptos o pronfundizar en mi base de conocmientos."
      />
      <div className="flex flex-col w-full justify-center items-center mb-8">
        <Blockquote
          author="Benito Pérez Galdós"
          quote="Dichoso el que le gusta las dulzuras del trabajo sin ser su esclavo"
          className="text-center justify-center"
        />
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-light before:to-transparent">
        <ExperienceCard experienceData={experienceDataList} />
      </div>
    </section>
  );
}

export default ExperienceSection;
