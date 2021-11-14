import { NextFunction, Request, Response } from "express";
import { idNotInteger } from "../error/carApiError";
const routesWithNumberId = ["/api/v1/car/"];

export const checkIdMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const routeWithIdPrefix = getRouteWithIdPrefix(req.originalUrl);
  if (routeWithIdPrefix) {
    const id = req.originalUrl.replace(routeWithIdPrefix, "");
    return Number.isInteger(Number(id)) ? next() : next(idNotInteger);
  } else {
    next();
  }
};

function getRouteWithIdPrefix(path: string) {
  return routesWithNumberId.find((route) => path.startsWith(route));
}
