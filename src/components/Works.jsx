import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects, sections } from '../constants';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { getAssetUrl } from '../utils/assetUtils';
import Tech from './Tech';
import Experience from './Experience';
import Certificates from './Certificates';
import { Tilt } from 'react-tilt';

const NavButton = ({ title, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? 'bg-[#915EFF]' : 'bg-tertiary/50'
      } py-3 px-8 rounded-lg outline-none w-fit text-white font-medium shadow-md shadow-primary/30 transition-all duration-300 hover:bg-[#915EFF] hover:scale-[1.02] text-[15px]`}
    >
      {title}
    </button>
  );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Tilt className="w-[300px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 0.5)} // Reduced delay multiplier from 0.5 to 0.15 and duration from 0.75 to 0.5
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] p-5 min-h-[360px] flex flex-col"
        >
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-tertiary/50">
                <div className="w-6 h-6 border-3 border-[#915EFF] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={imageError ? 'https://via.placeholder.com/400x300?text=Project+Image' : image}
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

          <div className="mt-4 flex-grow">
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] leading-[1.5]">{description}</p>
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

const Works = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    const section = sections[activeSection];
    if (!section) return null;

    return (
      <motion.div
        key={activeSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{section.subtitle}</p>
          <h2 className={styles.sectionHeadText}>{section.title}.</h2>
        </motion.div>

        {activeSection === 'projects' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 w-full flex flex-col items-center justify-center"
          >
            <div className="w-full flex">
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
              >
                {section.description}
              </motion.p>
            </div>
            {/* Rest of the content */}
          </motion.div>
        )}

        <div className="mt-20">
          {section.content === 'projects' && (
            <div className="flex flex-wrap justify-center gap-7 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
              ))}
            </div>
          )}
          {section.content === 'certificates' && <Certificates />}
          {section.content === 'experience' && <Experience />}
          {section.content === 'tech' && <Tech />}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-12">
        <motion.div 
          className="bg-tertiary/20 backdrop-blur-sm py-4 px-6 rounded-xl w-fit sticky top-4 z-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {Object.values(sections).map((section) => (
              <NavButton
                key={section.id}
                title={section.buttonTitle}
                onClick={() => handleSectionChange(section.id)}
                active={activeSection === section.id}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={activeSection}
        >
          {renderContent()}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");