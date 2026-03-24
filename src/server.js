import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import brukerRoutes from "../src/routes/authRoutes.js";
import maskinRoutes from "../src/routes/maskinRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/auth", brukerRoutes);

app.use("/api/maskin", maskinRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/start", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "hjemmeside.html"));
});

app.get("/maskiner", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "pcer.html"));
});

app.get("/vaermelding", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "vaeret.html"));
});

app.listen(3000, () => console.log("Server kjører på http://localhost:3000"));