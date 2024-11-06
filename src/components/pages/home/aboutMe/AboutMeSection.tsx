"use server";
import Image from "next/image";
import jonatanCircleAvatar from "@assets/images/jonatan-montesdeoca-circle-avatar.webp";
import IconHandShake from "../../../../components/svgIcons/IconHandShake";

/**
 * Component of the about me section.
 * @returns {JSX.Element} HTML content of the component.
 * @author Jonatan Montesdeoca González
 */

async function AboutMeSection() {
  return (
    <section id="aboutme-section-bg" className="rounded-lg p-6">
      <div className="lg:flex gap-2">
        <div className="lg:flex-none flex items-center justify-center">
          <Image
            width={300}
            height={300}
            src={jonatanCircleAvatar.src}
            className="max-w-full h-auto object-cover pt-2"
            alt="imagen de Jonatan Montesdeoca"
            priority
          />
        </div>
        <div className="lg:flex-grow">
          <div className="flex flex-col my-4 gap-1">
            <div className="flex flex-wrap align-middle gap-1">
              <span>{IconHandShake(40)}</span>
              <h3>¡Hola!</h3>
            </div>
            <span>Conoce mi historia y lo que me impulsa cada día.</span>
          </div>
          <div className="flex flex-col mb-4">
            <p className="mb-4">
              Me llamo Jonatan Montesdeoca, tengo 30 años y vivo en Las Palmas
              de Gran Canaria. Mi viaje en el mundo del desarrollo web comenzó
              cuando tenía 13 años, trasteando con foros en phpBB. Hoy en día,
              formo parte de un equipo, colaborando en el desarrollo de sitios
              web y apps móviles.
            </p>
            <p className="mb-4">
              Tengo experiencia trabajando con React.JS, Next.JS, Wordpress, y
              Prestashop. También me he metido de lleno en el desarrollo de
              aplicaciones móviles con Flutter y React Native. Me encanta crear
              interfaces intuitivas y atractivas que ofrezcan una gran
              experiencia de usuario.
            </p>
            <p>
              Actualmente dedico bastante tiempo a mi formación en frontend, IA,
              Big Data y certificando mi inglés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
