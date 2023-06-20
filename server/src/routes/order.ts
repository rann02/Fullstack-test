import { Router } from "express";
import { Controller } from "../controllers/Order_Contoller";
const router = Router();

router.get("/orders", Controller.getOrders);
router.post("/order", Controller.createOrder);

export default router;
