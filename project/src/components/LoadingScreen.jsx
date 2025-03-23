import React from 'react';
import { motion } from 'framer-motion';
import { BallTriangle } from 'react-loader-spinner'

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#ed7828"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        <motion.h2
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="italic mt-10 text-2xl text-orange-400 font-light"
        >
          Loading...
        </motion.h2>
      </div>
    </motion.div>
  );
};