class BaseLightClass {
    public color: string;
    public intensity: number;
    public name: string;

    constructor(name: string, color: string, intensity: number) {
        this.name = name;
        this.color = color;
        this.intensity = intensity;
    }
}

export default BaseLightClass