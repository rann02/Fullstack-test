import { Product } from "../models/Product";
import { Request, Response } from "express";

export class Controller {
  static async postProduct(req: Request, res: Response) {
    try {
      const { name, description, price, imageUrl } = req.body;
      const product: Product = await Product.create({
        name,
        description,
        price,
        imageUrl,
      });
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllProduct(req: Request, res: Response) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  static async getOneProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description, price, imageUrl } = req.body;
      const findProduct = await Product.findByPk(id);
      if (!findProduct) {
        return res.status(404).json({ message: "Product not found" });
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
      console.log(error);
    }
  }

  static async deletProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findProduct = await Product.findByPk(id);
      if (!findProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      await Product.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      console.log(error);
    }
  }
}
