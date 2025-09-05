import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="Planos de Manutenção" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Controle facilmente seus custos <br className="sm:block hidden" /> com planos de manutenção.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Oferecemos planos de manutenção preventiva e corretiva que se adaptam à sua necessidade.
        Tenha previsibilidade de gastos e garanta que seus equipamentos estejam sempre prontos para o trabalho.
      </p>
    </div>
  </section>
);

export default Billing;