import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/scan-secure", (req, res) => {
  const { e, c } = req.body;

  if (!e || !c) {
    return res.status(400).json({ message: "Invalid scan" });
  }

  return res.json({ message: "Scan successful!" });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});