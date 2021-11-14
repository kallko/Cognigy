import { Car } from "../@type/Car";
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

module.exports = {
  create: function (car: Car): Promise<Car> {
    return new CarModel(car).save();
  },
  getById: function (carId: string): Promise<Car> {
    return CarModel.findOne(
      {
        id: carId,
      },
      protection
    );
  },
  getAll: function (): Promise<Car[]> {
    return CarModel.find({}, protection);
  },
};
