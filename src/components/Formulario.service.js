import Swal from "sweetalert2";

export const notificacionSweet = (form) => {
  Swal.fire({
    title: "Los datos ingresados son: ",
    text: ` Nombre: ${form.nombre}, Email: ${form.email} y Mensaje: ${form.mensaje}`,
    icon: "success",
  });
};
