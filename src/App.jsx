import { Canvas } from "@react-three/fiber";
import React from 'react';
import "./styles.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
const App = () => {
  return (
    
    <div className = "w-full h-screen font-Open Sans">
      <div className= "navbar line flex gap-5 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
      {["iphone", "iPad","services", "ios", "mac", "products", "iphone", "iPad","services", "ios", "mac", "products"  ].map((e) =>(
        <a href="" className="text-white font-[500] text-sm capitalize"> {e} </a>
      ))}
      </div>
      <div className= "absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 ">
      <h3 className= " masked text-7xl tracking-tighter font-[700]" > macbook pro</h3>
      <p className = "text-center w-3/4">MacBook Pro blasts forward with the M3, M3 Pro and M3 Max chips, and is built for Apple Intelligence, coming in beta in U.S. English later this year.3 Featuring 3‑nanometre technology and an all‑new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability.!</p>
      </div>
    <Canvas camera={{ fov: 12, position: [0, -10, 220]}}>
      <Environment
      files = {[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
      ]}
      />
      <ScrollControls pages={3}>
      <MacContainer />
      </ScrollControls>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
    </div>
    
  ); 
};

export default App


