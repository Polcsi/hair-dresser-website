import { useHelper } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { ColorRepresentation, Object3D, PointLight, PointLightHelper, PointLightShadow } from "three";
import * as dat from "dat.gui"
import PointLightClass from "../classes/PointLightClass";

function Lights(props: PointLightClass) {
    const {helperSize, helperColor, name} = props;
    const light = useRef<PointLight>(null!);

    useHelper(light, PointLightHelper, helperSize, helperColor);

    useEffect(() => {
        const gui: dat.GUI = new dat.GUI();
        const lightFolder: dat.GUI = gui.addFolder(`${name ? name : `Light ${helperColor}`}`);

        const debugObject = {
            position: {
                x: props.position.x,
                y: props.position.y,
                z: props.position.z
            },
            intensity: {
                intensity: props.intensity
            },
            power: {
                power: props.power
            },
            distance: {
                distance: props.distance
            },
            decay: {
                decay: props.decay 
            },
            castShadow: {
                castShadow: props.castShadow ? props.castShadow : false
            },
            color: {
                color: [props.color.r, props.color.g, props.color.b]
            }
        };

        lightFolder.add(debugObject.position, "x")
        .min(-20)
        .max(20)
        .step(0.5)
        .onFinishChange(() => {
            light.current.position.x = debugObject.position.x;
        })
        .name("X:");

        lightFolder.add(debugObject.position, "y")
        .min(-20)
        .max(20)
        .step(0.5)
        .onFinishChange(() => {
            light.current.position.y = debugObject.position.y;
        })
        .name("Y:");

        lightFolder.add(debugObject.position, "z")
        .min(-20)
        .max(20)
        .step(0.5)
        .onFinishChange(() => {
            light.current.position.z = debugObject.position.z;
        })
        .name("Z:");

        lightFolder.add(debugObject.intensity, "intensity")
        .min(-100)
        .max(100)
        .step(1)
        .onFinishChange(() => {
            light.current.intensity = debugObject.intensity.intensity;
        })
        .name("Intensity:");
        

        lightFolder.add(debugObject.power, "power")
        .min(-1000)
        .max(1000)
        .step(1)
        .onFinishChange(() => {
            light.current.power = debugObject.power.power;
        })
        .name("Power:");

        lightFolder.add(debugObject.distance, "distance")
        .min(-10.0)
        .max(10.0)
        .step(0.5)
        .onFinishChange(() => {
            light.current.distance = debugObject.distance.distance;
        })
        .name("Distance:");

        lightFolder.add(debugObject.decay, "decay")
        .min(-10)
        .max(10)
        .step(1)
        .onFinishChange(() => {
            light.current.decay = debugObject.decay.decay;
        })
        .name("Decay:");

        lightFolder.add(debugObject.castShadow, "castShadow")
        .onFinishChange(() => {
            light.current.castShadow = debugObject.castShadow.castShadow;
        })
        .name("CastShadow:");

        lightFolder.addColor(debugObject.color, "color")
        .onChange((value) => {
            light.current.color.r = value[0]/255;
            light.current.color.g = value[1]/255;
            light.current.color.b = value[2]/255;
        });

        return () => {
            gui.destroy();
        }
    })
    return (
        <group>
            <pointLight
                ref={light}
                color={[props.color.r, props.color.g, props.color.b]}
                intensity={props.intensity}
                power={props.power}
                distance={props.distance}
                castShadow={props.castShadow}
                decay={props.decay}
                position={[props.position.x, props.position.y, props.position.z]}
            />
        </group>
    )
}

export default Lights