import { useState } from "react";
import { navigationLinks } from "../utils/constants";
import { styles } from "../utils/styles";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };
  const activeHandler = (id) => setActive(id);

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
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-white 
            ${navigationLinks.length === idx ? "mr-0" : "mr-10"} 
            ${active === link.id ? "text-white" : "text-lightWhite"} 
            hover:text-white transition-all duration-500`}
            onClick={() => activeHandler(link.id)}
          >
            {link.title}
          </li>
        ))}
      </ul>

      {/* Menu button */}
      <div className={`md:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggleMenu ? close : menu}
          alt="nav"
          className="w-[30px] h-[30px] object-contain cursor-pointer"
          onClick={toggleHandler}
        />

        <div
          className={`${
            !toggleMenu ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}
        >
          <ul className={`${styles.flexCenter} flex-1 list-none`}>
            {navigationLinks.map((link, idx) => (
              <li
                key={link.id}
                className={`font-montserrat font-normal cursor-pointer text-[16px] text-white 
                ${navigationLinks.length === idx ? "mr-0" : "mr-10"} 
                ${active === link.id ? "text-white" : "text-lightWhite"} 
                hover:text-white transition-all duration-500`}
                onClick={() => activeHandler(link.id)}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
