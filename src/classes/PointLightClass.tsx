import BaseLightClass from "./BaseLightClass";
import {RGBColor, PositionProp} from "../interfaces/interface";

class PointLightClass extends  BaseLightClass {
    public power: number = 1000;
    public position: PositionProp = {x: 0, y: 0, z: 0}
    public distance: number = 0.0;
    public decay: number = 2;
    public castShadow: boolean = false;

    constructor(color: RGBColor, intensity: number, name?: string) {
        super(color, intensity, name);
    }
}

export default PointLightClass