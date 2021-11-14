import * as express from "express";
import { carController } from "../../controller/carController";
import { carService } from "../../service/carSrvice";
const router = express.Router();
const serverStartTime = new Date();

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
      res.json({
        status: "test route success v1",
        time: serverStartTime,
        possibleRoutes: [
          "GET: /",
          "GET: /api/v1/help",
          "GET: /api/v1/cars",
          "GET: /api/v1/car/id",
          "POST: /api/v1/car/id",
          "PATCH: /api/v1/car/id",
          "PUT: /api/v1/car/id",
          "DELETE: /api/v1/car/id",
        ],
        carSchema: {
          id: "number",
          brand: "string",
          name: "string",
          engineHPPower: "number",
          producedAt: "ISO Date string",
        },
      });
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router
  .route("/cars")
  .get(async function (req: express.Request, res: express.Response) {
    const cars = await carService.getAll();
    res.json({
      cars,
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
        result,
      });
    } catch (err: any) {
      res.status(415).send(err.message);
    }
  });

router
  .route("/car/:id")
  .put(async function (req: express.Request, res: express.Response) {
    try {
      const car = await carController.replaceCar(
        req.body,
        Number(req.params.id)
      );
      res.json({
        car,
      });
    } catch (err: any) {
      res.status(404).send(err.message);
    }
  });

router
  .route("/car/:id")
  .patch(async function (req: express.Request, res: express.Response) {
    try {
      const car = await carController.updateCar(
        req.body,
        Number(req.params.id)
      );
      res.json({
        car,
      });
    } catch (err: any) {
      res.status(404).send(err.message);
    }
  });

router
  .route("/car/:id")
  .delete(async function (req: express.Request, res: express.Response) {
    try {
      const car = await carService.delete(Number(req.params.id));
      res.json({
        car,
      });
    } catch (err: any) {
      res.status(404).send(err.message);
    }
  });

module.exports = router;
