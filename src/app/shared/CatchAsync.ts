import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsyn = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: unknown) {
      if (error instanceof Error) {
        next(error);
      } else {
        next(new Error(String(error)));
      }
    }
  };
};

export default catchAsyn;