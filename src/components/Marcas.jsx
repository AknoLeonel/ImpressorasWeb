import styles from "../style";

const Marcas = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY} min-h-[60vh] justify-center items-center text-center`}>
    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white">
      Todas as <span className="text-gradient">Marcas</span>
    </h1>
    <p className={`${styles.paragraph} mt-5`}>Página em construção...</p>
  </section>
);

export default Marcas;