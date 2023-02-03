import { useState } from "react";
import { navigationLinks } from "../../utils/constants";
import { styles } from "../../utils/styles";
import { close, logo, menu } from "../../assets";

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
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-[130px] h-[35px] cursor-pointer"
        />
      </a>

      {/* Navigation Link */}
      <ul className="list-none hidden md:flex justify-end items-center flex-1">
        {navigationLinks.map((link, idx) => (
          <li
            key={link.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-white 
            ${(navigationLinks.length - 1 === idx) ? "mr-0" : "mr-10"} 
            ${active === link.id ? "text-white" : "text-lightWhite"} 
            hover:text-white transition-all duration-500`}
            onClick={() => activeHandler(link.id)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
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
          className={`${!toggleMenu ? "hidden" : "flex"} 
          p-6 absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar bg-black-gradient`}
        >
          <ul className={`list-none flex justify-end items-start flex-1 flex-col gap-4`}>
            {navigationLinks.map((link) => (
              <li
                key={link.id}
                className={`font-montserrat font-normal cursor-pointer text-[17px] text-white 
                ${active === link.id ? "text-white" : "text-lightWhite"} 
                hover:text-white transition-all duration-500`}
                onClick={() => activeHandler(link.id)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
