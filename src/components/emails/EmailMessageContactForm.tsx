import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type MessageUsEmailProps = {
  name: string;
  email: string;
  surnames: string;
  message: string;
};

const ContactFormEmailTemplate = ({
  name,
  message,
  email,
  surnames,
}: MessageUsEmailProps) => {
  const previewText = `✔️ He recibido tu mensaje desde jonatanmg.dev`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>
                Hola 👋 {name} {surnames}!,
              </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              ¡Hola {name}! ¡Gracias por ponerte en contacto conmigo a través de
              mi página web, jonatanmg.dev! Te aseguro que te responderé tan
              pronto como pueda.
            </Text>
            <Hr className="my-[16px] mx-0 w-full" />
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>Le resumo su mensaje:</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              nombre: {name}
              apellidos: {surnames}
              Email: {email}
              Mensaje: {message}
            </Text>
            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px]">
              ¡No dudes en seguir explorando mi página web y descubrir más sobre
              lo que hago! ¡Gracias de nuevo por tu interés y espero poder
              hablar contigo pronto!
            </Text>
            <Text className="text-[#666666] text-[12px]">
              👉 Sígueme en mi perfil de LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/jonatanmgdev/">Ver perfil</a>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmailTemplate;
