const Link = ({ footerLink, index, link }) => {
  return (
    <li
      key={link.name}
      className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer 
      ${(index !== footerLink.links.length - 1) ? "mb-4" : "mb-0"}`}
    >
      {link.name}
    </li>
  );
};

export default Link;