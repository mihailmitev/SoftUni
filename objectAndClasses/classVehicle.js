class Vehicle {
    constructor(type, model, parts) {
        this.type = type
        this.model = model
        this.parts = {
            engine,
            power,
            quality
        }
        this.fuel = fuel
        this.drive = drive()
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
