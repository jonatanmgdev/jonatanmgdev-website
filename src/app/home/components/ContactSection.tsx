"use server";
import ContactUsForm from "@/components/forms/ContactForm";

export default async function ContactSectionComponent() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pb-8">
        <p className=" flex text-xl font-semibold leading-7 text-primary-dark">
          ¿Hablamos?
        </p>
        <h3 className="flex animate-slideinLeft">¡Envíame un mensaje!</h3>
      </div>
      <ContactUsForm />
    </section>
  );
}
