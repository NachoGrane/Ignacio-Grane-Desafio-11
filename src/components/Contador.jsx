import { useState } from "react";

const Contador = () => {
  const valorInicial = 0;
  const [estado, setEstado] = useState(valorInicial);
  const handleIncrementar = () => {
    setEstado(estado + 1);
  };
  const handleDecrementar = () => {
    setEstado(estado - 1);
  };
  const handleResetear = () => {
    setEstado(valorInicial);
  };
  return (
    <div className=" text-center">
      <h3>Contador</h3>
      <p className="fs-1">{estado}</p>
      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={handleIncrementar}
      >
        Incrementar
      </button>
      <button
        type="button"
        className="btn btn-dark me-2"
        onClick={handleDecrementar}
      >
        Decrementar
      </button>
      <button
        type="button"
        className="btn btn-warning me-2"
        onClick={handleResetear}
      >
        Resetear
      </button>
    </div>
  );
};

export default Contador;
