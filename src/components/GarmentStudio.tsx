import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  ContactShadows,
  OrbitControls,
  Decal,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

interface GarmentStudioProps {
  designUrl: string;
  color?: string;
  className?: string;
}

const COLOR_PRESETS = [
  { label: "Black", hex: "#0a0a0a" },
  { label: "Navy", hex: "#0f1c2e" },
  { label: "Ivory", hex: "#f3efe6" },
  { label: "Heather", hex: "#4a4843" },
];

function Shirt({ designUrl, color }: { designUrl: string; color: string }) {
  // Load the real 3D GLTF shirt model
  const { nodes, materials } = useGLTF("/models/shirt_baked.glb") as any;

  const designTexture = useTexture(designUrl);
  designTexture.anisotropy = 16;
  designTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      dispose={null}
    >
      {/* Base fabric color */}
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0}
      />

      {/* Centered Chest Decal Artwork */}
      <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.18}
        map={designTexture}
        depthTest={true}
      />
    </mesh>
  );
}

useGLTF.preload("/models/shirt_baked.glb");

export default function GarmentStudio({
  designUrl,
  color = "#0a0a0a",
  className,
}: GarmentStudioProps) {
  const [activeColor, setActiveColor] = useState(color);

  return (
    <div className={`garment-studio-container ${className ?? ""}`}>
      <div className="studio-canvas-box">
        <Canvas
          shadows
          camera={{ position: [0, 0, 2.4], fov: 28 }}
          gl={{ antialias: true, preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[5, 8, 5]}
              intensity={1.1}
              castShadow
              shadow-mapSize={[1024, 1024]}
            />
            
            <Environment preset="studio" />

            <Center>
              <Shirt designUrl={designUrl} color={activeColor} />
            </Center>

            <ContactShadows
              position={[0, -0.9, 0]}
              opacity={0.45}
              scale={8}
              blur={2.2}
              far={3}
            />

            <OrbitControls
              enableZoom={true}
              minDistance={1.8}
              maxDistance={3.5}
              minPolarAngle={Math.PI / 2.4}
              maxPolarAngle={Math.PI / 1.7}
              enablePan={false}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>

        <div className="studio-badge">
          <span>Interactive 3D Garment Studio</span>
        </div>
      </div>

      <div className="studio-toolbar">
        <div className="color-picker-group">
          <span className="picker-label">Fabric Color:</span>
          <div className="picker-swatches">
            {COLOR_PRESETS.map((preset) => (
              <button
                key={preset.hex}
                type="button"
                className={`swatch ${activeColor === preset.hex ? "active" : ""}`}
                style={{ backgroundColor: preset.hex }}
                onClick={() => setActiveColor(preset.hex)}
                aria-label={`Select ${preset.label} fabric color`}
                title={preset.label}
              />
            ))}
          </div>
        </div>
        <p className="studio-hint meta">Drag to rotate 360° · Scroll to zoom</p>
      </div>

      <style>{`
        .garment-studio-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: #f8f5f0;
          border: 1px solid var(--line, #ddd8cd);
          border-radius: var(--radius-lg, 12px);
          padding: 1rem;
          box-shadow: var(--shadow-card, 0 2px 8px rgba(0,0,0,0.04));
        }
        .studio-canvas-box {
          position: relative;
          width: 100%;
          height: 540px;
          background: radial-gradient(circle at center, #ffffff 0%, #f3efe6 100%);
          border-radius: var(--radius, 8px);
          overflow: hidden;
        }
        .studio-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(20, 20, 22, 0.82);
          color: #ffffff;
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-pill, 999px);
          pointer-events: none;
        }
        .studio-toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem 1rem;
        }
        .color-picker-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .picker-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.8rem;
          color: var(--muted, #6b6860);
          text-transform: uppercase;
        }
        .picker-swatches {
          display: flex;
          gap: 0.4rem;
        }
        .swatch {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #ddd8cd;
          cursor: pointer;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .swatch:hover {
          transform: scale(1.15);
        }
        .swatch.active {
          border-color: #141416;
          transform: scale(1.2);
          box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #141416;
        }
        .studio-hint {
          font-size: 0.8rem;
          color: var(--muted, #6b6860);
        }
      `}</style>
    </div>
  );
}
