//Tipos de Datos en JS


// 1.Undefined
console.warn("----- Tipo de dato Undefined---")
let cliente;


console.log(`El cliente es :  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente="Michelle Sanchez"

console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente="2005";
console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declarados


// 2. BOOLEAN

console.warn("------ Tipo de Dato Boleano - TRUE/FALSE");
let espremiun= "No lo se";
console.log(`¿Es el cliente premium?: ${espremiun}`);
console.log(`El tipo de dato de la variable espremiun es: ${typeof(espremiun)}`)


console.log('Asignando el valor "true" a la variable');
espremiun=true
console.log(`El tipo de dato de la variable espremiun es: ${typeof(espremiun)}`)
console.log(`¿Es el cliente premium?: ${espremiun}`);
console.log("Cambiamos el valor de espremium a false")
espremiun=false
if(espremiun)
    console.log("El cliente pago por usar el servicio.");
else
    console.log("El cliente que recibe los servicios gratuitos");







// 3. NUMBER

var cantidad
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;

let monto_transaccion 

console.warn("---Tipo de Dato --Number (Numeros,posuitivos, negativos, decimales, flotantes");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)})`);

console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)

cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es de: ${cantidad*costo_producto}`);

saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);

console.log(`Tu nuevo saldo es de : ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido reciido, tu nuevo saldo es de : ${saldo_cuenta+monto_transaccion}`);



// String o cadenas de texto


const alumno= "obed";
let producto ;
console.warn("--- Tipo de Dato - String (cadena de caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto=  'monitor 20 pulgadas'
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);
//Manipulando los Strings

console.log(`Más adelante podremos transformar el contenido de los Strings usando funcions especificas como convertir a mayusculas: ${alumno} =>${alumno.toUpperCase()}`);
console.log(`o en su dfecto a minisculas: ${producto} => ${producto.toLowerCase()}`);



// const numero = "30"
// const numero2= 30

// console.log(typeof numero)
// console.log(typeof numero2)

// BigInt (Enteros de Dimesnsiones amplias)- Generalmente en sistemas matematicos, fisicos o espaciales dpnde se requiere de una excelente precision numerica
// const numerogrande=  BigInt(918298193281887139831091038173813)
// console.log(typeof numerogrande)
console.warn("-----Tipo de Dato -BIGINT(numero amplio)");
const numerog= 123456789
const numerog2= 12345678901234567890
const numerog3= 123456789012345678901234567890
const numerog4= 1234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es: ${numerog}, que si es soportado por Number, y su tipo de datoa es: ${typeof(numerog)}`)


console.log(`El primer experimento de un numero grande es: ${numerog2}, que si es soportado por Number, y su tipo de datoa es: ${typeof(numerog2)}`)
console.log(`El primer experimento de un numero grande es: ${numerog3}, que si es soportado por Number, y su tipo de datoa es: ${typeof(numerog3)}`)
console.log(`El primer experimento de un numero grande es: ${numerog4}, que si es soportado por Number, y su tipo de datoa es: ${typeof(numerog4)}`)




// const numero= 10
// const numero2 =20

// console.log(numero + Number(numerogrande))



// const numero= "3030"
// const numero2= 30
// console.log(typeof String(numero2))
// console.log(typeof Number(numero))


// Symbol 
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)

// console.log(primerSymbol === segundoSymbol)

// console.log(primerSymbol.valueOf())
// console.log(segundoSymbol.valueOf())

//Null 

// const descuento = null
// console.log(typeof descuento)















