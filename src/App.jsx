import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingProvider";
import "./App.css";
import { Agentation } from "agentation";

const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="h-screen w-screen bg-[#0b080c] flex items-center justify-center text-white text-xl">Loading...</div>}>
              <LoadingProvider>
                <MainContainer />
              </LoadingProvider>
            </Suspense>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div className="h-screen w-screen bg-[#0b080c] flex items-center justify-center text-white text-xl">Loading Works...</div>}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div className="h-screen w-screen bg-[#0b080c] flex items-center justify-center text-white text-xl">Loading Chessboard...</div>}>
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
