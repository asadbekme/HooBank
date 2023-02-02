import { clients } from "../../utils/constants";
import { styles } from "../../utils/styles";
import ClientItem from "./ClientItem";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <ClientItem key={client.id} {...client} />
        ))}
      </div>
    </section>
  );
};

export default Clients;