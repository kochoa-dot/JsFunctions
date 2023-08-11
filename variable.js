/*
* diferencias entre var - let - const
* var tiene un scope de funcion quiere decir que su variable puede ser usada en todo su scope
* quiere decir que puede ser usado en todo el scope de la funcion let tiene un scope de bloque
* quiere decir que solo puede ser usada si la definimos dentro del bloque que en este caso es el for
* siempre queremos trabajar con las variables que tengan el scope mas acotado posible
* La principal variable de let y const es que a const no se le puede reasignar un valor es decir que
* si nosotros declaramos una constante despues no podemos redefinirla en cambio si lo hacemos con let
* aclaracion: si nosotros tenemos una constante no podemos reasignar el valor de una constante si vamos
* a poder cambiar lo que tiene dentro si es un arreglo de un objeto const no es inmutable simplemente no
* se puede redefinir
* siempre que podamos vamos a utilizar const y si vamos a utilizar una variable que va a cambiar con el tiempo
* podemos usar let y usamos var nunca
* */

function variables(){
    var j = "contratado";

    for (var j = 0; j < 2; j++) {
        //
        //
        //
    }
    console.log(j);
}

variables();