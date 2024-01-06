import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../Title";

// most of this code is taken directly from the emailjs website, added styling, and a success and error message
// sends an email to contact@meadtools.com
const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3kmg80f",
        "template_5pwnpf5",
        form.current,
        "2G-OLW9VI5seyvCUK"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setStatus("Your message was successfully sent!");
        },
        (error) => {
          console.log(error.text);
          setStatus(`Error: ${error.text}`);
        }
      );
  };

  return (
    <div className="main-div-style">
      <div className="component-div">
        <Title header="Contact Form"></Title>
        <form
          className="grid place-items-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <label className="p-6">Name</label>
            <input className="form-input" type="text" name="user_name" />
            <label className="p-6">Email</label>
            <input className="form-input" type="email" name="user_email" />
          </div>
          <label className="py-6">Message</label>
          <textarea className="form-input w-full" name="message" />
          <input className="my-6 btn" type="submit" value="Send" />
        </form>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

export default ContactUs;