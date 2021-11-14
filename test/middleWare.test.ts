import { authMiddleware } from "../src/middleware/authMiddleware";
const expect = require("chai").expect;
import * as sinon from "sinon";
import { idNotInteger, notAuthorized } from "../src/error/carApiError";
import { checkIdMiddleware } from "../src/middleware/checkIdMiddleware";

describe("middleWare Api Test", () => {
  describe("auth Middleware test ", () => {
    let middleWare: any;
    beforeEach(function () {
      middleWare = authMiddleware;
    });
    it("Check auth middleware is a function", () => {
      expect(middleWare).be.instanceOf(Function);
    });
    it("Should accept three arguments", () => {
      expect(middleWare.length).to.equal(3);
    });
    it("should call next() once with correct key", function () {
      const nextSpy = sinon.spy();
      middleWare(
        { headers: [{ "x-api-key": "123" }], originalUrl: "/api/v1/cars" },
        { status: (_responseCode: number) => {} },
        nextSpy
      );
      expect(nextSpy.calledOnce).to.be.true;
      expect(nextSpy.calledWith()).to.be.true;
    });
    it("should call next() for help route with wrong key", function () {
      const nextSpy = sinon.spy();
      middleWare(
        { headers: [{ "x-api-key": "111" }], originalUrl: "/api/v1/help" },
        { status: (_responseCode: number) => {} },
        nextSpy
      );
      expect(nextSpy.calledOnce).to.be.true;
      expect(nextSpy.calledWith()).to.be.true;
    });
    it("should call next() for login route with wrong key", function () {
      const nextSpy = sinon.spy();
      middleWare(
        { headers: [], originalUrl: "/api/v1/login" },
        { status: (_responseCode: number) => {} },
        nextSpy
      );
      expect(nextSpy.calledOnce).to.be.true;
      expect(nextSpy.calledWith()).to.be.true;
    });
    it("should call next() with Error for cars route without key", function () {
      const nextSpy = sinon.spy();
      middleWare(
        { headers: [], originalUrl: "/api/v1/cars" },
        { status: (_responseCode: number) => {} },
        nextSpy
      );
      expect(nextSpy.calledOnce).to.be.true;
      expect(nextSpy.calledWith(notAuthorized)).to.be.true;
    });
    it("should call next() with Error for car route with wrong key", function () {
      const nextSpy = sinon.spy();
      middleWare(
        { headers: [{ "x-api-key": "111" }], originalUrl: "/api/v1/cars" },
        { status: (_responseCode: number) => {} },
        nextSpy
      );
      expect(nextSpy.calledOnce).to.be.true;
      expect(nextSpy.calledWith(notAuthorized)).to.be.true;
    });
  });
  describe("id check middleware", () => {
    let middleWare: any;
    beforeEach(function () {
      middleWare = checkIdMiddleware;
    });
    it("Check id check middleware is a function", () => {
      expect(middleWare).be.instanceOf(Function);
    });
    it("Should accept three arguments", () => {
      expect(middleWare.length).to.equal(3);
    });
    it("should call next() once with correct key", function () {
      const nextSpy = sinon.spy();
      middleWare(
        { headers: [{ "x-api-key": "123" }], originalUrl: "/api/v1/car/12" },
        { status: (_responseCode: number) => {} },
        nextSpy
      );
      expect(nextSpy.calledOnce).to.be.true;
      expect(nextSpy.calledWith()).to.be.true;
    });
    it("should call next() with Error once with incorrect id", function () {
      const nextSpy = sinon.spy();
      middleWare(
        { headers: [{ "x-api-key": "123" }], originalUrl: "/api/v1/car/bcd" },
        { status: (_responseCode: number) => {} },
        nextSpy
      );
      expect(nextSpy.calledOnce).to.be.true;
      expect(nextSpy.calledWith(idNotInteger)).to.be.true;
    });
  });
});
