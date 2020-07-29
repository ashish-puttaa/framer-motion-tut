import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const buttonVariants = {
   hover: {
      scale: 1.075,
      // scale: [1, 1.075, 1],
      // x: [-20, 0, 20],
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
         yoyo: Infinity,
         duration: 0.3,
      },
   },
};

const Home = () => {
   const [showTitle, setShowTitle] = useState(true);
   setTimeout(() => setShowTitle(false), 4000);

   return (
      <motion.div
         className="home container"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.75, type: 'tween', duration: 1.5 }}
      >
         <AnimatePresence>
            {showTitle && <motion.h2 exit={{ opacity: 0 }}>Welcome to Pizza Joint</motion.h2>}
         </AnimatePresence>
         <Link to="/base">
            <motion.button variants={buttonVariants} whileHover="hover">
               Create Your Pizza
            </motion.button>
         </Link>
      </motion.div>
   );
};

export default Home;
