

// Objetos
const bg ="linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1)33%,rgba(0,212,255,1)86%)";
const style_console=`background: ${bg}; color:white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`



//Variables independientes
console.log("%c1.-Variables Independientes", style_console);


//Declaramos valores independientes relacionadas a un producto
 
let Producto_Nombre= "AstroMaster 130EQ Newtonian Telescope"
let Producto_Marca= "Celestron"
let Producto_Modelo="Reflector Telescope for Beginners"
let Producto_Precio= 5400.70;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("Tuf707e-dfsdfs")
let Producto_Stock= 12;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categoria=["Instrumento", "Astronomia", "Catadioptrico","Promociones de Celestron", "Mas caros pero buenos"];

console.log(`Nombre del producto: ${Producto_Nombre}, y es de tipo de dato: ${typeof(Producto_Nombre)}>
Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
Modelo:${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
Precio:${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>
Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
Imagen:${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
Categorias: ${Producto_Categoria}, Tipo de Dato <${typeof(Producto_Categoria)}>

`);


console.log("En caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresion anterior");

console.log(Producto_SKU);
console.log(typeof(Producto_SKU));
// Ahora lo declaramos como un objeto
console.log("%c2.-Objeto", style_console);

let Producto={
Barcode:null,
Categoria:["Electronica"],
Nombre: "Tornamesa",
Marca:"Piooner",
Modelo:"Ddj-rev1 Golden",
Nombre:"Mezcladora",
Precio: 6600.50,
SKU: "DZ20210505",
Stock: 8,
Disponibilidad:false
}
console.table(Producto);


console.log("Accediendo a propiedades especificas del Producto")
console.log(`Nombre Completo del Producto: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);

// Desestructuracion de Objetos
console.log("%c3.- Destructuracion de Objetos0", style_console);


let Producto2={

clave:316,
Nombre: "Microscopio",
Marca:"AVEN",
Modelo:"SPZ 50 CON BASE PFM",
Precio: 17000.90,
Disponibilidad:true,
Stock: 2,
SKU: "DZ45645605",
Imagen: "/assets/Microscopio-Serie-P.jpg",
Barcode:213324234,
Categoria:["Electronica", "Ciencia"],
}


let Comprador ={

Clave: 3216,
Nombre: "Obed",
Apellidos: "Guzman Flores",
Tipo: "Frecuente",
Correo:"Obedgu284@gmail.com",
PaisdeOrigen:"Mexico",
SaldoActual: 20000
}
let Pedido = {
Producto_Clave:345,
Comprador_Clave:2005,
Cantidad:5,
Estatus: "Carrito de compra",
Tipopago:"Efectivo" 


}


//En base a los 3 Objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor

let {Precio:Producto_Precio2}= Producto2;
let {Cantidad:Pedido_Cantidad}= Pedido;
let {SaldoActual:Cliente_SaldoActual}= Comprador;
let costo_compra= Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad}
Unidades, con un costo total de: ${costo_compra}
`)

if(costo_compra< Cliente_SaldoActual)
console.log("El cliente tiene saldo suficiente");

//Actualizar el valor de Objetos
console.log("%c4.-Actualizacion de los valores de las propiedades de un objeto", style_console);
console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null,2));
Producto2.Disponibilidad="Si";
let nuevoTipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo de dato de la disponibilidad es:${nuevoTipoDisponibilidad}`)

//Convierte el Objeto a una cadena para evitar problemas con la referencia
console.log('Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado')
Producto=19000.00
console.log(`Los nuevos valores del producto son: `)
console.log(Producto2);









//Agregar nuevas propiedades a un objeto  existente
console.log("%c5.-Agregacion de propiedades de un objeto", style_console);
console.log("Objeto antes de ser modificado:")
console.table(Comprador);
//Agregando propiedades
Comprador['Direccion']= "Av. 05 de Mayo #25, interior 4A, Xicotepec de Juarez, Puebla,Mexico"
Comprador['Tipo']= "Premium"
Comprador['Estatus']= "Inactivo"
Comprador['TotalCompras']= 50000.00
console.log("Objetos despues de ser modificado")
console.table(Comprador)


//Eliminar propiedades de un objeto existente
console.log("%c6.- Eliminacion de propiedades de un objeto (MUTACION)", style_console)
console.log("Objeto antes de ser modificado")


console.table(Pedido)
//Eliminamos la propiedad de Tipó de pedido
delete Pedido.Tipopago;
console.log("Objeto despues de ser modifcado")
console.table(Pedido)


console.log("%c7.- Métodos para controlar la mutabilidad de los objetos, Congelacion (FREEZE)", style_console);

//Si deseamos permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el metodo FREEZE (congelar)

console.log('La estructura atual del objeto Comprador es: ' );
console.table(Comprador)
Object.freeze(Comprador)
//Inteneramos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra= "05/09/2024 10:15:25"
delete Comprador.Tipo
Comprador.Direccion = "Calle 16 de septiembre #102, col. Manantiales, Huachinango, Puebla,Mexico";
console.log('Verificamos si se realizaron los cambios en el objeto Comprador: ')
console.table(Comprador)


console.log("%c8.- Metodos para controlar la mutailidad de lo Objetos, Sellado (SEAL",style_console);
// Si embargo, en el caso que deseamos podeer podificar los valores de las propiedades del Objeto, pero no su estructura, usaremos SEAL
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido['FechaPedido']="25/09/2024 11:05:13"
delete Pedido['Cantidad']
console.log('Vericamnos si realizaron los cambios en el objeto PEDIDO')
console.table(Pedido);
// Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad= 12
console.log('Verificamos si se realizaron los cambios en el objeto Pedido')
console.table(Pedido)


//Operaciones sobre objetos

//Desustructuracion de 2 o mas objetos 
console.log("%c9. - Desestructuracion de 2 o mas objetos", style_console);

const {Precio:productoPrecio,SKU: ProductoSKU, Marca: ProductoMarca}=Producto;
const {Correo:clientecorreo,PaisdeOrigen: clientePais, SaldoActual:clientesaldo, Tipo: clienteTipo}=Comprador;

//Transformar valores cuantitativos en cualitativos
if(productoPrecio>2000)
    productoPrecio="Esta carisimo"
else
productoPrecio="Baratisimo"


if(clientesaldo>0)
    clientesaldo="A favor"
else if(clientesaldo<0)
clientesaldo="En contra"
else
clientesaldo="Sin deuda"

// Transformar valores cualitativos en cuantitativos
let clienteNivel;

if(cliente=="Premium")
    clienteNivel=1
if(cliente=="Freemium")
    clienteNivel=2

if(cliente=="No identificado")
    clienteNivel=3


//Clasificamos al cliente por su País de origen

if(clientePais=="Mexico")
clientePais="Nacional"
else
clientePais="Extranjero"



// OLE - Object Literal Ennhacemnet



let datosClientePromociones ={clientecorreo, clientePais, clienteNivel, clientesaldo,ProductoMarca,ProductoPrecio
}


//El nuevo objeto que creamos seria un ejemplo de la informacion que enviaremos al area de Marketing para la difusion de promociones

console.log("Los datos del cliente y sus habitos de compra son: ")
console.table(datosClientePromociones)







/*
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
console.log("%c1.-Objetos", style_console);

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