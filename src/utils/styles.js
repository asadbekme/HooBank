export const styles = {
  container: 'xxl:max-w-[1280px] w-full',

  flexStart: 'flex justify-center items-start',
  flexCenter: 'flex justify-center items-center',
  flexBetween: 'flex justify-between items-center',

  heading1: 'font-montserrat font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100.8px] leading-[75px]',
  heading2: 'font-montserrat font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-montserrat font-normal text-lightWhite text-[18px] leading-[30.8px]',

  padding: 'md:px-16 px-6 md:py-12 py-4',
  paddingX: 'md:px-16 px-6',
  paddingY: 'md:py-16 py-6',

  marginX: 'md:mx-16 mx-6',
  marginY: 'md:my-16 my-6',
};

export const layout = {
  section: `flex lg:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

  sectionImg: `flex-1 flex ${styles.flexCenter} lg:ml-10 ml-0 lg:mt-0 mt-10 relative`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} lg:mr-10 mr-0 lg:mt-0 mt-10 relative`,
};