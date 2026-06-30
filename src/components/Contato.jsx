import styles from "../style";

const Contato = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY} min-h-[60vh] justify-center items-center text-center`}>
    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white">
      Fale <span className="text-gradient">Conosco</span>
    </h1>
    <p className={`${styles.paragraph} mt-5`}>Página em construção...</p>
  </section>
);

export default Contato;