import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageTurnTransition = ({ children, currentPage, direction }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        rotateY: { type: 'spring', stiffness: 100, damping: 20 },
        opacity: { duration: 0.5 },
        scale: { type: 'spring', stiffness: 100, damping: 20 },
        x: { type: 'spring', stiffness: 100, damping: 20 },
      },
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.8,
      x: direction > 0 ? '-100%' : '100%',
      transition: {
        rotateY: { type: 'spring', stiffness: 100, damping: 20 },
        opacity: { duration: 0.3 },
        scale: { type: 'spring', stiffness: 100, damping: 20 },
        x: { type: 'spring', stiffness: 100, damping: 20 },
      },
    }),
  };

  const splitVariants = {
    enter: {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0,
    },
    center: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        clipPath: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.5 },
      },
    },
    exit: {
      clipPath: 'inset(0 0 0 100%)',
      opacity: 0,
      transition: {
        clipPath: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div className="page-turn-container" style={{ perspective: '2000px' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={splitVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="page-content"
          style={{
            transformOrigin: direction > 0 ? 'left center' : 'right center',
            backfaceVisibility: 'hidden',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTurnTransition;
