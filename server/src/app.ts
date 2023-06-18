import express from "express";
const app = express();
const port = 3000;
import { Controller } from "./controllers/Product_Controller";
import { Controller as ControllerOrder } from "./controllers/Order_Contoller";
import { errorHandler } from "./middleware/errorHandler";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/products", Controller.getAllProduct);
app.post("/product", Controller.postProduct);
app.get("/product/:id", Controller.getOneProduct);
app.put("/product/:id", Controller.updateProduct);
app.delete("/product/:id", Controller.deletProduct);
app.post("/order", ControllerOrder.createOrder);
app.get("/orders", ControllerOrder.getOrders);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
