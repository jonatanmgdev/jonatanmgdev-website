"use server";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import welcomeSectionBackground from "@assets/images/welcome-section-bg.jpg";
import jonatanCircleAvatar from "@assets/images/jonatan-montesdeoca-circle-avatar.png";
import { IconGithub, IconYoutube, IconLinkedin } from "@assets/icons";

export default async function WelcomeComponent() {
  return (
    <section
      id="welcome-section"
      className="bg-[--secondary-color] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('${welcomeSectionBackground.src}')` }}
    >
      <div className="relative overflow-hidden lg:overflow-visible md:py-36 lg:pt-48 lg:pb-40">
        <div className="max-w-7xl mx-auto p-8">
          <div className="flex-row-reverse md:flex md:justify-between items-center gap-6">
            <div className="md:w-1/2 flex items-center justify-center animate-slideinRight">
              <Image
                src={jonatanCircleAvatar}
                alt={"Imagen de Jonatan Montesdeoca"}
                className="w-[200]"
                width={400}
              />
            </div>
            <div className="md:w-1/2 mb-4 md:mb-0 animate-slideinLeft">
              <div className="lg:max-w-lg">
                <div className="flex w-max">
                  <p className="animate-typing overflow-hidden whitespace-nowrap text-xl font-semibold text-[--tertiary-color]">
                    {"> ¡Hola! Me llamo"}
                  </p>
                  <p className="animate-pulse text-3xl font-semibold leading-7 text-[--tertiary-color]">
                    {"_"}
                  </p>
                </div>
                <h1 className="mt-2 text-3xl sm:text-5xl md:text-6xl">
                  Jonatan Montesdeoca
                </h1>
                <h4 className="mt-2 text-lg sm:text-xl md:text-2xl">
                  Desarrollador Full Stack
                </h4>
                <p className="mt-4 text-md sm:text-base md:text-xl">
                  Diseño y desarrollo soluciones digitales a medida, creando
                  proyectos con enfoque en la usabilidad y la experiencia del
                  usuario. Me considero una persona autodidacta, organizada y
                  creativa.
                </p>
                <div className="flex flex-col md:flex-row md:items-center items-start justify-start gap-4 mt-6">
                  <CustomButton
                    text={"Sobre mí"}
                    className="btn-primary"
                    aria-label="Sobre mí"
                    href="#aboutme-section"
                  />
                  <div className="flex flex-col md:flex-row  md:items-start justify-start gap-4">
                    <div className="flex justify-center items-center  gap-4">
                      <a href="https://www.youtube.com/@jonatanmgdev">
                        {IconYoutube(35)}
                        <span className="sr-only">Mi cuenta en Youtube</span>
                      </a>
                      <a href="https://github.com/jonatanmgdev">
                        {IconGithub(35)}
                        <span className="sr-only">Mi cuenta en GitHub</span>
                      </a>
                      <a href="https://www.linkedin.com/in/jonatanmgdev/">
                        {IconLinkedin(35)}
                        <span className="sr-only">Mi cuenta en Linkedin</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}