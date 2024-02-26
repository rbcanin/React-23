const Challenge = () => {
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>
        A: {a} e B: {b}
      </p>
      <button onClick={() => console.log(a + b + a)}>
        Clique pra ver a soma
      </button>
    </div>
  );
};

export default Challenge;

// const Challenge = ({ numero }) => {
//   this = {
//     valor1: 5,
//     valor2: 6,
//   };

//   return (
//     <div>
//       <span>{numero} oi</span>
//     </div>
//   );
// };
// export default Challenge;
