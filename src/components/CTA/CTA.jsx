import { styles } from '../../utils/styles';
import Button from '../Button/Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col rounded-[20px] box-shadow bg-dark-gradient`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;