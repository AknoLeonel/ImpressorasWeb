import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre os melhores suprimentos <br className="sm:block hidden" /> em poucos passos.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Trabalhamos com uma linha completa de toners, cartuchos e peças originais e compatíveis
        das melhores marcas, garantindo qualidade de impressão e a durabilidade do seu equipamento.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Suprimentos para Impressoras" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;