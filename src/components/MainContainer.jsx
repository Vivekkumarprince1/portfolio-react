import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../context/LoadingProvider";
import Loading, { setProgress } from "./Loading";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
  const { isLoading, setIsLoading, loading, setLoading } = useLoading();

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    // Simulate progress load
    const progress = setProgress((value) => setLoading(value));
    progress.loaded();

    return () => {
      window.removeEventListener("resize", resizeHandler);
      progress.clear();
    };
  }, [setLoading]);

  useEffect(() => {
    if (isLoading) return;

    // Initialize Lenis smooth scrolling only AFTER preloader is completed
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loading percent={loading} />}
      <div className="container-main">
        <Cursor />
        <Navbar />
        <SocialIcons />
        <main>
          <Landing />
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <TechStackNew />
          <CallToAction />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default MainContainer;
