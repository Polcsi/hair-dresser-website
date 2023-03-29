import React, {useRef} from "react";
import { useGLTF } from "@react-three/drei";

function Hair(props: any) {
    const group = useRef(null);
    const {nodes, materials} = useGLTF('/hairmodel.glb');

    return (
        <group ref={group} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh001.geometry}
                position={[0, 0, 10]}
            ></mesh>
        </group>
    )
}
useGLTF.preload("/hairmodel.glb");

export default Hair