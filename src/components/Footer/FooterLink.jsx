import Link from "./Link";

const FooterLink = ({ footerLink }) => {
  return (
    <div className={`flex flex-col sm:my-0 my-4 min-w-[150px]`}>
      <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
        {footerLink.title}
      </h4>
      <ul className="list-none mt-4">
        {footerLink.links.map((link, index) => (
          <Link 
            key={link.name} 
            link={link} 
            footerLink={footerLink} 
            index={index} 
          />
        ))}
        </ul>
    </div>
  );
};

export default FooterLink;