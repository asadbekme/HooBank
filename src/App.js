import React from 'react';
import { Home, Navbar, Statistics } from './components';
import { styles } from './utils/styles';

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
        </div>
      </div>
    </div>
  );
};

export default App;