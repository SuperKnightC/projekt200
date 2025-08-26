// src/App.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Su27 from "./components/Su27";
import Hotspot from "./components/Hotspot";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Ambient light and environment */}
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />

        {/* Controls */}
        <OrbitControls enablePan={true} enableZoom={true} />

        {/* SU-27 model */}
        <Su27 />

        {/* Example hotspots */}
        <Hotspot
          position={[0, 1.5, 3]}
          title="Radar"
          preview="N001 Mech Radar"
          onClick={() => alert("Radar clicked")}
          debug
        />
        <Hotspot
          position={[0, 0.2, -4]}
          title="Engine"
          preview="Saturn AL-31F"
          onClick={() => alert("Engine clicked")}
          debug
        />
      </Canvas>
    </div>
  );
}
