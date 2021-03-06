import { Car } from "../@type/Car";
import { validateCar } from "../service/Schema/Car";
import { wrongCarSchema } from "../error/carApiError";
import { carService } from "../service/carSrvice";

export const carController = {
  async createCar(car: Car): Promise<Car> {
    if (validateCar(car, true)) {
      return carService.create(car);
    } else {
      throw wrongCarSchema;
    }
  },
  async replaceCar(car: Car, id: number): Promise<Car> {
    if (validateCar(car, true)) {
      return carService.replace(car, id);
    } else {
      throw wrongCarSchema;
    }
  },
  async updateCar(car: Car, id: number): Promise<Car> {
    if (validateCar(car, false)) {
      return carService.update(car, id);
    } else {
      throw wrongCarSchema;
    }
  },
};
