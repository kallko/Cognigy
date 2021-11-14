import { Car } from "../@type/Car";
import { validateCar } from "../service/Schema/Car";
const carService = require("../service/carSrvice");

export const carController = {
  testFunction(input: number): any {
    return input * 2;
  },
  async createCar(car: Car): Promise<{ id: number }> {
    if (validateCar(car)) {
      return carService.create(car);
    } else {
      throw new Error("Car schema not valid");
    }
  },
};
