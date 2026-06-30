import styles from "../style";
import { arrowUp } from "../assets"; 

const GetStarted = () => (
  <a
    href="https://wa.me/5561983238897?text=Ol%C3%A1%20gostaria%20de%20solicitar%20uma%20visita!"
    target="_blank" 
    rel="noopener noreferrer" 
    // Classes de animação adicionadas: transition-all, hover:scale-110, hover:shadow e active:scale-95
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(51,187,207,0.6)] active:scale-95`}
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        {/* Adicionado mr-2 para dar um pequeno espaço entre a palavra "Chamar" e a seta */}
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
          <span className="text-gradient">Chamar</span>
        </p>
        <img src={arrowUp} alt="seta" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Técnico</span>
      </p>
    </div>
  </a> 
);

export default GetStarted;