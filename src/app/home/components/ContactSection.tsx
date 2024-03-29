"use client";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomTextarea from "@/components/CustomTextarea";
import JsonCodeSimulator from "../../../components/JsonCodeSimulator";
import CustomModal from "@/components/CustomModal";
import { useState } from "react";
import { IconCheck, IconCode } from "@assets/icons";

export default function ContactSectionComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contact-section">
      <div className="flex flex-col items-center justify-center mb-6">
        <p className=" flex text-xl font-semibold leading-7 text-[--tertiary-color]">
          ¡Hey! ¿Hablamos?
        </p>
        <h2 className="flex animate-slideinLeft">Envíame un mensaje</h2>
      </div>
      <div className="flex w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full md:justify-between gap-4">
            <CustomInput
              id="name"
              backgroundColor="--primary-color"
              placeholder="Nombre"
              type="text"
            />
            <CustomInput
              id="surnames"
              backgroundColor="--primary-color"
              placeholder="Apellidos"
              type="text"
            />
            <CustomInput
              id="email"
              backgroundColor="--primary-color"
              placeholder="E-mail"
              type="email"
            />
            <CustomInput
              id="phone"
              backgroundColor="--primary-color"
              placeholder="Teléfono"
              type="text"
            />
          </div>
          <div className="grid my-5">
            <CustomTextarea
              backgroundColor={"--primary-color"}
              placeholder={"Su mensaje..."}
            />
            <CustomButton
              href="#contact-section"
              text={"Enviar mensaje"}
              className="mt-5 btn-primary"
              onClickFunc={handleOpenModal}
            />
          </div>
        </div>
      </div>
      <CustomModal
        title="Envío con éxito"
        icon={<><span className="mr-2">{IconCheck(30)}</span></>}
        aceptText="Cerrar"
        description="Muchas gracias por contactar conmigo, trataré de responderle con la mayor brevedad posible."
        content={ <JsonCodeSimulator comment="Status: 200 - JSON Sended"  data={[
          { key: "name", value: "Jossnatan" },
          { key: "surnames", value: "Las Palmas de Gran Canaria" },
          { key: "email", value: "info@jonatanmg.dev" },
          { key: "phone", value: "2" },
          { key: "message", value: "Spanish" }
      ]} /> }
        isOpen={isModalOpen}
        avoidClose={true}
        onAccept={handleCloseModal}
        onClose={handleCloseModal}
      />
    </section>
  );
}
