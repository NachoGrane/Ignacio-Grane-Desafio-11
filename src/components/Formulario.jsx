import { useState } from "react";
import { notificacionSweet } from "./Formulario.service";

const Formulario = () => {
  const valorInicial = {
    nombre: "",
    email: "",
    mensaje: "",
  };
  const [form, setForm] = useState(valorInicial);

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (form != valorInicial) {
      notificacionSweet(form);
    }
  };
  return (
    <>
      <form
        className="p-3 border border-1 border-black"
        onSubmit={handleClickSubmit}
      >
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Juan García"
            name="nombre"
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="graciajuan@gmail.com"
            name="email"
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <input
            type="text"
            className="form-control"
            id="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            name="mensaje"
            onChange={handleChangeInput}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
