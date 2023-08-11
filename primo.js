function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

const numero = 17; // Cambia este valor al número que desees verificar

if (esPrimo(numero)) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}