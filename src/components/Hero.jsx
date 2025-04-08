import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig, skills, socialLinks } from '../constants';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-[#050816] overflow-hidden">
    
      {/* Main content */}
      <div className="absolute inset-0 top-[120px] mx-auto flex flex-row items-start px-10 max-w-7xl">
        <div className="flex flex-col justify-center items-center mt-5 mr-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent" />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="max-w-lg">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-white text-5xl md:text-6xl font-bold"
              >
                {siteConfig.role.title}
                <br />
                <span className="text-[#915eff]">{siteConfig.role.subtitle}</span>
              </motion.h1>

              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-xl mt-3"
              >
                {siteConfig.description}
              </motion.p>

              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 text-gray-300 text-[17px] max-w-2xl leading-[30px]"
              >
                {siteConfig.longDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-md"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="py-2 px-4 rounded-full bg-[#1d1836] text-center border border-[#915eff]/30"
                  >
                    <span className="text-gray-200">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="mt-8 flex gap-4"
              >
                <button 
                  onClick={() => {
                    document.getElementById('work')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="px-6 py-3 rounded-full bg-[#915eff] text-white flex items-center gap-2 hover:bg-[#915eff]/80 transition-colors"
                >
                  <span>Projects</span>
                  <span className="text-lg">☑</span>
                </button>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="px-6 py-3 rounded-full border border-[#915eff] text-[#915eff] hover:bg-[#915eff]/10 transition-colors inline-flex items-center gap-2"
                >
                  Contact <span>✉</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="mt-12 flex gap-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    className="w-10 h-10 rounded-lg bg-[#1d1836] flex items-center justify-center cursor-pointer hover:bg-[#915eff]/20 transition-colors"
                  >
                    <span className="text-white text-xl">
                      <img 
                        src={social.icon} 
                        alt={`${social.name} icon`}
                        className={`w-6 h-6 ${social.name === 'github' ? 'filter invert' : ''}`}
                      />
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right side illustration */}
            <div className="hidden md:flex items-center justify-center w-auto max-w-xl">
              <motion.div 
                className="relative"
                animate={{ y: [0, -12, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915eff]/20 to-purple-500/20 blur-3xl" />
                <div className="absolute -inset-1 rounded-full border border-[#915eff]/30 animate-spin-slow" />
                <div className="absolute -inset-2 rounded-full border border-[#915eff]/20 animate-spin-slow-reverse" />
                
                {/* Main image container */}
                <motion.div
                  className="relative w-[350px] h-[350px] bg-gradient-to-br from-[#915eff]/10 to-tertiary/30 rounded-full backdrop-blur-sm p-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Image wrapper */}
                  <motion.div
                    className="relative w-full h-full overflow-hidden rounded-full border-2 border-[#915eff]/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src="/hero.png"
                      alt="Hero Illustration"
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#915eff]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-tertiary/20 to-transparent" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915eff]/30 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915eff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;