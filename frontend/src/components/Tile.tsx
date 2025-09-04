import React from 'react';
import { motion } from 'framer-motion';

interface TileProps {
  value: number;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ value, onClick }) => {
  if (value === 0) {
    return <div className="w-24 h-24 bg-gray-200 rounded-lg" />;
  }

  return (
    <motion.div
      role="button"
      className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-3xl font-bold cursor-pointer shadow-lg"
      onClick={onClick}
      layout
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {value}
    </motion.div>
  );
};

export default Tile;
