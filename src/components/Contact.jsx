import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
function Contact({ dark }) {
  const formRef = useRef();
  const ref = useRef();
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

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="h-[100dvh] lg:flex lg:items-center lg:justify-center lg:h-full w-full p-4"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <Toaster
        position="top-center"
        containerStyle={{ margin: "5px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "18px",
            width: "500px",
            padding: "16px 24px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "8px",
          },
        }}
      />
      <motion.div
        className="flex items-center justify-center gap-24 xl:gap-48 flex-wrap lg:flex-nowrap"
        ref={ref}
        variants={variants}
      >
        <motion.div
          className="flex items-start justify-center gap-8 flex-col"
          variants={variants}
        >
          <h2 className="xl:text-8xl text-4xl text-blue-950 font-bold">Contact Me 📧</h2>

          <div className="info ">
            <p className="P text-xl font-bold">Email</p>
            <span>fawzy8571@gmail.com</span>
          </div>

          <div className="info ">
            <p className="P text-xl font-bold">Address</p>
            <span>Egypt\Menoufia</span>
          </div>

          <div className="info ">
            <p className="P text-xl font-bold">Phone</p>
            <span>+20 01553416937</span>
          </div>
        </motion.div>

        <motion.div className="w-full relative" variants={variants}>
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute w-full m-auto z-[1]"
          >
            <svg
              className=""
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              {dark === "dark" ? (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                  stroke="#78aaff"
                  strokeWidth="1.5960000000000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></motion.path>
              ) : (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                  stroke="#000b42"
                  strokeWidth="1.5960000000000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></motion.path>
              )}
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={handelSubmit}
            className="flex items-center  justify-center flex-col gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <input
              className="input z-[300]"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="input z-[300]"
              type="email"
              name="email"
              placeholder="your Email"
            />
            <textarea
              className="input min-h-44 z-[300]"
              name="message"
              placeholder="your Message"
            />
            <button
              type="submit"
              className="button mb-4 hover:bg-transparent z-[300]"
            >
              {buttonText}
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
