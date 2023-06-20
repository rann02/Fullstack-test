import { Router } from "express";
import { Controller } from "../controllers/Product_Controller";
const router = Router();

router.get("/products", Controller.getAllProduct);
router.post("/products", Controller.postProduct);
router.get("/products/:id", Controller.getOneProduct);
router.put("/products/:id", Controller.updateProduct);
router.delete("/products/:id", Controller.deletProduct);

export default router;
