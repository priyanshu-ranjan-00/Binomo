import express from "express";
import { placeOrder, getOrderBook } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", placeOrder);
router.get("/", getOrderBook);

export default router;
