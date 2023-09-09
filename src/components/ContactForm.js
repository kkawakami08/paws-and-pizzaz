import React from "react";

const ContactForm = () => {
  return (
    <div>
      <p className="text-2xl tracking-wider font-medium text-center pb-16">
        Get In Touch
      </p>

      <form className="flex flex-col gap-5 px-10 items-center bg-gray-blue py-10">
        <input
          type="text"
          placeholder="Full name"
          className="border-2 w-full p-2 bg-gray-100 placeholder:text-slate-500 placeholder:text-sm border-ash-gray"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border-2 w-full p-2 bg-gray-100 placeholder:text-slate-500 placeholder:text-sm border-ash-gray"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 w-full p-2 bg-gray-100 placeholder:text-slate-500 placeholder:text-sm border-ash-gray"
        />
        <textarea
          placeholder="Message"
          className="border-2 w-full p-2 bg-gray-100 placeholder:text-slate-500 placeholder:text-sm border-ash-gray"
        />
        <button className="bg-light-purple text-white text-xs py-3 px-5 tracking-widest self-start">
          SEND NOW
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
