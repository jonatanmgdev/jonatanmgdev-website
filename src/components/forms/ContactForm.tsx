"use client";

import { useForm } from "react-hook-form";
import {
  CustomButton,
  CustomInput,
  CustomModal,
  CustomTextarea,
  JsonCodeSimulator,
} from "..";
import { IconCheck } from "@assets/icons";
import { useState } from "react";
import CustomCheckbox from "../custom/CustomCheckbox";
import dynamic from "next/dynamic";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));

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
  const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);

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

  const handleFieldChange = (fieldName: keyof ContactFormInput) => {
    setRecaptchaNeeded(true);
  };

  async function onSubmit(formData: ContactFormInput) {
    if (captcha) {
      console.log("Recaptcha verificado");
      console.log(formData);
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
            className="bg-neutral-deep"
            placeholder="Nombre"
            type="text"
            required={true}
            register={register("name")}
            onChange={() => handleFieldChange("name")}
          />
          <CustomInput
            alt="apellidos"
            id="surnames"
            className="bg-neutral-deep"
            placeholder="Apellidos"
            type="text"
            required={true}
            register={register("surnames")}
            onChange={() => handleFieldChange("surnames")}
          />
          <CustomInput
            alt="email"
            id="email"
            className="bg-neutral-deep"
            placeholder="E-mail"
            type="email"
            required={true}
            register={register("email")}
            onChange={() => handleFieldChange("email")}
          />
          <CustomInput
            alt="teléfono"
            id="phone"
            className="bg-neutral-deep"
            placeholder="Teléfono"
            type="text"
            required={true}
            register={register("phone")}
            onChange={() => handleFieldChange("phone")}
          />
        </div>
        <div className="grid my-4 gap-2">
          <CustomTextarea
            title="Ingrese aquí su mensaje..."
            className="mb-4 bg-neutral-deep"
            placeholder={"Su mensaje..."}
            rows={4}
            required={true}
            register={register("message")}
            onChange={() => handleFieldChange("message")}
          />
          <CustomCheckbox
            labelText={
              <p>
                Acepto los{" "}
                <a href="https://www.tusitio.com/términos-y-condiciones">
                  términos y condiciones
                </a>
                .
              </p>
            }
            isChecked={true}
            className="mb-4"
          />
          {recaptchaNeeded && (
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setCaptcha}
            />
          )}
          <CustomButton
            id="submit-btn"
            type="submit"
            className="bg-neutral-dark mt-4"
            disabled={isSubmitting}
            text={"Enviar formulario"}
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
