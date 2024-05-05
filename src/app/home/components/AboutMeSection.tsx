"use server";
import { CustomButton } from "@/components";
import Image from "next/image";
import jonatanMontesdeocaImage from "@assets/images/Jonatan-montesdeoca-gonzalez-programador.png";

export default async function AboutMeSectionComponent() {
  return (
    <section>
      <div className="md:flex md:justify-between items-center gap-8 mb-4">
        <div className="md:w-2/6 flex justify-center animate-slideinRight mb-4 md:mb-0">
          <Image
            className="rounded-2xl shadow-md border-4 border-primary-dark hover:border-accent-dark"
            width={375}
            height={500}
            src={jonatanMontesdeocaImage.src}
            alt={`imagen de la canción Big Poppa`}
          />
        </div>
        <div className="md:w-4/6 items-center justify-center animate-slideinLeft">
          <div className="flex flex-col mb-4">
            <h2 className="mt-2">Sobre mí</h2>
            <p className="font-semibold text-primary-dark">
              {"Según typescript soy un buen tipo..."}
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="mb-4">
              Soy natural de Las Palmas de Gran Canaria, además de la
              programación me gusta viajar y saber sobre animales, historia,
              culturas y todo lo relacionado con el emprendimiento.
            </p>
            <p className="mb-4">
              Desde muy pequeño me fasciné por el mundo digital. A los 13 años,
              ya creaba foros con phpBB, exploraba etiquetas HTML y castigaba a
              mis visitantes con mi CSS.
            </p>
            <p className="mb-4">
              Un día me decidí a comenzar un ciclo de electrónica, descubrí
              pronto que no era para mí. Mi pasión estaba en la programación.
            </p>
            <p className="mb-4">
              En el año 2011 comencé a formarme en distintos ciclos y lo
              compaginaba trabajando en la radiodifusión. Durante 7 años he sido
              técnico de sonido y locutor de radio.
            </p>
            <p>
              En febrero de 2023, obtuve mi primera oportunidad laboral como
              desarrollador y desde entonces me centro en mi formación como
              fullstack.
            </p>
          </div>
          {/* TODO: AÑADIR AL BOTON ENLACE DE CV  */}
          <CustomButton text={"Descargar CV"} href="#aboutme-section" />
        </div>
      </div>
    </section>
  );
}
