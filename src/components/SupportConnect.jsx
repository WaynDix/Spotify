import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import WuzeeImg from "./wuzeeimg.png";
import { useNavigate } from "react-router-dom";
import "../style/supportconnect.css";

const SupportConnect = () => {
  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mgsi5fk", "template_7lanjrv", form.current, "UlbwroJNHAPjmmj3i")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="wuzee-nav">
      <div>
        <img
          src={WuzeeImg}
          alt=""
          height={70}
          className="imgIconW"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="sup-con-all">
        <div className="con-all">
          <h1 className="con-h-first">Support Wuzee</h1>
          <div className="inp-all-send">
            <form ref={form} onSubmit={sendEmail} className="inp-all-send">
              <input
                className="inp-the"
                type="email"
                placeholder="Email"
                name="email_id"
              />
              <textarea
                className="inp-the allbackty"
                placeholder="Message"
                name="message"
              ></textarea>
              <div className="but-all-the">
              <input type="submit" value="Send" className="button-62" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportConnect;
