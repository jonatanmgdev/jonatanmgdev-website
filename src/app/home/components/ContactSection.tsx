"use server";
import ContactUsForm from "@/components/forms/ContactForm";

export default async function ContactSectionComponent() {
  return (
    <section id="contact-section">
      <div className="flex flex-col items-center justify-center mb-6">
        <p className=" flex text-xl font-semibold leading-7 text-[--tertiary-color]">
          ¡Hey! ¿Hablamos?
        </p>
        <h2 className="flex animate-slideinLeft">Envíame un mensaje</h2>
      </div>
      <ContactUsForm />
    </section>
  );
}
