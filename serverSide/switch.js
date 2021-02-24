//SWITCH: SE USA PARA ESTABLECER CONDICIONES
var abono = "Joven";
switch (abono) {
    case "Joven":
        importe = 29.5;
        break;
    case "normal":
        importe = 40;
        break;
    case "viejo":
        importe = 80;
        break;
    default:
        importe = 12;
        break;
}
console.log(importe)//imprime el caso dado

