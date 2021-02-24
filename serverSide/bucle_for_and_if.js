var mensaje = " Esta es la vuelta número ", mensaje2 = " de nuestro bucle FOR";
for (var i = 1; i <= 5; i++) {
    console.log(mensaje + i + mensaje2);
    if (i == 4) {
        for (var v = 1; v <= 3; v++) {
            if (v == 1) {
                console.log("esta es la vuelta "+i+" de un FOR anidado y voy a decir esto 2 veces mas");
            } else {
                console.log("esta es la vuelta "+i+" de un FOR anidado");
            }
        }
    }
}