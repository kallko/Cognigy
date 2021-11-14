import { carController } from "../src/controller/carController";
import { carService } from "../src/service/carSrvice";
import { expect } from "chai";
import * as sinon from "sinon";

describe("car Api Test", () => {
  const sandbox = sinon.createSandbox();
  afterEach(() => {
    sandbox.restore();
  });
  describe("controller test", () => {
    it("create car with correct schema", () => {
      const serviceCreate = sandbox.stub(carService, "create");
      carController.createCar({
        name: "4 Series",
        brand: "BMW",
        id: 5,
        engineHPPower: 201,
        // @ts-ignore
        producedAt: "2021-11-14T12:17:39.090Z",
      });
      expect(serviceCreate.callCount).equal(1);
    });
    it("create car with incorrect schema", () => {
      const serviceCreate = sandbox.stub(carService, "create");
      carController.createCar({
        name: "4 Series",
        brand: "BMW",
        // @ts-ignore
        id: "5",
        engineHPPower: 201,
        // @ts-ignore
        producedAt: "2021-11-14T12:17:39.090Z",
      });
      expect(serviceCreate.callCount).equal(0);
    });
    it("create car with not full schema", () => {
      const serviceCreate = sandbox.stub(carService, "create");
      // @ts-ignore
      carController.createCar({
        name: "4 Series",
      });
      expect(serviceCreate.callCount).equal(0);
    });
    it("replace car with correct schema", () => {
      const serviceCreate = sandbox.stub(carService, "replace");
      carController.replaceCar(
        {
          name: "4 Series",
          brand: "BMW",
          id: 5,
          engineHPPower: 201,
          // @ts-ignore
          producedAt: "2021-11-14T12:17:39.090Z",
        },
        1
      );
      expect(serviceCreate.callCount).equal(1);
    });
    it("replace car with incorrect schema", () => {
      const serviceCreate = sandbox.stub(carService, "replace");
      carController.replaceCar(
        {
          name: "4 Series",
          brand: "BMW",
          // @ts-ignore
          id: "5",
          engineHPPower: 201,
          // @ts-ignore
          producedAt: "2021-11-14T12:17:39.090Z",
        },
        1
      );
      expect(serviceCreate.callCount).equal(0);
    });
    it("replace car with not full schema", () => {
      const serviceCreate = sandbox.stub(carService, "replace");
      // @ts-ignore
      carController.replaceCar(
        // @ts-ignore
        {
          name: "4 Series",
        },
        1
      );
      expect(serviceCreate.callCount).equal(0);
    });
    it("update car with correct schema", () => {
      const serviceCreate = sandbox.stub(carService, "update");
      carController.updateCar(
        {
          name: "4 Series",
          brand: "BMW",
          id: 5,
          engineHPPower: 201,
          // @ts-ignore
          producedAt: "2021-11-14T12:17:39.090Z",
        },
        1
      );
      expect(serviceCreate.callCount).equal(1);
    });
    it("update car with incorrect schema", () => {
      const serviceCreate = sandbox.stub(carService, "update");
      carController.updateCar(
        {
          name: "4 Series",
          brand: "BMW",
          // @ts-ignore
          id: "5",
          engineHPPower: 201,
          // @ts-ignore
          producedAt: "2021-11-14T12:17:39.090Z",
        },
        1
      );
      expect(serviceCreate.callCount).equal(0);
    });
    it("update car with not full schema", () => {
      const serviceCreate = sandbox.stub(carService, "update");
      // @ts-ignore
      carController.updateCar(
        // @ts-ignore
        {
          name: "4 Series",
        },
        1
      );
      expect(serviceCreate.callCount).equal(1);
    });
  });
});
