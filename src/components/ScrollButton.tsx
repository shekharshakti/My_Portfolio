import { motion } from 'framer-motion';

const ScrollButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="absolute bottom-8 right-8 flex flex-col items-center"
    >
      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        className="btn btn-primary"
      >
        Scroll to Bottom
      </button>
    </motion.div>
  );
};

export default ScrollButton;
