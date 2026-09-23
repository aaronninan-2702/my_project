const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Backend is running successfully"
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend API is working"
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
