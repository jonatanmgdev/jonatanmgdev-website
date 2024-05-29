"use server";

import { SectionHeader } from "@/components/layout";
import FormationCard from "./FormationCard";

async function FormationSection() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        title="Mi formación"
        subtitle="Cursos y certificaciones"
        description="Formarse es una necesidad en esta profesión y es por ello que trato de mantenerme actualizado realizando formaciones continuamente."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <FormationCard
          type="Formación Profesional"
          title="Grado superior en desarrollo de aplicaciones multiplataforma"
          description="Esta formación me permitió adquirir conocimientos para poder desarrollar, implantar, documentar y mantener aplicaciones informáticas multiplataforma, utilizando tecnologías y entornos de desarrollo específicos."
        />
        <FormationCard
          type="Formación Profesional"
          title="Grado medio en sistemas microninformáticos y redes"
          description="Durante este ciclo formativo aprendí a instalar, configurar y mantener sistemas microinformáticos, aislados o en red, así como redes locales en pequeños entornos y asegurando su funcionalidad."
        />
        <FormationCard
          type="Curso online"
          title="Curso React Native con EXPO (30 Horas)"
          description="En este curso online realizado en la plataforma Udemy aprendí las bases de React Native junto a EXPO y el acceso a elementos nativos del móvil, como puede ser la cámara o el sistema de ficheros de fotos."
        />
      </div>
    </section>
  );
}

export default FormationSection;
