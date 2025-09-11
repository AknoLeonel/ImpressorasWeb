import React from 'react';
import { whatsapp } from '../assets'; // Importa o ícone do WhatsApp
import '../index.css'; // Importa o CSS global para a animação

const WhatsappButton = () => {
  return (
    <a 
      href="https://wa.me/5561983238897?text=Ol%C3%A1%20gostaria%20de%20solicitar%20uma%20visita!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg whatsapp-pulse cursor-pointer" // Classes Tailwind e classe para animação
      aria-label="Fale conosco pelo WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </a>
  );
};

export default WhatsappButton;