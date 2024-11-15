import React from 'react';
import { motion } from 'framer-motion';

const AnimatedContainer = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Animated Container with Framer Motion</h2>
      <p>This container uses Framer Motion for fade-in and slide-up animation.</p>
    </motion.div>
  );
};

export default AnimatedContainer;