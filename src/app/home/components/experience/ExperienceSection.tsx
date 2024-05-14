"use server";
import { experienceDataList } from "@/data/experienceDataList";
import { ExperienceCard } from ".";

async function ExperienceSectionComponent() {
  return (
    <section>
      <div className="flex align-middle justify-center mb-14">
        <div className="flex flex-col lg:max-w-5xl text-center align-middle justify-center ">
          <span>Trayectoria profesional</span>
          <h2>Mi experiencia</h2>
          <div className="py-4">
            <p className="mt-2">
              Este es un resumen de mi trayectoria profesional, desde mis
              inicios hasta la actualidad.
            </p>
            <p className="mb-6 mt-2">
              Busco oportunidades que me permitan seguir creciendo como
              profesional. Me encanta formar parte de equipos de trabajo en los
              cuales pueda aprender sobre nuevas tecnologías, conceptos o
              pronfundizar en mi base de conocmientos.
            </p>
            <span className="bg-neutral-deep p-2 rounded-lg max-w-fit">
              {`'Dichoso el que le gusta las dulzuras del trabajo sin ser su esclavo' -
              Benito Pérez Galdós`}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        <ExperienceCard experienceData={experienceDataList} />
      </div>
    </section>
  );
}

export default ExperienceSectionComponent;