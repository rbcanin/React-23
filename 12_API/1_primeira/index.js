const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas

app.get("/", (req, res) => {
  res.json({ message: "First route created successfully" });
});

app.listen(3000);
