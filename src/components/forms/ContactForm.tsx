"use client";
import { useForm } from "react-hook-form";
import { IconLinkedin } from "@/components/svgIcons";
import { useCallback, useEffect, useState } from "react";
import CustomCheckbox from "../custom/CustomCheckbox";
import dynamic from "next/dynamic";
import { CustomTextarea, CustomInput } from "../custom";
import CustomButton from "../custom/CustomButton";
import IconEmailSended from "../svgIcons/IconEmailSended";
import ProfileCard from "../profileCard/ProfileCard";
import jonatanAvatar from "@assets/images/jonatanmgdev-profile-avatar.webp";
import Link from "next/link";
import { RoutePaths } from "@/core/config/router/routes";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));

type ContactFormInput = {
  name: string;
  surnames: string;
  phone: string;
  email: string;
  message: string;
  termsAccepted: boolean;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<ContactFormInput>({
    mode: "onSubmit",
  });
  const [captcha, setCaptcha] = useState<string | null>();
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);
  const [sended, setSended] = useState(false);
  const [terms] = useState(false);

  const handleCaptchaExpired = useCallback(() => {
    setCaptcha(null);
    setRecaptchaError(true);
  }, []);

  const isFormValidated = useCallback((): boolean => {
    console.log(isValid, captcha);
    const isValidForm = isValid && captcha !== null && captcha !== undefined;
    setRecaptchaError(!isValidForm);
    return isValidForm;
  }, [isValid, captcha]);

  useEffect(() => {
    if (isValid) {
      setRecaptchaNeeded(true);
    }
  }, [isValid]);

  async function onSubmit(formData: ContactFormInput) {
    if (isFormValidated()) {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          surnames: formData.surnames,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      }).then((response) => {
        console.log(response);
        setSended(true);
      });
    }
  }

  return (
    <div className="w-full">
      {sended ? (
        <div className="flex flex-col justify-center items-center border-2 border-neutral-medium rounded-lg px-4 py-6 min-h-[400px] w-full gap-4">
          <div className="flex items-center justify-center">
            <span className="text-white">{IconEmailSended(100)}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h1 className="text-textcolor-accent">¡Recibido!</h1>
            <p> Muchas gracias por ponerte en contacto.</p>
            <p>
              Los emails los suelo leer con frecuencia, pero si necesitas algo
              urgente, no dudes en escribirme en Linkedin.
            </p>
          </div>
          <ProfileCard
            title="Jonatan Montesdeoca"
            description="Frontend Developer"
            icon={IconLinkedin(20)}
            image={jonatanAvatar.src}
            cardColor="bg-[#ffffff]"
            buttonText="conectar"
          />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full md:justify-between gap-4">
            <CustomInput
              label="Nombre"
              alt="nombre"
              id="name"
              name="name"
              autocomplete="name"
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
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "El nombre solo puede contener letras y espacios",
                },
              }}
              inputVariant="SOLID"
            />
            <CustomInput
              label="Apellidos"
              alt="apellidos"
              name="surnames"
              id="surnames"
              autoComplete="family-name"
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
                  value: 80,
                  message: "Los apellidos deben tener menos de 80 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message:
                    "Los apellidos deben solo pueden contener letras y espacios",
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
              autoComplete="email"
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
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Por favor, introduzca un email válido",
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
              autoComplete="tel"
              placeholder="Introduzca su telefono..."
              type="text"
              errors={errors.phone}
              rules={{
                required: {
                  value: true,
                  message: "Por favor, introduzca su teléfono",
                },
                minLength: {
                  value: 9,
                  message: "El teléfono debe tener al menos 9 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "El teléfono debe tener menos de 15 caracteres",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "El teléfono solo puede contener números",
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
              autoComplete="message"
              rows={5}
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
                  value: 800,
                  message: "El mensaje debe tener menos de 800 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZñÑáéíóúü\s!?,.:;()_\-]+$/,
                  message:
                    "El mensaje solo puede contener letras, espacios, signos de exclamación y signos de interrogación",
                },
              }}
              register={register}
              inputVariant="SOLID"
            />
            <CustomCheckbox
              id="termsAccepted"
              labelText={
                <p>
                  Acepto el&nbsp;
                  <Link href={RoutePaths.LegalAdvice}>aviso legal</Link>
                  &nbsp;y la&nbsp;
                  <Link href={RoutePaths.PrivacyPolicy}>
                    Política de privacidad
                  </Link>
                </p>
              }
              register={register}
              rules={{
                required: {
                  value: true,
                  message: "Debe aceptar los términos y condiciones",
                },
              }}
              isChecked={terms}
              errors={errors.termsAccepted}
              errorsClasses="text-red-400"
              className="my-4"
            />
            {recaptchaNeeded && (
              <>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={setCaptcha}
                  onExpired={handleCaptchaExpired}
                />
                {recaptchaError && (
                  <p className="text-red-400">
                    Debe realizar el proceso de reCAPTCHA
                  </p>
                )}
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
      )}
    </div>
  );
}
