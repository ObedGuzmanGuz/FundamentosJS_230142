

// Objetos

const producto= {

    nombre : "Tablet",
    precio : 300,
    disponible: true
}
const produc = 
{

Nombre: "Tablet 9\"",
 Marca : "Mac",
Modelo:"iPad",
costo_compra: 1150025,
costo_venta: 15400,
disponi: true,
sku: Symbol("guzman"),
colores:[ "blanco", "Negro", "Azul", "Amarillo"]

}
// Imprimir el objeto 
console.warn("------Objetos --------");
console.log(produc);


// Los objetos tambien pueden representarse en formato tabala utilizando la funcion consle.table

console.table(produc)


// Accder a las propiedades de un objeto

console.warn("---Leyendo las propiedades de un objeto y sus tipos de dato\n");
console.log( `Nombre del Producto: ${produc.Nombre} que es del tipo: ${typeof(produc.Nombre)}`);
console.log(`Marca: ${produc.Marca} que es del tipo ${typeof(produc.Marca)}`);
console.log(`Costo compra: ${produc.costo_compra} que es del tipo ${typeof(produc.costo_compra)}`);
console.log(`Costoventa : ${produc.costo_venta} que es del tipo ${typeof(produc.costo_venta)}`);
console.log(`Disponible: ${produc.disponi} que es del tipo ${typeof(produc.disponi)}`);
console.log(`SKU: ${String(produc.sku)} que es del tipo ${typeof(produc.sku)}`);
console.log(`Colores: ${produc.colores} que es del tipo ${typeof(produc.colores)}`);











/*


console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)



// Destructuring

const { nombre, precio, disponible }   = producto

console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement

const autenticado = true
const usuario= "Obed"

const nuevoobjeto = {

autenticado,
usuario
}

console.table(nuevoobjeto)*/