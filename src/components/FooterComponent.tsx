import React from "react";
import "../styles/Footer.css";
import facebook from "../assets/fcb.png";
import instagram from "../assets/insta.png";
import twitter from "../assets/tt.png";

const FooterComponent: React.FC = () => {
  return (
    <section className="footer">
      <div className="container-footer clearfix">
        <div className="footer-content">
          <p className="text-edital">&copy; Edital</p>
          <img
            src={facebook}
            alt="icone do facebook"
            className="icon-facebook"
          />
          <img src={twitter} alt="icone do twitter" className="icon-twitter" />
          <img
            src={instagram}
            alt="icone do instagram"
            className="icon-instagram"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
