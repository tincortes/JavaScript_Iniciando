/*var sumatorio;
var sum1=5;
var sum2=4;
resultado= sum1+sum2;
console.log("la suma es : "+resultado);
 */

/*
function sumar(num1,num2){
    sumatorio=num1+num2;
    console.log("la suma es : "+sumatorio);
}

var suma1=3;
var suma2=4;
sumar(suma1,suma2);*/

/*
function calcularPrecio(precio, impuestos) {
var portes = 10;
  var precioImpuestos = (1 + impuestos / 100) * precio;
var precioTotal = precioImpuestos + portes;
return precioTotal;
}

var precioTotal = calcularPrecio(23.34, 16);
console.log(precioTotal);
var otroPrecioTotal = calcularPrecio(15.2, 4);
console.log(otroPrecioTotal);
*/

//variable local, esta funcion no hara nada por estar mal escrita

/*
function mensaje() {
  var mensaje = "saludos";
}
mensaje();
console.log(mensaje); */

//esta si funcionara por tener el mensaje dentro de la funcion
/*
function mensaje() {
  var mensaje = "saludos";
  console.log(mensaje);  // estando dentro de la funcion 
}
mensaje(); */

/*
var mensaje = "saludos";

function muestraMensaje() {
  console.log(mensaje);
}
muestraMensaje();
*/


//variables globales y loscales


/*var mensaje = "soy global";

function muestraMensaje(){
    var mensaje="soy local";
console.log(mensaje)
}
console.log(mensaje);
muestraMensaje();
console.log(mensaje);*/

/*
var mensaje = "soy global";

function muestraMensaje(){
     mensaje="soy local";
console.log(mensaje)
}
console.log(mensaje);
muestraMensaje();
console.log(mensaje);*/


