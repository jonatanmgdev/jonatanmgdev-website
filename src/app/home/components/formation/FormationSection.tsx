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
          type="Curso Udemy"
          title="Curso React Native con EXPO"
          hours={30}
          description="Las bases de React Native junto a EXPO y el acceso a elementos nativos del móvil, como puede ser la cámara o el sistema de ficheros."
        />
        <FormationCard
          type="Curso Devtalles.com"
          title="Next.js: El framework de React para producción"
          hours={37}
          description="Diferentes técnicas de renderizado SSR, SSG, ISR y CSR. Rutas dinámicas y estáticas, MaterialUI, Cookies, Next Auth, Next UI y despligues en varias plataformas. "
        />
        <FormationCard
          type="Curso Devtalles.com"
          title="Principios SOLID y Clean code"
          hours={7}
          description="Aprendí sobre que son los principios SOLID, cómo escribir un código limpio, la deuda técnica y los 6 codesmells principales y otros no tan comunes."
        />
        <FormationCard
          type="Curso Devtalles.com"
          title="Nest: Desarrollo backend escalable con Node"
          hours={25}
          description="Nest con Typescript, creación de Restful APIS robustas y seguras, Nest Guards, interceptors, pipes, controllers, decorators, services, filters, modules y middleware."
        />
      </div>
    </section>
  );
}

export default FormationSection;
