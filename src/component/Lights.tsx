import { useHelper } from "@react-three/drei";
import {useRef } from "react";
import { PointLight, PointLightHelper } from "three";

interface LightProps  {
    position: number[],
    intensity?: number
}

function Lights(props: LightProps) {
    /* Make it generic */
    const light = useRef<PointLight>(null!);
    useHelper(light, PointLightHelper, 2, 'cyan');

    return (
        <group>
            <pointLight
                ref={light}
                intensity={props.intensity}
                position={[props.position[0], props.position[1], props.position[2]]}
            />
        </group>
    )
}

export default Lights