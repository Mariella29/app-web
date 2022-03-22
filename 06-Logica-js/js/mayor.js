var n1 = prompt ("Introduzca primer número:");
        var n2 = prompt ("Introduzca segundo número: ");
        var n3 = prompt ("Introduzca tercer número: ");
        console.log (n1, n2, n3);
        if (n1 > n2) {
            if (n1 > n3) {
                alert("El mayor es: " + n1);                                             
            } else {
                alert("el mayor es: " + n3);     
            }
        } else if (n2 > n3) {
            alert("el mayor es: " + n2);
        } else {
            alert("el mayor es: " + n3);
        }
    

