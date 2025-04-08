import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';
import { certificates } from '../constants';
import { getAssetUrl } from '../utils/assetUtils';
import { Tilt } from 'react-tilt';

const CertificateCard = ({ index, title, issuer, date, image, credential_link }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
            {!imageError ? (
              <img
                src={image}
                alt={title}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                onError={() => setImageError(true)}
                onLoad={() => setIsLoading(false)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-tertiary/50">
                <p className="text-white text-xl font-bold">{title}</p>
              </div>
            )}
            
            <motion.div 
              className="absolute inset-0 flex justify-end m-3"
              whileHover={{ scale: 1.1 }}
            >
              <div
                onClick={() => window.open(credential_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
              >
                <img
                  src={getAssetUrl('link')}
                  alt="credential"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-4 flex-grow flex flex-col">
            <h3 className="text-white font-bold text-[20px]">{title}</h3>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-secondary text-[16px] font-semibold">
                {issuer}
              </p>
              <p className="text-secondary text-[14px]">{date}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certificates = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {certificates.map((certificate, index) => (
        <CertificateCard 
          key={`certificate-${index}`} 
          index={index} 
          {...certificate} 
        />
      ))}
    </div>
  );
};

export default Certificates;