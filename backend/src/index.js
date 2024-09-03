import express from "express";
import cors from "cors";
import { createClient } from "redis";

const app = express();
app.use(cors());
app.use(express.json());

let client;

(async () => {
  client = await createClient({ url: "redis://redis-server:6379" }).connect();
  await client.set("count", 0);
})();

app.get("/", async (req, res) => {
  const countData = await client.get("count");
  const count = parseInt(countData);
  await client.set("count", count + 1);
  res.json({ count });
});

app.post("/reset", async (req, res) => {
  if (req.body.reset) {
    await client.set("count", 0);
    res.json({ msg: "success" });
  }
});

app.listen(8080, () => console.log("Listening on port 8080"));
