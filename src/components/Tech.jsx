import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from '../utils/motion';

const TechCard = ({ index, name, icon }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.1, 0.55)}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
      className="sm:w-[120px] w-[100px]"
    >
      <div className="w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card hover:shadow-xl transition-shadow duration-300">
        <div className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[120px] flex justify-center items-center">
          {!imageError ? (
            <img 
              src={icon}
              alt={name}
              className={`w-16 h-16 object-contain ${name.toLowerCase() === 'github' ? 'invert' : ''}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-white mt-4 font-medium">{name}</p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <TechCard 
          key={technology.name} 
          index={index}
          {...technology} 
        />
      ))}
    </div>
  );
};

export default Tech;