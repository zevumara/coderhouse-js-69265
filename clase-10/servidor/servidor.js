const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");

const app = express();
const httpServer = createServer(app);

const PORT = process.env.PORT || 3002;

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Servidor WebSocket activo.");
});

const users = new Map();

io.on("connection", (socket) => {
  socket.on("usuario", (nombre) => {
    users.set(socket.id, nombre);
    console.log(`Se conectó ${nombre}.`);
    socket.broadcast.emit("mensaje", `¡Se conectó ${nombre}!`);
  });

  socket.on("mensaje", (data) => {
    const nombre = users.get(socket.id) || "Desconocido";
    console.log(`${nombre}: ${data}`);
    io.emit("mensaje", `${nombre}: ${data}`);
  });

  socket.on("disconnect", () => {
    users.delete(socket.id);
  });
});

httpServer.listen(PORT, () => console.log(`Servidor WebSocket corriendo en el puerto ${PORT}`));
