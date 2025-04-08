# 3D Portfolio Website

A modern portfolio website built with React, Three.js, and Tailwind CSS. Features a beautiful 3D interface and smooth animations.

## Features

- 🎨 Modern and responsive design
- 🌟 3D graphics and animations
- 📱 Mobile-friendly interface
- 🎯 Smooth scrolling
- 📧 Contact form with EmailJS integration
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Vite

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

1. Update the content in `src/constants/index.js` with your information
2. Replace images in the `public` directory
3. Update the 3D models in the `public/desktop_pc` directory
4. Customize the color scheme in `tailwind.config.js`

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Update the following in `src/components/Contact.jsx`:
   - service_id
   - template_id
   - public_key

## Technologies Used

- React
- Three.js
- React Three Fiber
- Tailwind CSS
- Framer Motion
- EmailJS
- Vite

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- 3D models from [Sketchfab](https://sketchfab.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from various portfolio websites
