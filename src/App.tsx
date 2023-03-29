import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cylinder3d from './component/Cylinder3d'
import * as dat from 'dat.gui'
import './style/App.css'

import ManHairModel from './component/ManHairModel'
import Hair from './component/Hair'
import Lights from './component/Lights'

function App() {

  useEffect(() => {
    const gui: dat.GUI = new dat.GUI();

    const debugObject = {
      position: {
        x: 0,
        y: 0,
        z: 0
      }
    };

    gui.add(debugObject.position, "x");

    return () => {
      gui.destroy();
    }
  }, []);

  return (
    <>
      <section>
        <Canvas
          /* camera={{ position: [2, 0, 12.25], fov: 15 }} */
          style={{
            backgroundColor: '#111a21'
          }}
        >
          <Lights position={[10, 10, 10]}/>
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          {/* <ambientLight/> */}

          <axesHelper args={[10]}/>
          <gridHelper args={[40]}/>

          <OrbitControls />

          {/* <Cylinder3d position={[2, 0, 0]} wireframe={false}/>
          <Cylinder3d position={[-2, 0, 0]} wireframe={true}/> */}

          <Suspense fallback={null}>
            <ManHairModel />
           {/*  <Hair /> */}
          </Suspense>
        </Canvas>
      </section>
    </>
  )
}

export default App
