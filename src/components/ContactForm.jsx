import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactForm() {
  const formRef = useRef();
  const [buttonText, setButtonText] = useState("Submit");

  const handelSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending");
    emailjs
      .sendForm(
        "service_rxq1h7r",
        "template_ovd7vn6",
        formRef.current,
        "gTSrVTENI5FuEJYVq"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent Successfully 🥰");
          formRef.current.reset();
          setButtonText("Send");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong 😞");
          setButtonText("Send");
        }
      );
  };
  return (
    <motion.form
      ref={formRef}
      onSubmit={handelSubmit}
      className="flex items-center justify-center flex-col gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 3.5, duration: 1.2 }}
    >
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Your Name"
      />
      <input
        className="input"
        type="email"
        name="email"
        placeholder="your Email"
      />
      <textarea
        className="input min-h-44"
        name="message"
        placeholder="your Message"
      />
      <button type="submit" className="button hover:bg-transparent">
        {buttonText}
      </button>
    </motion.form>
  );
}

export default ContactForm;
