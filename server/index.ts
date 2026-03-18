import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post("/scan-secure", (req, res) => {
  const { e, c } = req.body;

  if (!e || !c) {
    return res.status(400).json({ message: "Invalid scan" });
  }

  return res.json({ message: "Scan successful!" });
});

app.get("/", (_req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});