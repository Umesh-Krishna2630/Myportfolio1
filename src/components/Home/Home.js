import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  const handleButtonClick = () => {
    window.open('/krishna.pdf', '_blank'); // Directly reference the PDF in the public directory
  };

  return (
    <motion.section
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Hero">
        <h1>Welcome to My Realm</h1>
        <p>Crafting beautiful and functional experiences.</p>
        <button className="cta-button" onClick={handleButtonClick}>
          Explore My Work
        </button>
      </div>
    </motion.section>
  );
}

export default Home;
