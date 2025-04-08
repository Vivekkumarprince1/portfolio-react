#!/bin/bash

# Create the base directories
mkdir -p public/{icons,tech,company,projects}

# Download tech stack icons
cd public/tech
wget -O html.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg
wget -O css.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg
wget -O javascript.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg
wget -O typescript.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg
wget -O reactjs.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg
wget -O redux.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg
wget -O nodejs.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg
wget -O mongodb.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg
wget -O tailwind.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg
wget -O threejs.svg https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg
wget -O git.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg
wget -O figma.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg
wget -O docker.png https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg

# Download placeholder company logos
cd ../company
wget -O meta.png https://logo.clearbit.com/meta.com
wget -O tesla.png https://logo.clearbit.com/tesla.com
wget -O shopify.png https://logo.clearbit.com/shopify.com
wget -O starbucks.png https://logo.clearbit.com/starbucks.com

# Download icons
cd ../icons
wget -O logo.svg https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png
wget -O backend.png https://cdn-icons-png.flaticon.com/512/1162/1162192.png
wget -O creator.png https://cdn-icons-png.flaticon.com/512/1162/1162207.png
wget -O mobile.png https://cdn-icons-png.flaticon.com/512/1162/1162195.png
wget -O web.png https://cdn-icons-png.flaticon.com/512/1162/1162199.png
wget -O github.svg https://cdn-icons-png.flaticon.com/512/733/733553.png
wget -O menu.svg https://cdn-icons-png.flaticon.com/512/7216/7216128.png
wget -O close.svg https://cdn-icons-png.flaticon.com/512/1828/1828774.png

# Download project images
cd ../projects
wget -O carrent.jpg https://source.unsplash.com/800x600/?car
wget -O jobit.jpg https://source.unsplash.com/800x600/?office
wget -O tripguide.jpg https://source.unsplash.com/800x600/?travel

echo "Asset setup complete!"
