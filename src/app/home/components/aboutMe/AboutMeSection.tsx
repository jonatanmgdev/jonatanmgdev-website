"use server";
import { CustomButton } from "@/components";
import Image from "next/image";
import jonatanCircleAvatar from "@assets/images/jonatan-montesdeoca-circle-avatar.png";

/**
 * Component of the about me section.
 * @returns {JSX.Element} HTML content of the component.
 * @author Jonatan Montesdeoca González
 */

async function AboutMeSectionComponent() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-8 items-center gap-4 mb-8">
        <div className="grid col-span-1 lg:col-span-2 justify-center mb-4 md:mb-0">
          <Image
            width={400}
            height={400}
            src={jonatanCircleAvatar.src}
            className="min-w-[250px]"
            alt={`imagen de Jonatan Montesdeoca`}
            priority
          />
        </div>
        <div className="col-span-1 lg:col-span-6 items-start justify-start">
          <div className="flex flex-col mb-4">
            <h2>Sobre mí</h2>
            <span>Según Typescript soy un buen tipo...</span>
          </div>
          <div className="flex flex-col  mb-4">
            <p className="mb-4">
              Me llamo Jonatan Montesdeoca González, soy natural de Las Palmas
              de Gran Canaria y desde muy pequeño me fasciné por el mundo
              digital. A los 13 años ya me interesaba por aprender sobre php, Javascript, HTML y CSS.
            </p>
            <p className="mb-4">
              Desde el año 2014 hasta el año 2020 me formé en distintos ciclos
              de informática, durante ese tiempo compaginaba mis estudios
              trabajando en el mundo de la radiodifusión como técnico de sonido y locutor.
            </p>
            <p>
              Finalmente en los inicios de 2023 recibí una oportunidad laboral en una consultora y desde entonces me centro en formarme como desarrollador Full
              Stack.
            </p>
          </div>
          {/* TODO: AÑADIR AL BOTON ENLACE DE CV  */}
          <CustomButton  text={"Descargar CV"} href="#aboutme-section" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 justify-start mb-4">
          <span>Cursos y certificaciones</span>
          <h3>Mi Formación</h3>
          <ul className="mt-4">
            <li>
              FP Grado superior en desarrollo de aplicaciones multiplataforma.
            </li>
            <li>FP Grado medio en sistemas microninformáticos y redes.</li>
            <li>Curso React Native con EXPO (30 Horas).</li>
          </ul>
        </div>
        <div className="grid col-span-1 md:place-items-center xs:justify-start lg:justify-center md:text-center">
          <div>
            <span>Ubicación</span>
            <p>Las Palmas de G.C.</p>
          </div>
          <div>
            <span>Idiomas</span>
            <p>Español e Inglés B1</p>
          </div>
        </div>
        <div className="grid col-span-1 md:place-items-center xs:justify-start lg:justify-center md:text-center">
          <div>
            <span>Edad</span>
            <p>30 años</p>
          </div>
          <div>
            <span>Experiencia</span>
            <p>Más de 2 años</p>
          </div>
        </div>
        <div className="grid col-span-1 md:place-items-center xs:justify-start lg:justify-center md:text-center">
          <div>
            <span>Freelance</span>
            <p>Disponible</p>
          </div>
          <div>
            <span>Email</span>
            <p>jonatanmg94@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSectionComponent;
