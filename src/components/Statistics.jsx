import { stats } from "../utils/constants";
import { styles } from "../utils/styles";

const Statistics = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap md:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row m-3`}>
          <h4 className={`font-montserrat font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white`}>
            {stat.value}
          </h4>
          <p className='font-montserrat font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3 text-gradient'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Statistics;