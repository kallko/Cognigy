import * as express from "express";
import { carController } from "../../controller/carController";
const router = express.Router();
const serverStartTime = new Date();
const carService = require("../../service/carSrvice");

router.route("/").get(function (req: express.Request, res: express.Response) {
  try {
    res.json({ response: "main route success", time: serverStartTime });
  } catch (e: any) {
    console.error("ERROR " + e + e.stack);
  }
});
router
  .route("/help")
  .get(function (req: express.Request, res: express.Response) {
    try {
      res.json({ response: "test route success v1", time: serverStartTime });
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router
  .route("/cars")
  .get(async function (req: express.Request, res: express.Response) {
    const cars = await carService.getAll();
    res.json({
      cars
    });
  });

router
  .route("/car/:id")
  .get(async function (req: express.Request, res: express.Response) {
    const car = await carService.getById(req.params.id);
    res.json({
      car,
    });
  });

router
  .route("/car")
  .post(async function (req: express.Request, res: express.Response) {
    try {
      const result = await carController.createCar(req.body);
      res.status(201);
      res.json({
        result
      });
    } catch (err: any) {
      res.status(415).send(err.message);
    }
  });

router
  .route("/car/:id")
  .put(function (req: express.Request, res: express.Response) {
    res.json({
      cars: [
        {
          name: "3 Series Put",
          brand: "BMW",
        },
      ],
    });
  });

router
  .route("/car/:id")
  .patch(function (req: express.Request, res: express.Response) {
    res.json({
      cars: [
        {
          name: "5 Series Delete",
          brand: "BMW",
        },
      ],
    });
  });

router
  .route("/car/:id")
  .delete(function (req: express.Request, res: express.Response) {
    res.json({
      cars: [
        {
          name: "5 Series Delete",
          brand: "BMW",
        },
      ],
    });
  });

router.route("/").post(function (req: express.Request, res: express.Response) {
  try {
    res.json({
      response: "main route success",
      time: serverStartTime,
      method: "Post",
    });
  } catch (e: any) {
    console.error("ERROR " + e + e.stack);
  }
});

module.exports = router;
