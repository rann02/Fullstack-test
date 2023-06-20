import { Request, Response, NextFunction } from "express";
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err.name === "NotFound") {
    res.status(404).json({
      messsage: "Product not found",
    });
  } else if (err.name === "Failed") {
    res.status(400).json({
      messsage: "failed to create customer",
    });
  } else {
    res.status(500).json({
      messsage: "Internal Server Error",
    });
  }
}
