import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoutes.js";
// import contactsRoutes from "./routes/ContactRoutes.js";
// import setupSocket from "./socket.js";
// import messagesRoutes from "./routes/MessagesRoutes.js";
// import ChannelRoutes from "./routes/ChannelRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const databaseURL = process.env.DATABASE_URL;

const allowedOrigins = [process.env.ORIGIN, "http://localhost:5173", "http://localhost:5174"].filter(Boolean);
console.log("CORS allowed origins:", allowedOrigins);
const corsOptions = {
    origin(origin, callback) {
        // allow requests with no origin (like curl or server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        console.warn("Blocked CORS request from origin:", origin);
        return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));


// app.use("/uploads/profiles", express.static("uploads/profiles"));
// app.use("/uploads/files", express.static("uploads/files"));


app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/messages", messagesRoutes);
// app.use("/api/channel", ChannelRoutes);



const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// setupSocket(server);

mongoose.connect(databaseURL).then(() => 
  console.log("DB connected successfully")).catch((err) => {
    console.error("DB connection error:", err.message)
  });