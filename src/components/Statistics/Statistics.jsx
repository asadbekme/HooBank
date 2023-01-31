import { stats } from "../../utils/constants";
import { styles } from "../../utils/styles";
import StatItem from "./StatItem";

const Statistics = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap md:mb-20 mb-6`}>
      {stats.map((stat) => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </section>
  );
};

export default Statistics;