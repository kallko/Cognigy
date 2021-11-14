import { carController } from "../src/controller/carController";
import { expect } from "chai";

describe("init Check test for dataController", () => {
  it("check testFunction in dataController ", () => {
    const result = carController.testFunction(5);
    expect(result).deep.equal(10);
  });
});
