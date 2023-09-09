import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactTile from "@/components/ContactTile";
import SocialMedia from "@/components/SocialMedia";

const Contact = () => {
  return (
    <div className="flex flex-col gap-16 ">
      <div className="bg-[url('/assets/images/contact-pg.png')] bg-cover  bg-center  ">
        <div className="py-40 flex  justify-center items-center backdrop-brightness-50 flex-col gap-5 px-10 text-center">
          <p className="text-white font-semibold text-3xl tracking-widest ">
            CONTACT US
          </p>
        </div>
      </div>

      <ContactForm />
      <p className="text-2xl tracking-wider font-medium text-center">
        Talk To Us
      </p>
      <div className="flex flex-col gap-10">
        <ContactTile />
        <ContactTile />
        <ContactTile />
      </div>
      <SocialMedia />
    </div>
  );
};

export default Contact;
