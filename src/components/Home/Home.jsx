import { discount, robot } from "../../assets";
import { styles } from "../../utils/styles";
import GetStarted from "../GetStarted/GetStarted";

const Home = () => {
  return (
    <section id="home" className={`flex flex-col lg:flex-row ${styles.paddingY}`}>
      {/* Information */}
      <div className={`${styles.flexStart} flex-1 flex-col xxl:px-0 xs:px-16 px-6`}>
        {/* Discount */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* Title */}
        <div className={`${styles.flexBetween} flex-row w-full`}>
          <h1 className={`${styles.heading1} flex-1`}>
            The Next <br className="md:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="sm:flex hidden lg:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className={`${styles.heading1} w-full`}>
          Payment Method.
        </h1>

        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* Animation image */}
      <div className={`flex-1 ${styles.flexStart} lg:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* Gradient background */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* GetStarted component */}
      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Home;
