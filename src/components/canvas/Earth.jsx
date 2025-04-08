import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime * 0.15;
    cloudsRef.current.rotation.y = elapsedTime * 0.2;
  });

  return (
    <group ref={earthRef}>
      {/* Earth core */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[2, 128, 128]} />
        <meshPhongMaterial
          color="#2073AF"
          emissive="#112244"
          emissiveIntensity={0.1}
          specular="#127ACB"
          shininess={15}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshPhongMaterial
          color="#3984C8"
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.05, 64, 64]} />
        <meshPhongMaterial
          color="#FFFFFF"
          transparent={true}
          opacity={0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[2.3, 64, 64]} />
        <meshPhongMaterial
          color="#3984C8"
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [-4, 3, 6]
      }}
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent'
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Stars
          radius={300}
          depth={60}
          count={1000}
          factor={7}
          saturation={0}
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <ambientLight intensity={0.1} />
        <directionalLight
          position={[5, 3, 5]}
          intensity={1.5}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;