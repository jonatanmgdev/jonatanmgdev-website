"use server";
import { ContentSlider, CustomButton } from "@/components";
import { slidesContents, slidesTitles } from "@/data";

export default async function AboutMeSectionComponent() {
  return (
    <section>
      <div className="md:flex md:justify-between items-center gap-2">
        <div className="md:w-1/2 items-center justify-center animate-slideinLeft">
          <div className="flex flex-col mb-4">
            <h2 className="mt-2">Sobre mí</h2>
            <p className="font-semibold text-primary-dark">
              {"Según typescript soy un buen tipo..."}
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <p>
              Comencé en el desarrollo web en 2011 con WordPress y Prestashop,
              luego en 2021 obtuve un título como técnico superior en desarrollo
              de aplicaciones multiplataforma.
            </p>
            <p className="mt-2">
              Actualmente tengo mi foco en el desarrollo de soluciones digitales
              con librerías y frameworks como React.js, Next.js, Node.js...
            </p>
            <p className="mt-2">
              Busco oportunidades que me permitan seguir creciendo como
              profesional y aprender nuevas tecnologías.
            </p>
          </div>
          {/* TODO: AÑADIR AL BOTON ENLACE DE CV  */}
          <CustomButton
            text={"Descargar CV"}
            href="#aboutme-section"
          />
        </div>
        <div className="md:w-1/2 items-center justify-center animate-slideinRight">
          <div className="pt-8 md:pt-0">
            <ContentSlider
              slides={slidesContents}
              titles={slidesTitles}
              className="min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
