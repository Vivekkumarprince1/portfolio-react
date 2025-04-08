import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';
import { getAssetUrl } from '../utils/assetUtils';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

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
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-tertiary/50">
                <div className="w-6 h-6 border-3 border-[#915EFF] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={imageError ? 'https://placehold.co/400x300/404040/FFFFFF?text=Project+Image' : image}
              alt={name}
              className={`w-full h-full object-cover transition-all duration-300 ${
                isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              onError={() => setImageError(true)}
              onLoad={() => setIsLoading(false)}
            />
            
            <motion.div 
              className="absolute inset-0 flex justify-end m-3"
              whileHover={{ scale: 1.1 }}
            >
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
              >
                <img
                  src={getAssetUrl('github')}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain invert"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-4 flex-grow flex flex-col">
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            
            <div className="relative flex-grow mt-2">
              <p className={`text-secondary text-[14px] leading-[1.5] overflow-hidden ${
                isExpanded ? '' : 'line-clamp-4'
              }`}>
                {description}
              </p>
              
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-tertiary to-transparent" />
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#915EFF] text-sm mt-2 hover:underline w-fit"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[12px] ${tag.color} px-2 py-1 rounded-full bg-tertiary/30`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard; 