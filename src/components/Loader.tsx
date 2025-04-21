import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark-900 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="text-4xl font-bold text-primary-500 mb-8">
          <span className="font-extrabold">S</span>
          <span className="font-light">hekhar</span>
        </div>

        <div className="w-64 h-2 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 2 }}
          />
        </div>

        <div className="mt-4 text-light-100 text-sm">
          Loading amazing content... {progress}%
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;