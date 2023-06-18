import { Model, DataTypes } from "sequelize";
import sequelize from "./index";
import { Customer } from "./Customer";
import { Product } from "./Product";
import { Order } from "./Order";

export class Cart extends Model {
  public CustomerId!: number;
  public OrderId!: number;
  public ProductId!: number;
}

Cart.init(
  {
    CustomerId: { type: DataTypes.NUMBER },
    OrderId: { type: DataTypes.NUMBER },
    ProductId: { type: DataTypes.NUMBER },
  },
  {
    sequelize,
    modelName: "Cart",
  }
);

// Cart.belongsTo(Customer);
// Cart.belongsTo(Order);
// Cart.belongsTo(Product);
