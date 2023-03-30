import React, {useRef} from "react";
import { useGLTF} from "@react-three/drei";
import { useFrame} from "@react-three/fiber"
import * as THREE from 'three';

function ManHairModel(props: any) {
    const group = useRef();
    const {nodes, materials } = useGLTF('/hairmodel.gltf');

    //useFrame((state, delta) => (group.current.rotation.y += 0.01));

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow={true}
                receiveShadow={false}
                geometry={nodes.Cube001.geometry}
                rotation={new THREE.Euler(0, 0, -0.15, 'XYZ')}
                position={[0.8, 0, 0]}
            >
                <meshStandardMaterial/>
            </mesh>
        </group>
    )
}
useGLTF.preload("/hairmodel.gltf")

export default ManHairModel