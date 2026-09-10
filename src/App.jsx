import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingProvider";
import MainContainer from "./components/MainContainer";
import "./App.css";
import { Agentation } from "agentation";

const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));

const PageFallback = ({ label = "Loading..." }) => (
  <div className="h-screen w-screen bg-[#0b080c] flex flex-col items-center justify-center gap-4 text-white z-50">
    <div className="w-10 h-10 border-2 border-[#c2a4ff]/20 border-t-[#c2a4ff] rounded-full animate-spin"></div>
    <span className="text-xs tracking-[0.25em] text-[#c2a4ff]/80 uppercase font-mono">{label}</span>
  </div>
);

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <MainContainer />
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<PageFallback label="Loading Works..." />}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<PageFallback label="Loading Chess..." />}>
              <Play />
            </Suspense>
          }
        />
      </Routes>
      {import.meta.env.DEV && <Agentation />}
    </BrowserRouter>
  );
};

export default App;
