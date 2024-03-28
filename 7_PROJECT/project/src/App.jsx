import { useState, useEffect } from "react";
import "./App.css";
const url = "http://localhost:3000/products/";

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addProduct = await res.json();
    //carregamento dinâmico
    setProducts((prevProducts) => [...prevProducts, addProduct]);
    setName("");
    setPrice("");
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <h1>oi</h1>
        <h2>oioi</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {" "}
              {product.name} - R$: {product.price}
            </li>
          ))}
        </ul>
        <div className="add-produto">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              Preço:
              <input
                type="number"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <input type="submit" value="Criar" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
