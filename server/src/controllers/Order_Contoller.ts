import { Request, Response, NextFunction } from "express";
import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
import sequelize from "../models";

export class Controller {
  static async createOrder(req: Request, res: Response, next: NextFunction) {
    const t = await sequelize.transaction();
    try {
      const { name, orders } = req.body;
      const customerNew: Customer = await Customer.create(
        {
          name,
        },
        { transaction: t }
      );
      if (orders.length === 0) {
        throw { name: "failed" };
        return res.status(400).json({ message: "failed to create customer" });
      }
      interface orderType {
        name: string;
        description: string;
        price: number;
        imageUrl: string;
        quantity: number;
      }
      let totalPrice = 0;
      orders.forEach((order: orderType) => {
        totalPrice += order.price * order.quantity;
      });
      const id = customerNew.id;
      await Order.create(
        {
          totalPrice,
          CustomerId: id,
        },
        { transaction: t }
      );
      await t.commit();
      res.status(200).json({ message: "successfully create order" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await Order.findAll({
        include: {
          model: Customer,
        },
      });
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}
