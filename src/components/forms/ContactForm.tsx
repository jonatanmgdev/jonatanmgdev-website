"use client";

import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import {
  CustomButton,
  CustomModal,
  CustomTextarea,
  JsonCodeSimulator,
} from "..";
import { IconCheck } from "@assets/icons";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type ContactFormInput = {
  name: string;
  surnames: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactFormInput>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>();
  const [contactData, setContactData] = useState<ContactFormInput>({
    name: "",
    surnames: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  async function onSubmit(formData: ContactFormInput) {
    if(captcha){
      console.log('Recaptcha verificado');
    }
    //  setContactData(formData);
    //  await fetch("/api/send", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: formData.name,
    //       surnames: formData.surnames,
    //       phone: formData.phone,
    //       email: formData.email,
    //       message: formData.message,
    //     }),
    //   }).then(() => {
    //     handleOpenModal();
    //   });
    // reset();
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full md:justify-between gap-4">
          <CustomInput
            alt="nombre"
            id="name"
            backgroundColor="--primary-color"
            placeholder="Nombre"
            type="text"
            required={true}
            register={register("name")}
          />
          <CustomInput
            alt="apellidos"
            id="surnames"
            backgroundColor="--primary-color"
            placeholder="Apellidos"
            type="text"
            required={true}
            register={register("surnames")}
          />
          <CustomInput
            alt="email"
            id="email"
            backgroundColor="--primary-color"
            placeholder="E-mail"
            type="email"
            required={true}
            register={register("email")}
          />
          <CustomInput
            alt="teléfono"
            id="phone"
            backgroundColor="--primary-color"
            placeholder="Teléfono"
            type="text"
            required={true}
            register={register("phone")}
          />
        </div>
        <div className="grid my-5">
          <CustomTextarea
            title="Ingrese aquí su mensaje..."
            backgroundColor={"--primary-color"}
            className="mb-4"
            placeholder={"Su mensaje..."}
            rows={4}
            required={true}
            register={register("message")}
          />
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setCaptcha} />
          <CustomButton
            type="submit"
            disabled={isSubmitting}
            text={"Enviar mensaje"}
            className="mt-5 btn-primary"
          />
        </div>
      </form>
      <CustomModal
        title="Envío con éxito"
        icon={
          <>
            <span className="mr-2">{IconCheck(30)}</span>
          </>
        }
        aceptText="Cerrar"
        description={`Hola ${contactData.name}, muchas gracias por contactar conmigo, trataré de responderle con la mayor brevedad posible.`}
        content={
          <JsonCodeSimulator
            comment="Status: 200 - JSON Sended"
            data={[
              { key: "name", value: contactData.name },
              { key: "surnames", value: contactData.surnames },
              { key: "email", value: contactData.email },
              { key: "phone", value: contactData.phone },
              { key: "message", value: contactData.message },
            ]}
          />
        }
        isOpen={isModalOpen}
        avoidClose={true}
        onAccept={handleCloseModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
