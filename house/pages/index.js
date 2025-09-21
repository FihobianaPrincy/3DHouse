import { House } from "@/Components/House";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function index() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Environment preset="sunset" />
        <OrbitControls />
        <House />
      </Canvas>
    </div>
  );
};