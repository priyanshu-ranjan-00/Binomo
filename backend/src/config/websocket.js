import { Server } from "socket.io";

export const initializeWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("New WebSocket connection");

    // Emit order book updates
    const orderBookUpdate = {
      type: "orderbook",
      asks: [
        { price: 50000, amount: 1 },
        { price: 51000, amount: 2 },
      ],
      bids: [
        { price: 49000, amount: 1.5 },
        { price: 48000, amount: 3 },
      ],
    };

    socket.emit("orderbook", orderBookUpdate);

    socket.on("disconnect", () => {
      console.log("WebSocket disconnected");
    });
  });

  return io;
};
