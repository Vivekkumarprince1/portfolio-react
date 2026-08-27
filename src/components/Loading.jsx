import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }
  }, [percent]);

  const handleEnterClick = () => {
    if (!loaded || clicked) return;
    setClicked(true);

    // Trigger massive fluid splash "eject"
    if (window.fluidAnimationRef) {
      window.fluidAnimationRef.addRandomSplats(40);
    }

    setTimeout(() => {
      import("./utils/initialFX").then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
        setIsLoading(false);
      });
    }, 900);
  };

  function handleMouseMove(e) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          VIVEK KUMAR
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee speed={60}>
            <span>&nbsp; Full Stack Developer &nbsp;</span> <span>&nbsp; Software Engineer &nbsp;</span>
            <span>&nbsp; React Developer &nbsp;</span> <span>&nbsp; Node.js Developer &nbsp;</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
          onClick={handleEnterClick}
          style={{ cursor: loaded ? "pointer" : "default" }}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Enter Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading) => {
  let startTime = Date.now();
  let duration = 600; // 0.6 seconds total loading time

  let interval = setInterval(() => {
    let elapsed = Date.now() - startTime;
    let percent = Math.min(100, Math.floor((elapsed / duration) * 100));
    setLoading(percent);
    if (percent >= 100) {
      clearInterval(interval);
    }
  }, 16);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    clearInterval(interval);
    let startAccelerate = Date.now();
    return new Promise((resolve) => {
      interval = setInterval(() => {
        let elapsed = Date.now() - startAccelerate;
        let percent = Math.min(100, Math.floor((elapsed / 150) * 100));
        setLoading(percent);
        if (percent >= 100) {
          clearInterval(interval);
          resolve(100);
        }
      }, 16);
    });
  }

  return { loaded, percent: 0, clear };
};
