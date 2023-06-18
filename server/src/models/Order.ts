import { Model, DataTypes } from "sequelize";
import sequelize from "./index";
import { Customer } from "./Customer";

export class Order extends Model {
  public totalPrice!: number;
  public CustomerId!: number;
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

// Order.belongsTo(Customer);
