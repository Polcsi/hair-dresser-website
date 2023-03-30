import BaseLightClass from "./BaseLightClass";

class PointLightClass extends  BaseLightClass {
    

    constructor(name: string, color: string, intensity: number) {
        super(name, color, intensity);
    }
}

export default PointLightClass