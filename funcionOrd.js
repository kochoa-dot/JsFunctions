function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    const fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextFib = fibSeq[i - 1] + fibSeq[i - 2];
        fibSeq.push(nextFib);
    }

    return fibSeq;
}

const n = 10; // Cambia n a la cantidad de números de Fibonacci que deseas generar
const fibSeries = fibonacci(n);
console.log(fibSeries);
