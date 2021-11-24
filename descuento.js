/* const precioOriginal = 120;
const descuento = 14; */

function calculoPrecioDescuento(precio , descuento){
    
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento;

}

function ClickCalculoPrecioDescuento(){

    const inputPrecio = document.getElementById("inputPrecio");
    const precioValue = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const descuentoValue = inputDescuento.value;

    const preConDescuento = calculoPrecioDescuento(precioValue,descuentoValue);
    const resultado = document.getElementById("resultadoPrecio");
    resultado.innerText = "El precio de su producto es $"+preConDescuento;

}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento
}) */


