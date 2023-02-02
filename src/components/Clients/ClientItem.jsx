import { styles } from "../../utils/styles";

const ClientItem = ({ id, logo }) => {
  return (
    <div className={`flex-1 ${styles.flexCenter} md:min-w-[192px] min-w-[120px] m-5`}>
      <img src={logo} alt="client_logo" className="md:w-[192px] w-[100px] object-contain" />
    </div>
  );
};

export default ClientItem;