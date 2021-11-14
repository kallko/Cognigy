import { Car } from "../@type";

export const carService = {
  test(car: Car): void {
    console.log("Success", car);
  },
};
