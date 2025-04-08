import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary">
      <div className="canvas-loader"></div>
    </div>
  );
};

export default CanvasLoader;