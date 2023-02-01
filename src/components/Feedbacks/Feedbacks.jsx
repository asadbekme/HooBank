import { styles } from "../../utils/styles";
import { feedbacks } from "../../utils/constants";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
  return (
    <section id="feedbacks" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 blue__gradient" />

      <div className={`${styles.flexBetween} w-full lg:flex-row flex-col md:mb-16 mb-6 relative z-[1]`}>
        <h2 className={styles.heading2}>
            What People are <br className="md:block hidden" /> saying about us
        </h2>
        <div className="w-full lg:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:justify-start justify-center w-full relative z-[1] feedback-container">
        {feedbacks.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;