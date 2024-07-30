const Tarjeta = (props) => {
  const { nombre, profesion, foto } = props;
  return (
    <>
      <h2>Ejercicio 01</h2>
      <hr />
      <div className="card ms-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={foto} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{profesion}</p>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;
