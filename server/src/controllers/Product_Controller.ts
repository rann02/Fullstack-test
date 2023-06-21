import { log } from "console";
import { Product } from "../models/Product";
import { Request, Response, NextFunction } from "express";

export class Controller {
  static async postProduct(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      const { name, description, price, imageUrl } = req.body;
      const product: Product = await Product.create({
        name,
        description,
        price,
        imageUrl,
      });
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async getAllProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  static async getOneProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        throw { name: "NotFound" };
      }
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, description, price, imageUrl } = req.body;
      const findProduct = await Product.findByPk(id);
      if (!findProduct) {
        throw { name: "NotFound" };
      }
      await Product.update(
        { name, description, price, imageUrl },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({ message: "Product updated" });
    } catch (error) {
      next(error);
    }
  }

  static async deletProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const findProduct = await Product.findByPk(id);
      if (!findProduct) {
        throw { name: "NotFound" };
      }
      await Product.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      next(error);
    }
  }
}
