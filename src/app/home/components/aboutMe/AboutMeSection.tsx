"use server";
import Image from "next/image";
import jonatanCircleAvatar from "@assets/images/jonatan-montesdeoca-circle-avatar.png";
import IconHandShake from '../../../../components/svgIcons/IconHandShake';

/**
 * Component of the about me section.
 * @returns {JSX.Element} HTML content of the component.
 * @author Jonatan Montesdeoca González
 */

async function AboutMeSection() {
  return (
    <section
      id="aboutme-section"
      className="bg-neutral-dark rounded-lg py-2 px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 items-center gap-2">
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3 flex justify-center">
          <Image
            width={300}
            height={300}
            src={jonatanCircleAvatar.src}
            className="max-w-full h-auto object-cover pt-2"
            alt="imagen de Jonatan Montesdeoca"
            priority
          />
        </div>
        <div className="col-span-1 md:col-span-5 lg:col-span-9 xl:col-span-9">
          <div className="flex flex-col my-4">
            <div className="flex flex-wrap align-middle gap-1">
              <span>{IconHandShake(40)}</span>
              <h3>¡Hola! Soy jony</h3> 
            </div>
            <span>Según Typescript y mis amigos soy un buen tipo...</span>
          </div>
          <div className="flex flex-col mb-4">
            <p className="mb-4">
              Mi nombre completo es Jonatan Montesdeoca, tengo 30 años y soy de Las Palmas de Gran Canaria. Comencé en el
              desarrollo web creando foros con phpBB, tenía 13 años. Hoy formo
              parte de un equipo colaborando en el desarrollo de webs y apps
              móviles.
            </p>
            <p className="mb-4">
              Cuento con experiencia desarrollando aplicaciones móviles con
              Flutter y webs con React.JS, Next.JS, Wordpress o Prestashop.
              Tengo una evidente predilección por Javascript y sus frameworks.
              Además de todo esto cuento con una buena base de conocimientos para crear interfaces de
              usuario y diseños que funcionen bien en cualquier dispositivo.
            </p>
            <p>
              Actualmente dedico bastante tiempo en mi formación para
              convertirme en desarrollador fullstack y certificando mi nivel de
              inglés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
