import BaseLightClass from "./BaseLightClass";

class SpotLightClass extends  BaseLightClass {
    
    constructor(name: string, color: string, intensity: number) {
        super(name, color, intensity);
    }
}

export default SpotLightClass