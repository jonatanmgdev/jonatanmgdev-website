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
      <div className="lg:flex md:justify-between items-center gap-4 mb-8">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Image
            width={400}
            height={400}
            src={jonatanCircleAvatar.src}
            className="min-w-[350px]"
            alt={`imagen de Jonatan Montesdeoca`}
            priority
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col mb-4">
            <h2>Sobre mí</h2>
            <span>Según Typescript soy un buen tipo...</span>
          </div>
          <div className="flex flex-col  mb-4">
            <p className="mb-4">
              Me llamo Jonatan Montesdeoca González, soy natural de Las Palmas
              de Gran Canaria y desde muy pequeño me fasciné por el mundo
              digital. A los 13 años, ya creaba foros con phpBB, desde entonces
              empecé a aprender sobre Php, Javascript, HTML y CSS.
            </p>
            <p className="mb-4">
              Un día me decidí a comenzar un ciclo de electrónica, descubrí
              pronto que no era para mí. Mi pasión estaba en la programación. En
              el año 2011 comencé a formarme en distintos ciclos y lo
              compaginaba trabajando en la radiodifusión. Durante 7 años he sido
              técnico de sonido y locutor de radio.
            </p>
            <p>
              En febrero de 2023, obtuve mi primera oportunidad laboral como
              desarrollador y desde entonces me centro en mi formación como Full
              Stack.
            </p>
          </div>
          {/* TODO: AÑADIR AL BOTON ENLACE DE CV  */}
          <CustomButton text={"Descargar CV"} href="#aboutme-section" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 w-full">
        <div className="col-span-2 xs:justify-start mb-4">
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
            <p>Las Palmas de Gran Canaria</p>
          </div>
          <div>
            <span>Idiomas</span>
            <p>Español nativo e Inglés B1</p>
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
            <span>Teléfono</span>
            <a href="#contact-section" className="block">solicitar</a>
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
