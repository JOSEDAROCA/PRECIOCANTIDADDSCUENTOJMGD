import "./styles.css";

const p = document.getElementById("p");
const precioObj = document.getElementById("precioObjeto");
const cantidad = document.getElementById("cantidad");
const btn = document.getElementById("boton");

  btn.addEventListener("click", () => {
  let precioObjetos: number = Number(precioObj.value);
  let cantidadObj: number = Number(cantidad.value);
  let resultado: number = precioObjetos * cantidadObj;
  if (resultado === 0) {
    alert("Usted no ingreso precio o cantidad");
    p.innerText = "Usted no ingreso Precio o Cantidad";
  } else if (resultado <= 10) {
       = "Su monto a pagar es " + resultado + " no aplica descuento";
  } else {
    let resultadoFinal = resultado - resultado * 0.1;
    p.innerText =
      "Su monto a pagar es " + resultadoFinal + " con descuento incluido";
  }
  if (isNaN(precioObjetos)) {
    p.innerText = "el dato ingresado (" + precioObj.value + ") es invalido";
  } else if (isNaN(cantidadObj)) {
    p.innerText = "el dato ingresado (" + cantidad.value + ") es invalido";
  }
});
function clear() {
  document.getElementById("result").value.reset();
}
