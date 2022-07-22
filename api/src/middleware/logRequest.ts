import { NextFunction, Request, Response } from "express";
import { Logger } from "../utils/logging";

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const log = `URL: ${req.url}`;
  Logger.info(log);
  next();
};

export default logRequest;
