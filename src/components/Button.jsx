import React from "react";

const Button = ({ styles }) => (
  <a
    href="https://wa.me/5561983238897?text=Ol%C3%A1%20gostaria%20de%20solicitar%20uma%20visita!"
    target="_blank"
    rel="noopener noreferrer"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Solicitar Serviço
  </a>
);

export default Button;