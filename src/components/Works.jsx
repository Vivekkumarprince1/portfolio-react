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
import ProjectCard from './ProjectCard';

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


const Works = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
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
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="w-full flex">
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className=" text-secondary text-[17px] max-w-3xl leading-[30px]"
              >
                {section.description}
              </motion.p>
            </div>
          </motion.div>
        )}

        <div className="mt-20">
          {section.content === 'projects' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {projects.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
              ))}
            </div>
          )}
          {section.content === 'certificates' && <Certificates />}
          {section.content === 'experience' && <Experience />}
          {section.content === 'tech' && <Tech />}
        </div>

        {activeSection === 'projects' && visibleProjects < projects.length && (
          <div className="w-full flex justify-center mt-8">
            <button
              onClick={showMoreProjects}
              className="px-8 py-3 bg-[#915EFF] rounded-xl text-white font-bold shadow-lg hover:shadow-[#915EFF]/50 transition-all"
            >
              See More Projects
            </button>
          </div>
        )}
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