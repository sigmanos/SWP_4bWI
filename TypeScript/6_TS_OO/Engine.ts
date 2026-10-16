export class Engine {
    constructor(private brand?: string, private model?: string, private color?: string) {}

    getHorsepower(): number {
        // Example implementation, you can modify this as needed
        return 150; // Default horsepower
    }

    getBrand(): string | undefined {
        return this.brand;
    }   

}