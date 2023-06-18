import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

export class Order extends Model {
  declare totalPrice: number;
  declare CustomerId: number;
}

Order.init(
  {
    totalPrice: { type: DataTypes.NUMBER },
    CustomerId: { type: DataTypes.NUMBER },
  },
  {
    sequelize,
    modelName: "Order",
  }
);
