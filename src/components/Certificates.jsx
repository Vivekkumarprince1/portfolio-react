import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';

// You'll need to add this to your constants file
const certificates = [
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "June 2023",
    image: "/react.png",
    credential_link: "https://example.com/credential1",
  },
  {
    title: "JavaScript Advanced",
    issuer: "Coursera",
    date: "March 2023",
    image: "/javascript.png",
    credential_link: "https://example.com/credential2",
  },
  {
    title: "Full Stack Development",
    issuer: "Udemy",
    date: "January 2023",
    image: "/nodejs.png",
    credential_link: "https://example.com/credential3",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "November 2022",
    image: "/tailwind.png",
    credential_link: "https://example.com/credential4",
  },
];

const CertificateCard = ({ index, title, issuer, date, image, credential_link }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-tertiary h-96 p-5 rounded-2xl sm:w-[360px] w-full shadow-card hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="relative w-full h-[200px] bg-tertiary rounded-2xl overflow-hidden">
          {!imageError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-2xl">
              <p className="text-white text-xl font-bold">{title}</p>
            </div>
          )}
          
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(credential_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/link.png"
                alt="credential"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-secondary text-[16px] font-semibold">
              {issuer}
            </p>
            <p className="text-secondary text-[14px]">{date}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7">
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