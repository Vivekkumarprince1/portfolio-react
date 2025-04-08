import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import SectionWrapper from './hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';

const ExperienceCard = ({ index, title, company_name, icon, iconBg, date, points }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Tilt className="w-full h-full">
      <motion.div 
        variants={fadeIn("right", "spring", index * 0.15, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] p-5 h-full flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
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
          
          <div className="mt-2 flex-grow">
            <ul className="list-disc ml-5 space-y-2">
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
        </div>
      </motion.div>
    </Tilt>
  );
};

const Experience = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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