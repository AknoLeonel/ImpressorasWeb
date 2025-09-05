import styles from "../style";
import { arrowUp } from "../assets"; // Presumo que 'arrowUp' seja a seta dentro do botão.

const GetStarted = () => (
  // O link será no elemento <a> que envolve todo o conteúdo do botão
  <a
    href="https://wa.me/5561983238897?text=Ol%C3%A1%20gostaria%20de%20solicitar%20uma%20visita!"
    target="_blank" // Abre em uma nova aba
    rel="noopener noreferrer" // Medida de segurança para links externos
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Chamar</span> {/* Texto superior */}
        </p>
        <img src={arrowUp} alt="seta" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Técnico</span> {/* Texto inferior */}
      </p>
    </div>
  </a> // Fecha a tag <a>
);

export default GetStarted;