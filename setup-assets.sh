#!/bin/bash

echo "Creating asset directories..."
mkdir -p public/{icons,tech,company,projects}

echo "Downloading icons..."
cd public/icons || exit
wget -O backend.png https://cdn-icons-png.flaticon.com/128/8559/8559915.png
wget -O creator.png https://cdn-icons-png.flaticon.com/128/3940/3940056.png
wget -O mobile.png https://cdn-icons-png.flaticon.com/128/545/545245.png
wget -O web.png https://cdn-icons-png.flaticon.com/128/1087/1087927.png
wget -O github.svg https://cdn-icons-png.flaticon.com/128/2111/2111432.png
wget -O menu.svg https://cdn-icons-png.flaticon.com/128/7216/7216128.png
wget -O close.svg https://cdn-icons-png.flaticon.com/128/2976/2976286.png
wget -O logo.svg https://cdn-icons-png.flaticon.com/128/2721/2721617.png

echo "Downloading tech stack icons..."
cd ../tech || exit
wget -O html.png https://cdn-icons-png.flaticon.com/128/1051/1051277.png
wget -O css.png https://cdn-icons-png.flaticon.com/128/732/732190.png
wget -O javascript.png https://cdn-icons-png.flaticon.com/128/5968/5968292.png
wget -O typescript.png https://cdn-icons-png.flaticon.com/128/5968/5968381.png
wget -O reactjs.png https://cdn-icons-png.flaticon.com/128/1126/1126012.png
wget -O redux.png https://cdn-icons-png.flaticon.com/128/520/520890.png
wget -O nodejs.png https://cdn-icons-png.flaticon.com/128/5968/5968322.png
wget -O mongodb.png https://cdn-icons-png.flaticon.com/128/2906/2906274.png
wget -O tailwind.png https://cdn-icons-png.flaticon.com/128/5968/5968381.png
wget -O threejs.svg https://cdn-icons-png.flaticon.com/128/1126/1126012.png
wget -O git.png https://cdn-icons-png.flaticon.com/128/4494/4494748.png
wget -O figma.png https://cdn-icons-png.flaticon.com/128/5968/5968705.png
wget -O docker.png https://cdn-icons-png.flaticon.com/128/5969/5969059.png

echo "Downloading company logos..."
cd ../company || exit
wget -O meta.png https://cdn-icons-png.flaticon.com/128/5968/5968764.png
wget -O tesla.png https://cdn-icons-png.flaticon.com/128/5968/5968747.png
wget -O shopify.png https://cdn-icons-png.flaticon.com/128/825/825500.png
wget -O starbucks.png https://cdn-icons-png.flaticon.com/128/5977/5977591.png

echo "Downloading project images..."
cd ../projects || exit
wget -O carrent.jpg https://source.unsplash.com/800x600/?car-rental
wget -O jobit.jpg https://source.unsplash.com/800x600/?office-work
wget -O tripguide.jpg https://source.unsplash.com/800x600/?travel-guide

echo "Asset setup complete!"
