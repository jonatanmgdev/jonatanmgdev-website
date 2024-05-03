"use server";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import jonatanCircleAvatar from "@assets/images/jonatan-montesdeoca-circle-avatar.png";
import { IconGithub, IconYoutube, IconLinkedin } from "@assets/icons";

export default async function WelcomeSectionComponent() {
  return (
    <section>
      <div className="flex-row-reverse md:flex md:justify-between items-center gap-6">
        <div className="animate-slideinRight md:w-1/2 flex items-center justify-center">
          <Image
            src={jonatanCircleAvatar}
            alt={"Imagen de Jonatan Montesdeoca"}
            className="w-[200]"
            width={400}
          />
        </div>
        <div className="animate-slideinLeft md:w-1/2 mb-4 md:mb-0">
          <div className="flex w-max">
            <p className="animate-typing overflow-hidden whitespace-nowrap text-2xl font-semibold text-primary-dark">
              {"> ¡Hola! Me llamo"}
            </p>
            <p className="animate-pulse text-4xl font-semibold leading-7 text-primary-dark">
              {"_"}
            </p>
          </div>
          <h1 className="mt-2">Jonatan Montesdeoca</h1>
          <h5 className="mt-2">Desarrollador Full Stack</h5>
          <p className="mt-4">
            Diseño y desarrollo soluciones digitales a medida, mi enfoque se
            orienta hacia la implementación de proyectos con tecnologías relacionadas con javascript tanto en el frontend como en el backend. Soy bastante meticuloso con
            los detalles, planificación y la experiencia del usuario.
          </p>
          <div className="flex flex-col md:flex-row md:items-center items-start justify-start gap-4 mt-6">
            <CustomButton
              text={"Sobre mí"}
              aria-label="Sobre mí"
              href="#aboutme-section"
            />
            <div className="flex flex-col md:flex-row  md:items-start justify-start gap-4">
              <div className="flex justify-center items-center  gap-4">
                <a
                  className="text-neutral-light hover:text-accent-dark"
                  href="https://www.youtube.com/@jonatanmgdev"
                >
                  {IconYoutube(35)}
                  <span className="sr-only">Mi cuenta en Youtube</span>
                </a>
                <a
                  className="text-neutral-light hover:text-accent-dark"
                  href="https://github.com/jonatanmgdev"
                >
                  {IconGithub(35)}
                  <span className="sr-only">Mi cuenta en GitHub</span>
                </a>
                <a
                  className="text-neutral-light hover:text-accent-dark"
                  href="https://www.linkedin.com/in/jonatanmgdev/"
                >
                  {IconLinkedin(35)}
                  <span className="sr-only">Mi cuenta en Linkedin</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
