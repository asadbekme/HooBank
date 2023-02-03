const SocialMedia = ({ index, social, length }) => {
  return (
    <a href={social.link} target="_blank" rel="noopener noreferrer">
      <img
        src={social.icon}
        alt={social.id}
        className={`w-[21px] h-[21px] object-contain ${(index !== length - 1) ? "mr-6" : "mr-0"}`}
        // onClick={() => window.open(social.link)}
      />
    </a>
  );
};

export default SocialMedia;