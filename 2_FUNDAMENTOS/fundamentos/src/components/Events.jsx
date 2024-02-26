const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
  };

  console.log("Ativou o evento");

  const renderSomething = (x) => {
    if (x) {
      return <h1>certo</h1>;
    } else {
      return <h1>errado</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou")}>
          Clique aqui também
        </button>
      </div>
    </div>
  );
};
export default Events;
