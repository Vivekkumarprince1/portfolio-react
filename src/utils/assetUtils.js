const defaultImages = {
  // Tech icons
  html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  threejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  
  // Company icons
  meta: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Meta_Platforms_Inc._logo.svg',
  tesla: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
  shopify: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
  starbucks: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
  codingbits: '/assets/CODINGBITS.jpeg',
  
  // Project images
  chitchat: '/assets/CHITCHAT.png',
  kccollections: '/assets/KC-COLLECTIONS.png',
  fmpg: '/assets/FMPG.png',
  
  // Background images
  herobg: '/assets/herobg.png',
  
  // Service icons
  web: 'https://cdn-icons-png.flaticon.com/512/2010/2010989.png',
  mobile: 'https://cdn-icons-png.flaticon.com/512/545/545245.png',
  backend: 'https://cdn-icons-png.flaticon.com/512/2166/2166823.png',
  creator: 'https://cdn-icons-png.flaticon.com/512/1997/1997928.png',

  // UI icons
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  linkedin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  instagram: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
};

export const getAssetUrl = (name) => {
  const key = name.toLowerCase();
  const url = defaultImages[key];
  
  if (!url) {
    // Specific fallbacks based on asset type
    if (key.includes('bg')) {
      return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80';
    }
    return 'https://placehold.co/400/404040/FFFFFF?text=Image';
  }
  
  return url;
};
