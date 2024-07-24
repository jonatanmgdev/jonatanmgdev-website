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
  const previewText = `👉 ${message}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>👋 Hey!</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              {name} {surnames} ha enviado un mensaje a través de tu porfolio.
            </Text>
            <Hr className="my-[16px] mx-0 w-full" />
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>Resumen:</strong>
            </Heading>
            <ul className="list-disc list-inside">
              <li>
                <strong>Nombre:</strong> {name}
              </li>
              <li>
                <strong>Apellidos:</strong> {surnames}
              </li>
              <li>
                <strong>Email:</strong> {email}
              </li>
              <li>
                <strong>Mensaje:</strong> {message}
              </li>
            </ul>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmailTemplate;
