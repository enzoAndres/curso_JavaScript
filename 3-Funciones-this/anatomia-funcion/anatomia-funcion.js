function calcularDescuentoPrecio (precio, descuentoPorcentaje) {
    const descuento = (precio * descuentoPorcentaje) / 100;
    const precioConDescuento = precio - descuento;
    
    return precioConDescuento;
}

const precioOriginal = 100;
const descuentoPorcentaje  = 20;
const finalPrecio = calcularDescuentoPrecio(precioOriginal, descuentoPorcentaje);
console.log('Precio normal: ' + precioOriginal);
console.log('El descuento del producto es: ' + descuentoPorcentaje);
console.log('Precio final con descuento' + finalPrecio);
