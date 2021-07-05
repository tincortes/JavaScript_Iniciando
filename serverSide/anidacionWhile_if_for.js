//EXAMPLE anidamiento de bucle (while, if and for)
var mensaje1 = "esta es la vuelta nuemro  ",
    mensaje2 = " de nuestra bucle ";
i = 1;
while (i <= 5) { 
    console.log(mensaje1 + i + mensaje2);
    if (i == 5) { //
        for (var v = 1; v <= 4; v++) {
            console.log("esta es la vuelta numero cinco y voy a decir esto tres veces mas");
        }
    }
    i++;
}
