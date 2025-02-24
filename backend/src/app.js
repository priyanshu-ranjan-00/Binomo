import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import { errorHandler } from "./utils/errorHandler.js";
import orderRoutes from "./routes/orderRoutes.js";
import tradeRoutes from "./routes/tradeRoutes.js";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/trades", tradeRoutes);

// Error handling
app.use(errorHandler);

export default app;
