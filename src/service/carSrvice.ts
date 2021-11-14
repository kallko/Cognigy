import { Car } from "../@type/Car";
import { carWithIdNotExist } from "../Error/carApiError";
import { CarSchema } from "./Schema/Car";

const mongoose = require("mongoose");
const CarModel = mongoose.model("Car", CarSchema);
const protection = {
  _id: 0,
  id: 1,
  name: 1,
  brand: 1,
  engineHPPower: 1,
  producedAt: 1,
};

// todo checkId in middlewear
export const carService = {
  create: function (car: Car): Promise<Car> {
    return new CarModel(car).save();
  },
  replace: async function (newCar: Car, id: number) {
    const car = CarModel.findOne({ id });
    if (!car) {
      throw carWithIdNotExist;
    }
    return car.replaceOne(newCar);
  },
  update: async function (newCar: Car, id: number) {
    const car = CarModel.findOne({ id });
    if (!car) {
      throw carWithIdNotExist;
    }
    return car.updateOne(newCar);
  },
  delete: async function (id: number) {
    const car = CarModel.findOne({ id });
    if (!car) {
      throw carWithIdNotExist;
    }
    return car.deleteOne();
  },
  getById: function (id: string): Promise<Car> {
    return CarModel.findOne(
      {
        id,
      },
      protection
    );
  },
  getAll: function (): Promise<Car[]> {
    return CarModel.find({}, protection);
  },
};
