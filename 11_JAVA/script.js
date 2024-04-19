//1 - var, let e const

const a = 5;
const b = 95;

console.log(a + b);

// 2 - arrow function

const sum = function sum(a, b) {
  a + b;
};

const arrowSum = (a, b) => {
  return a + b;
};

console.log(sum);
console.log(arrowSum);

const greeting = (name) => {
  if (name) {
    return "Oi";
  } else {
    return "errado";
  }
};

console.log(greeting("Rebeca"));
console.log(greeting());

const usuario = {
  name: "Rebeca",
  age: 20,
};

console.log(usuario);

// 3 - Filter

const array = [1, 2, 3, 4, 5];

const numeros = array.filter((n) => {
  if (n * 3) {
    return n;
  }
});
console.log(numeros);

// 4 - Map (percorre os itens basead )

const produtos = [
  { name: "Camiseta", preco: 20, categoria: "Roupas" },
  { name: "Blusa", preco: 15, categoria: "Roupas" },
  { name: "Calça", preco: 50, categoria: "Roupas" },
  { name: "Tenis", preco: 20, categoria: "Sapato" },
];

produtos.map((produtos) => {
  if (produtos.categoria === "Roupas") {
    produtos.onSale = true;
  }
});

console.log(produtos);

//5 - template literals

const nomeUser = "Rebequinha";
const ageUser = 20;

console.log("O nome do usuário é ${nomeUser}");

// 6 - Destructing

const fruits = ["Pera", "Uva", "Maça"];

const [f1, f2, f3] = fruits;

console.log(f3);

//  7 - spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

// 8 - Classes

class Produtos {
  constructor(name, preco) {
    this.name = name;
    this.preco = preco;
  }

  produtoDesconto(desconto) {
    return this.preco * ((100 - desconto) / 100);
  }
}

const blusa = new Produtos("Camisa", 250);
console.log(blusa.name);

console.log(blusa.produtoDesconto(10));
console.log(blusa.produtoDesconto(50));

// 9 - Herança

class ProdutoEAtributo extends Produtos {
  constructor(name, preco, cores) {
    super(name, preco);
    this.cores = cores;
  }

  mostreCores() {
    console.log("As cores são:");
    this.cores.forEach((cores) => {
      console.log(cores);
    });
  }
}

const hat = new ProdutoEAtributo("chapéu");

console.log(hat);
