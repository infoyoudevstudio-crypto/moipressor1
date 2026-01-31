import express from "express";
import pkg from "pg";
import cors from "cors";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mon_site",
  password: "TON_MDP",
  port: 5432,
});

app.post("/api/message", async (req, res) => {
  const { nom, email, message } = req.body;

  await pool.query(
    "INSERT INTO messages (nom, email, message) VALUES ($1,$2,$3)",
    [nom, email, message]
  );

  res.sendStatus(201);
});

app.listen(3001, () => {
  console.log("Backend OK sur http://localhost:3001");
});
