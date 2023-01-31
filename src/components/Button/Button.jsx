const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 font-montserrat font-semibold text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  );
};

export default Button;