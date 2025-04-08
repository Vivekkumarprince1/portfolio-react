import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-4xl md:text-6xl text-white font-bold"
      >
        Welcome to My Portfolio
      </motion.h1>
    </motion.div>
  );
};

export default Welcome;
