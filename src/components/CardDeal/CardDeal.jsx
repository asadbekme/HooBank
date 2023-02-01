import { card } from "../../assets";
import { layout, styles } from "../../utils/styles";
import Button from "../Button/Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="md:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortorç. Aliquet ultrices ac, ametau.
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="credit_card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;