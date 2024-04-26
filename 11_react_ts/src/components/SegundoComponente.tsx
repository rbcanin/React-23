import React from "react";

type Props = {
  name: string;
};

const SegundoComponente = (props: Props) => {
  return (
    <div>
      <p>Segundo componente</p>
      <p>seu nome é {props.name}</p>
    </div>
  );
};

export default SegundoComponente;
