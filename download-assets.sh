#!/bin/bash

# Create necessary directories
mkdir -p public/{icons,tech,company,projects}

# Download tech stack icons
cd public/tech
for icon in html css javascript typescript reactjs nodejs mongodb threejs tailwind redux docker git figma; do
  curl -o "${icon}.png" "https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon}/${icon}-original.svg"
done

# Download company logos using more reliable sources
cd ../company
curl -o meta.png "https://upload.wikimedia.org/wikipedia/commons/a/a7/Meta_Platforms_Inc._logo.svg"
curl -o tesla.png "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
curl -o shopify.png "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
curl -o starbucks.png "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png"

# Download project images from Unsplash with specific queries
cd ../projects
curl -o carrent.jpg "https://source.unsplash.com/1600x900/?car-rental"
curl -o jobit.jpg "https://source.unsplash.com/1600x900/?job-office"
curl -o tripguide.jpg "https://source.unsplash.com/1600x900/?travel"

# Download UI icons
cd ../icons
curl -o logo.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
curl -o github.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg"
curl -o menu.svg "https://raw.githubusercontent.com/primer/octicons/main/icons/three-bars-16.svg"
curl -o close.svg "https://raw.githubusercontent.com/primer/octicons/main/icons/x-16.svg"
curl -o backend.png "https://cdn-icons-png.flaticon.com/512/2166/2166823.png"
curl -o creator.png "https://cdn-icons-png.flaticon.com/512/1997/1997928.png"
curl -o mobile.png "https://cdn-icons-png.flaticon.com/512/545/545245.png"
curl -o web.png "https://cdn-icons-png.flaticon.com/512/2010/2010989.png"

echo "Asset download complete!"
