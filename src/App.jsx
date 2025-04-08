import { BrowserRouter } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  Works,
  Contact,
  StarsCanvas
} from './components';
import Welcome from './components/Welcome';
import CanvasLoader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome page for 2 seconds
    const welcomeTimer = setTimeout(() => setShowWelcome(false), 2000);
    // Start loading main content after welcome page
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000);
    
    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (showWelcome) {
    return <Welcome />;
  }

  if (isLoading) {
    return <CanvasLoader />;
  }

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
