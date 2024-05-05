"use server";
import { ExperienceCard } from "@/components";
import { experienceDataList } from "@/data/experienceDataList";

export default async function ExperienceSectionComponent() {
  return (
    <section>
      <div className="mb-14">
        <div className="text-center">
          <h2>Mi experiencia</h2>
          <div className="flex flex-col py-4">
            <p className="mt-2">
              Actualmente tengo mi foco en el desarrollo de soluciones digitales
              con librerías y frameworks como React.js, Next.js, Node.js, Nest.js...
            </p>
            <p className="mt-2">
              Busco oportunidades que me permitan seguir creciendo como
              profesional y aprender nuevas tecnologías.
            </p>
          </div>
          <p className="font-semibold text-primary-dark">
            {`'Dichoso el que le gusta las dulzuras del trabajo sin ser su esclavo' -
              Benito Pérez Galdós`}
          </p>
        </div>
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        <ExperienceCard experienceData={experienceDataList} />
      </div>
    </section>
  );
}