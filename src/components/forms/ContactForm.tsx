"use client";
import { useForm } from "react-hook-form";
import { IconCheck } from "@/components/svgIcons";
import { useEffect, useState } from "react";
import CustomCheckbox from "../custom/CustomCheckbox";
import dynamic from "next/dynamic";
import { CustomTextarea, CustomInput } from "../custom";
import CustomButton from "../custom/CustomButton";
import CustomModal from "../custom/CustomModal";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));

type ContactFormInput = {
  name: string;
  surnames: string;
  phone: string;
  email: string;
  message: string;
  termsAccepted: boolean;
};

interface contactUsFormProps {
  clasName?: string;
}

export default function ContactUsForm(className?: contactUsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    getValues,
    setValue,
    reset,
  } = useForm<ContactFormInput>({
    mode: "onSubmit",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>();
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCaptchaExpired = () => {
    setCaptcha(null);
    setRecaptchaError(true);
  };

  const isFormValidated = () : boolean => {
    let isValidForm = false;

    // Check recaptcha
    if (!captcha) {
      setRecaptchaError(true);
      isValidForm = false;
    } else {
      setRecaptchaError(false);
    }

    // Check terms
    if (!getValues("termsAccepted")) {
      isValidForm = false;
    }

    // Check isValid form state
    isValid === false ? (isValidForm = false) : (isValidForm = true);

    // Check formState
    return isValidForm;
  };


  useEffect(() => {
    if (isValid) {
      setRecaptchaNeeded(true);
    }
  }, [isValid]);
  

  async function onSubmit(formData: ContactFormInput) {

    if(isFormValidated()) {
      handleOpenModal();
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
    <div className={`w-full %${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full md:justify-between gap-4">
          <CustomInput
            label="Nombre"
            alt="nombre"
            id="name"
            name="name"
            placeholder="Introduzca su nombre..."
            type="text"
            errors={errors.name}
            errorsClasses="text-red-400"
            register={register}
            rules={{
              required: {
                value: true,
                message: "Por favor, introduzca su nombre",
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 40,
                message: "El nombre debe tener menos de 40 caracteres",
              },
            }}
            inputVariant="SOLID"
          />
          <CustomInput
            label="Apellidos"
            alt="apellidos"
            name="surnames"
            id="surnames"
            placeholder="Introduzca sus apellidos..."
            type="text"
            errors={errors.surnames}
            errorsClasses="text-red-400"
            rules={{
              required: {
                value: true,
                message: "Por favor, introduzca sus apellidos",
              },
              minLength: {
                value: 3,
                message: "Los apellidos deben tener al menos 6 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Los apellidos deben tener menos de 80 caracteres",
              },
            }}
            register={register}
            inputVariant="SOLID"
          />
          <CustomInput
            label="E-mail"
            alt="email"
            id="email"
            name="email"
            placeholder="Introduzca su e-mail..."
            type="email"
            errors={errors.email}
            errorsClasses="text-red-400"
            rules={{
              required: {
                value: true,
                message: "Por favor, introduzca su email",
              },
              minLength: {
                value: 4,
                message: "El email debe tener al menos 4 caracteres",
              },
              maxLength: {
                value: 60,
                message: "El email debe tener menos de 60 caracteres",
              },
            }}
            register={register}
            inputVariant="SOLID"
          />
          <CustomInput
            label="Teléfono"
            alt="teléfono"
            id="phone"
            name="phone"
            placeholder="Introduzca su telefono..."
            type="text"
            errors={errors.phone}
            rules={{
              required: {
                value: true,
                message: "Por favor, introduzca su teléfono",
              },
              minLength: {
                value: 6,
                message: "El teléfono debe tener al menos 6 caracteres",
              },
              maxLength: {
                value: 15,
                message: "El teléfono debe tener menos de 15 caracteres",
              },
            }}
            errorsClasses="text-red-400"
            register={register}
            inputVariant="SOLID"
          />
        </div>
        <div className="grid my-4 gap-2">
          <CustomTextarea
            id="message"
            name="message"
            title="Mensaje"
            placeholder={"Introduzca su mensaje..."}
            rows={4}
            errors={errors.message}
            errorsClasses="text-red-400"
            rules={{
              required: {
                value: true,
                message: "Por favor, introduzca su mensaje",
              },
              minLength: {
                value: 4,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 400,
                message: "El mensaje debe tener menos de 400 caracteres",
              },
            }}
            register={register}
            inputVariant="SOLID"
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
            isChecked={terms}
            className="my-4"
          />
          {recaptchaNeeded && (
            <>            
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setCaptcha}
              onExpired={handleCaptchaExpired}
              
            />
            {recaptchaError && <p className="text-red-400">Debe realizar el proceso de reCAPTCHA</p>}
            </>
          )}
          <CustomButton
            id="submit-btn"
            type="submit"
            className="mt-4"
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
        description={`Hola , muchas gracias por contactar conmigo, trataré de responderle con la mayor brevedad posible.`}
        // description={`Hola ${contactData.name}, muchas gracias por contactar conmigo, trataré de responderle con la mayor brevedad posible.`}
        content={<></>}
        isOpen={isModalOpen}
        avoidClose={true}
        onAccept={handleCloseModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
