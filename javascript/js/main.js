// Mensaje de prueba
console.log("JavaScript conectado correctamente");

// Datos del producto
let nombreProducto = " teclado gamer ";
let precio = 120000;
let cantidad = 2;
let descuento = 10000;
let disponible = true;

// Función para calcular subtotal
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

// Función para calcular total
function calcularTotal(subtotal, descuento) {
    return subtotal - descuento;
}

// Cálculos
let subtotal = calcularSubtotal(precio, cantidad);
let total = calcularTotal(subtotal, descuento);

// Limpieza del nombre
let nombreLimpio = nombreProducto.trim();

// Conversión a mayúsculas
let nombreMayusculas = nombreLimpio.toUpperCase();

// Validación de palabra clave
let contieneGamer = nombreMayusculas.includes("GAMER");

// Categorías o etiquetas
let categorias = [
    "Periféricos",
    "Gaming",
    "Tecnología"
];

// Mostrar resultados
console.log("===== RESUMEN DE LA COMPRA =====");
console.log("Producto:", nombreLimpio);
console.log("Título:", nombreMayusculas);
console.log("Precio unitario: $" + precio);
console.log("Cantidad:", cantidad);
console.log("Disponible:", disponible);
console.log("Subtotal: $" + subtotal);
console.log("Descuento: $" + descuento);
console.log("Total a pagar: $" + total);

console.log("\n===== VALIDACIÓN =====");
console.log("¿Contiene la palabra GAMER?", contieneGamer);
// Validación de envío gratis
if (total >= 200000 && disponible === true) {
    console.log("Aplica envío gratis");
} else {
    console.log("No aplica envío gratis");
}

console.log("\n===== CATEGORÍAS =====");
console.log("Cantidad de categorías:", categorias.length);
console.log("Categorías:", categorias);