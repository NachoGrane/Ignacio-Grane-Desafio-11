import { useState } from "react";

const Formulario = () => {
  const valorInicial = {
    nombre: "",
    email: "",
    mensaje: "",
  };
  const [form, setForm] = useState(valorInicial);
  return <div>Formulario</div>;
};

export default Formulario;
