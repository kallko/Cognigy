import * as express from "express";
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
      res.json({ response: "test route success v1", time: serverStartTime });
    } catch (e: any) {
      console.error("ERROR " + e + e.stack);
    }
  });

router
  .route("/cars")
  .get(function (req: express.Request, res: express.Response) {
    res.json({
      cars: [
        {
          name: "3 Series",
          brand: "BMW",
        },
      ],
    });
  });

router
  .route("/car/:id")
  .get(function (req: express.Request, res: express.Response) {
    res.json({
      cars: [
        {
          name: "1 Series Get",
          brand: "BMW",
        },
      ],
    });
  });

router
  .route("/car/:id")
  .post(function (req: express.Request, res: express.Response) {
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
