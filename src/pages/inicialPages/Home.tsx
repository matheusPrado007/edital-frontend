import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";
import FooterComponent from "../../components/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <HeaderComponent />
      <div className="main-container">
        <div className="text-container">
          <p className="p-color-1">
            PREPARE-SE
            <br />
            PARA VIVER DA
          </p>
          <p className="p-color-2">
            SUA ARTE.
            <iframe
              src="https://giphy.com/embed/XwcRflO9HD0Sk6RaRM"
              width="480"
              height="301"
              frameBorder="0"
              className="setas"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/arrow-seta-roxa-XwcRflO9HD0Sk6RaRM"></a>
            </p>
          </p>
          <p className="p-color-3">
            Faça seu projeto criar vida com sensibilidade artística, social e
            técnica
          </p>
        </div>
        <div className="form-container">
          <div className="form-style">
            <input
              type="text"
              className="input-field input-top"
              placeholder="Nome completo"
            />
            <input type="email" className="input-field" placeholder="E-mail" />
            <input
              type="tel"
              className="input-field"
              placeholder="Número de telefone"
            />
            <div className="checkbox-field">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="check-input"
              />
              <label htmlFor="terms" className="checkbox-label">
                Aceitar termos e condições
              </label>
            </div>
            <button className="btn-cadastrar">Cadastrar</button>
            <button className="btn-ja-tenho-conta">Já tenho uma conta</button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
