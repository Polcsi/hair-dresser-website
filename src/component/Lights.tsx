import { useHelper } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { ColorRepresentation, PointLight, PointLightHelper, PointLightShadow } from "three";
import * as dat from "dat.gui"

interface LightProps  {
    name?: string,
    color: RGBColor,
    intensity?: number,
    power?: number,
    position: PositionProp,
    distance?: number,
    decay? : number,
    shadow?: PointLightShadow,
    castShadow?: boolean,
    helperColor: ColorRepresentation,
    helperSize: number,
}

interface RGBColor {
    r: number,
    g: number,
    b: number
}

interface PositionProp {
    x: number,
    y: number,
    z: number
}

function Lights(props: LightProps) {
    /* Make it generic */
    const light = useRef<PointLight>(null!);
    useHelper(light, PointLightHelper, props.helperSize, props.helperColor);

    useEffect(() => {
        const gui: dat.GUI = new dat.GUI();
        const lightFolder: dat.GUI = gui.addFolder(`${props.name ? props.name : `Light ${props.helperColor}`}`);

        const debugObject = {
            position: {
                x: props.position.x,
                y: props.position.y,
                z: props.position.z
            },
            intensity: {
                intensity: props.intensity ? props.intensity : 1
            },
            power: {
                power: props.power ? props.power : 1000
            },
            distance: {
                distance: props.distance ? props.distance : 0.0
            },
            decay: {
                decay: props.decay ? props.decay : 2
            },
            shadow: {
                shadow: props.shadow
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
                shadow={props.shadow}
                castShadow={props.castShadow}
                decay={props.decay}
                position={[props.position.x, props.position.y, props.position.z]}
            />
        </group>
    )
}

export default Lights