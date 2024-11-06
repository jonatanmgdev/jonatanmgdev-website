"use server";
import CustomButton from "@/components/custom/CustomButton";
import {
  IconGithub,
  IconYoutube,
  IconLinkedin,
  IconTwitter,
} from "@/components/svgIcons";

/**
 * Component of the welcome section.
 * @returns {JSX.Element} HTML content of the component.
 * @author Jonatan Montesdeoca González
 */

async function WelcomeSectionComponent() {
  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex-1 text-center lg:max-w-3xl">
          <h1 className="xl:text-6xl">Jonatan Montesdeoca</h1>
          <h2 className="md:font-medium text-primary-dark mt-1">
            Frontend Developer
          </h2>
          <div className="mt-4">
            <span className="text-xl text-textcolor-secondary">
              ¡Bienvenido a mi portfolio!
            </span>
            <p>
              Diseño y desarrollo soluciones digitales a medida, en este
              portfolio obtendrás un resumen de mi trayectoria profesional,
              formación y proyectos realizados.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-center gap-2 py-4">
          <CustomButton
            className="px-4 py-2 w-auto"
            text="Descargar CV"
            href="/assets/pdf/Jonatanmgdev-resume.pdf"
          />
          <CustomButton
            className="px-4 py-2 w-auto bg-neutral-light/50 text-white hover:text-neutral-deep"
            text="Sobre mí"
            href="#aboutme-section"
          />
        </div>
        <div className="flex flex-col items-center pt-4">
          <span className="text-sm text-textcolor-secondary">
            ¡Sígueme en mis redes sociales!
          </span>
          <ul className="flex list-none sm:max-w-lg mt-4 md:mt-3 lg:ml-0 flex-wrap items-center justify-center gap-2 md:gap-6 sm:flex-nowrap">
            <li>
              <a
                className="flex justify-center"
                aria-label="Acceder a mi cuenta en Youtube"
                href="https://www.youtube.com/@jonatanmgdev"
              >
                {IconYoutube(35)}
                <span className="sr-only">Mi cuenta en Youtube</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-center"
                aria-label="Acceder a mi cuenta en Github"
                href="https://github.com/jonatanmgdev"
              >
                {IconGithub(35)}
                <span className="sr-only">Mi cuenta en GitHub</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-center"
                aria-label="Acceder a mi cuenta en Linkedin"
                href="https://www.linkedin.com/in/jonatanmgdev/"
              >
                {IconLinkedin(35)}
                <span className="sr-only">Mi cuenta en Linkedin</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-center"
                aria-label="Acceder a mi cuenta en Twitter"
                href="https://x.com/jonatanmgdev"
              >
                {IconTwitter(35)}
                <span className="sr-only">Mi cuenta en Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSectionComponent;
