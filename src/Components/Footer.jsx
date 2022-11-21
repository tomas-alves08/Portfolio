import React, { useState, useEffect } from "react";
import Img from "./Img";

const Footer = () => {
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);

  const handlePhone = () => {
    setEmail(false);
    setPhone(true);
  };

  const handleEmail = () => {
    setPhone(false);
    setEmail(true);
  };

  let contactDetail;

  if (email) {
    contactDetail = "tomas.alves08@gmail.com";
  } else if (phone) {
    contactDetail = "+64 022 080 3055";
  } else {
    contactDetail = null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmail(false);
      setPhone(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [email, phone]);

  return (
    <div className="footer-container">
      <div className="footer-icons-container">
        <div>
          <Img img="footer-icon" src="./icons/linkedin-icon.png" />
        </div>
        <div onClick={handlePhone}>
          <Img img="footer-icon" src="./icons/phone-icon.png" />
        </div>
        <div onClick={handleEmail}>
          <Img img="footer-icon" src="./icons/email-icon.png" />
        </div>
      </div>
      <div>
        <p className="footer-contact-details">{contactDetail}</p>
      </div>
    </div>
  );
};

export default Footer;
