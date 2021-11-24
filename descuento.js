/* const precioOriginal = 120;
const descuento = 14; */

function calculoPrecioDescuento(precio , descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento;

}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento
}) */


