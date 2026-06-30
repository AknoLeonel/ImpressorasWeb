import styles from "../style";
import Hero from "./Hero";
import Stats from "./Stats";
import Business from "./Business";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import CTA from "./CTA";

const Home = () => (
  <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>
  </>
);

export default Home;