import { logo } from "../../assets";
import { styles } from "../../utils/styles";
import { footerLinks, socialMedias } from '../../utils/constants';
import FooterLink from "./FooterLink";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} lg:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap lg:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <FooterLink key={footerLink.title} footerLink={footerLink} />
          ))}
        </div>
      </div>
      
      <div className="w-full flex justify-between items-center lg:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row lg:mt-0 mt-6">
          {socialMedias.map((social, index) => (
            <SocialMedia 
              key={social.id} 
              index={index} 
              social={social} 
              length={socialMedias.length}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;