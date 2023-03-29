import React, { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "@react-three/fiber";

interface CylinderProps {
    position: number[],
    wireframe: boolean
}

function Cylinder3d(props: CylinderProps) {
    const ref = useRef<THREE.CylinderBufferGeometryProps>(null!);

    const [hovered, hover] = useState<boolean>(false);
    const [clicked, click] = useState<boolean>(false);

    useFrame((state, delta) => (ref.current.rotation.x += 0.01));

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
            position={[props.position[0], props.position[1], props.position[2]]}
        >
            <cylinderGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial 
                wireframe={props.wireframe}
                color={hovered ? "hotpink" : "orange"}
            />
        </mesh>
    );
}

export default Cylinder3d;