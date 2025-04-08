import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import SectionWrapper from './hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';

const ExperienceCard = ({ index, title, company_name, icon, iconBg, date, points }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-tertiary h-[370px] p-5 rounded-2xl sm:w-[360px] w-full shadow-card hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: iconBg }}>
            {!imageError ? (
              <img
                src={icon}
                alt={company_name}
                className="w-1/2 h-1/2 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center text-white text-xl font-bold">
                {company_name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-white text-[20px] font-bold">{title}</h3>
            <p className="text-secondary text-[16px] font-semibold">
              {company_name}
            </p>
            <p className="text-secondary text-[14px]">{date}</p>
          </div>
        </div>
        
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7">
      {experiences.map((experience, index) => (
        <ExperienceCard 
          key={`experience-${index}`} 
          index={index}
          {...experience} 
        />
      ))}
    </div>
  );
};

export default Experience;