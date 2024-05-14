"use server";
import ContactUsForm from "@/components/forms/ContactForm";

async function ContactSectionComponent() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pb-8">
        <p className=" flex text-xl font-semibold text-primary-dark">
          ¿Hablamos?
        </p>
        <h3 className="flex">¡Envíame un mensaje!</h3>
      </div>
      <ContactUsForm />
    </section>
  );
}

export default ContactSectionComponent