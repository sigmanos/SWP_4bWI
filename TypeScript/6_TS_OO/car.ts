export class Car {
    public color: string = "red";
    public model: string = "13";

    constructor(private brand?: string, model?: string, color?: string) {
        if (model !== undefined) {
            this.model = model;
        }

        if (color !== undefined) {
            this.color = color;
        }
    }

    public getModel(): string {
        return this.model;
    }

    getColor(): string {
        return this.color;
    }

    getMake(): string | undefined {
        return this.brand;
    }

    getHorsePower(): number {
        return 150; // Default horsepower
    }
}