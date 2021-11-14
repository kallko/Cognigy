import { NextFunction, Request, Response } from "express";
import { notAuthorized } from "../error/carApiError";
const whiteList = ["/api/v1/help", "/api/v1/login"];

export const authMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (
    req.headers?.["x-api-key"] === "123" ||
    whiteList.some((route) => req.originalUrl?.startsWith(route))
  ) {
    next();
  } else {
    res.status(401);
    next(notAuthorized);
  }
};
