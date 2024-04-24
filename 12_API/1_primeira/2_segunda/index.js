const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas - end points

app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  console.log(name);
  console.log(price);

  res.json({ message: "Produto foi criado com sucesso" });
});

app.get("/", (req, res) => {
  res.json({ message: "First route created successfully" });
});

app.listen(3000);
