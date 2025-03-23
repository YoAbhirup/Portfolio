import { motion } from 'framer-motion';
import { useCustomCursor } from '../hooks/useCustomCursor';
import { ArrowUpRight } from 'lucide-react';

export const CustomCursor = () => {
  const { position, isHoveringName, isHoveringLink, isHoveringProject, isHoveringResume } = useCustomCursor();

  const scale = isHoveringName ? 4 : (isHoveringLink || isHoveringProject || isHoveringResume) ? 4 : 1;
  const showArrow = isHoveringLink || isHoveringProject || isHoveringResume;
  
  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-50 mix-blend-difference flex items-center justify-center"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {showArrow && (
          <ArrowUpRight 
            size={16} 
            className="text-white"
            style={{ transform: 'translate(1px, -1px)' }}
          />
        )}
      </motion.div>
    </>
  );
};