const Alerta = (props) => {
  const { children, alertaTipo } = props;
  return (
    <div className={`alert alert-${alertaTipo}`} role="alert">
      {children}
    </div>
  );
};

export default Alerta;
