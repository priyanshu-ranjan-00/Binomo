import dotenv from "dotenv";
import { createServer } from "http";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { initializeWebSocket } from "./config/websocket.js";
import { placeOrder } from "./controllers/orderController.js";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;
const server = createServer(app);

const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log("✅ MongoDB connected successfully");

    const io = initializeWebSocket(server); // Initialize WebSocket
    console.log("✅ WebSocket server initialized");

    // Pass io to the controller
    app.post("/api/orders", (req, res) => placeOrder(req, res, io));

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error.message);
    process.exit(1);
  }
};

startServer();
