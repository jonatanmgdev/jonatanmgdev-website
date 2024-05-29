"use server";
import SectionHeader from "@/components/SectionHeader";
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
          hours={2000}
          description="Desarrollo, implantación, documentación y mantenimiento de aplicaciones informáticas multiplataforma."
        />
        <FormationCard
          type="Formación Profesional"
          title="Grado medio en sistemas microninformáticos y redes"
          hours={2000}
          description="Instalación, configuración y mantenimiento de sistemas microinformáticos, aislados o en red, así como redes locales en pequeños entornos."
        />
        <FormationCard
          type="Curso online"
          title="Curso React Native con EXPO Udemy"
          hours={30}
          description="Las bases de React Native junto a EXPO y el acceso a elementos nativos del móvil, como puede ser la cámara o el sistema de ficheros."
        />
      </div>
    </section>
  );
}

export default FormationSection;
