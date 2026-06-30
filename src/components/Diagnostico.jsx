import styles from "../style";

const Diagnostico = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY} min-h-[60vh]`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 justify-center items-center text-center`}>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Diagnóstico <span className="text-gradient">Gratuito</span>
      </h1>
      
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Não deixe sua impressora parada! Nossos técnicos especializados irão até você para avaliar o equipamento na primeira visita, sem nenhum custo de orçamento.
      </p>

      <div className="mt-10">
        <a
          href="https://wa.me/5561983238897?text=Ol%C3%A1,%20gostaria%20de%20agendar%20meu%20diagn%C3%B3stico%20gratuito!"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(51,187,207,0.5)]"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Diagnostico;