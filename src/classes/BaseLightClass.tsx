import {RGBColor} from "../interfaces/interface";
import { ColorRepresentation } from "three";

class BaseLightClass {
    public color: RGBColor = {r: 0, g: 0, b: 0};
    public intensity: number = 1;
    public name?: string = "Light";
    public helperColor: ColorRepresentation = "red";
    public helperSize: number = 2;

    constructor(color: RGBColor, intensity: number, name?: string) {
        this.name = name;
        this.color = color;
        this.intensity = intensity;
    }
}

export default BaseLightClass