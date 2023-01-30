import { navigationLinks } from "../utils/constants";
import { styles } from "../utils/styles";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[130px] h-[35px] cursor-pointer"
      />

      {/* Navigation Link */}
      <ul className="list-none hidden md:flex justify-end items-center flex-1">
        {navigationLinks.map((link, idx) => (
          <li
            key={link.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${
              navigationLinks.length === idx ? "mr-0" : "mr-10"
            } hover:text-lightWhite transition-all duration-500`}
          >
            {link.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
