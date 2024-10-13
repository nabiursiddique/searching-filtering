import express from "express";
import { Users } from "./users.js";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  const query = req.query.q;

  // search function
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  res.json(search(Users).splice(0, 10));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
