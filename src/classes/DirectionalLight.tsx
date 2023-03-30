import { Object3D } from "three";
import { RGBColor, PositionProp } from "../interfaces/interface";
import BaseLightClass from "./BaseLightClass";

class DirectionalLightClass extends BaseLightClass{
    public castShadow: boolean = false;
    public position: PositionProp = {x: 0, y: 0, z: 0};
    public target: Object3D;

    constructor(color: RGBColor, intensity: number, target: Object3D, name?: string) {
        super(color, intensity, name);
        this.target = target;
    }
}

export default DirectionalLightClass;