const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import Ajv from "ajv";
const ajv = new Ajv();

const dateTimeRegex =
  /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;

ajv.addFormat("date-time", {
  validate: (dateTimeString: string) => {
    return dateTimeRegex.test(dateTimeString);
  },
});

export const CarSchema = new Schema(
  {
    id: { type: Number, index: true, unique: true, sparse: true },
    brand: { type: String, index: true },
    name: { type: String, index: true },
    engineHPPower: { type: Number, index: true },
    producedAt: { type: Date, index: true },
  },
  { strict: true }
);

export const validateCar = ajv.compile({
  type: "object",
  properties: {
    id: { type: "number" },
    brand: { type: "string" },
    name: { type: "string" },
    engineHPPower: { type: "number" },
    producedAt: {
      type: "string",
      format: "date-time",
    },
  },
  required: ["id", "brand", "name", "engineHPPower", "producedAt"],
});
