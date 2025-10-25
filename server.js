require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000", // client URL for Render or local
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// --- MongoDB Atlas Setup ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Mongoose Schema ---
const docSchema = new mongoose.Schema({
  documentName: String,
  content: String
});
const Document = mongoose.model("Document", docSchema);

// --- Socket.IO Setup ---
io.on("connection", (socket) => {
  console.log("🔌 Socket connected:", socket.id);

  socket.on("join-document", async ({ documentName }) => {
    if (!documentName) return;

    documentName = String(documentName);
    socket.join(documentName);
    socket.data.documentName = documentName;

    // Load or create document
    let doc = await Document.findOne({ documentName });
    if (!doc) doc = await Document.create({ documentName, content: "" });
    socket.emit("load-document", doc.content);

    // Handle text changes
    socket.on("send-changes", async (data) => {
      await Document.updateOne({ documentName }, { content: data });
      socket.to(documentName).emit("receive-changes", data);
    });

    socket.on("disconnect", () => {
      console.log(`❌ Disconnected from ${documentName}: ${socket.id}`);
    });
  });
});

// --- Server Start ---
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
