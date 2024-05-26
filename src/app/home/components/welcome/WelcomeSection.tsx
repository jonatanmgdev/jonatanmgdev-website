"use server";
import CustomButton from "@/components/custom/CustomButton";
import { IconGithub, IconYoutube, IconLinkedin } from "@assets/icons";

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
          <span className="text-xl">¡Bienvenido a mi portfolio!</span>
          <h1 className="xl:text-6xl text-primary-dark">
            Jonatan Montesdeoca
          </h1>
          <p className="text-2xl font-semibold text-white">
            Desarrollador Full Stack
          </p>
          <p className="my-4">
            Diseño y desarrollo soluciones digitales a medida, en este portfolio obtendrás un resumen de mi
            trayectoria profesional, formación y proyectos realizados.
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <CustomButton
            text={"Sobre mí"}
            aria-label="Sobre mí"
            href="#aboutme-section"
          />
          <div className="flex items-center">
            <ul className="flex list-none gap-2">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSectionComponent;