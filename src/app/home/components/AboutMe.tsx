"use client";

import ContentSlider from "@/components/ContentSlider";
import CustomButton from "@/components/CustomButton";
import JsonCodeSimulator from "./JsonCodeSimulator";

export default function AboutMeComponent() {
  const slides = [
    <JsonCodeSimulator/>,
    <JsonCodeSimulator/>,
    <JsonCodeSimulator/>,
  ];

  const captions = [
    'Mis hobbies',
    'Mi música',
    'Mis películas'
  ];
  
  return (
    <section id="aboutme-section" className="bg-[--primary-color]">
      <div className="relative overflow-hidden lg:overflow-visible md:py-36 lg:pt-48 lg:pb-40">
        <div className="max-w-7xl mx-auto p-8">
          <div className="md:flex md:justify-between items-center gap-8">
            <div className="md:w-1/2 items-center justify-center animate-slideinLeft">
              <h2 className="mt-2">Sobre mí</h2>
              <div className="flex">
                <div className="flex w-max ">
                  <p className="font-semibold text-[--tertiary-color]">
                    {"Un buen tipo, según typescript..."}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p>
                  Comencé en el desarrollo web en 2011 con WordPress y
                  Prestashop, luego en 2021 obtuve un título como técnico
                  superior en desarrollo de aplicaciones multiplataforma.
                </p>
                <p className="mt-2">
                  Me enfoco en soluciones digitales personalizadas y me gusta
                  involucrarme en las distintas areas durante el desarrollo de
                  los proyectos.
                </p>
                <p className="mt-2">
                  Me interesan las oportunidades que me permitan seguir
                  creciendo como profesional y disfrutar más aun de este
                  sector.
                </p>
              </div>
              {/* TODO: AÑADIR AL BOTON ENLACE DE CV  */}
              <CustomButton
                text={"Descargar CV"}
                className="btn-primary mt-6"
                href="#aboutme-section"
              />
            </div>
            <div className="md:w-1/2 hidden md:block animate-slideinRight">
              <ContentSlider  slides={slides} slidesCaptions={captions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
