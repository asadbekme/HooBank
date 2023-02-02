import React from 'react';
import { styles } from './utils/styles';
import { CardDeal, Clients, Features, Feedbacks, Home, Navbar, Product, Statistics } from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar component */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home component */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/* Components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Features />
          <Product />
          <CardDeal />
          <Feedbacks />
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default App;