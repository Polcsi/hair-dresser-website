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

  return (
    <>
      <section>
        <Canvas
          /* camera={{ position: [2, 0, 12.25], fov: 15 }} */
          style={{
            backgroundColor: 'black'
          }}
        >
          {/* <Lights
            helperColor='cyan'
            helperSize={2}
            color={{r: 255, g: 255, b: 255}}
            position={{x: 10, y: 10, z: -1.5}}
            intensity={1}
            power={1000}
            distance={0.0}
            decay={2}
            castShadow={true}
          />
          <Lights
            name='Light 2'
            helperColor='red'
            helperSize={2}
            color={{r: 255, g: 255, b: 255}}
            position={{x: -10, y: 10, z: 10}}
            intensity={1}
            power={1000}
            distance={0.0}
            decay={2}
            castShadow={true}
          /> */}
         {/*  <ambientLight intensity={1.25} /> */}
          <directionalLight intensity={0.4} />

          <axesHelper args={[10]}/>
          <gridHelper args={[40]}/>

          <OrbitControls />

          <Cylinder3d position={[2, 10, 0]} wireframe={false}/>
          <Cylinder3d position={[-2, 10, 0]} wireframe={true}/>

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
