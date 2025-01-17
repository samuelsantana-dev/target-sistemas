const readline = require('readline');

function isFibonacciNumber(n) {
    let a = 0, b = 1;
    while (a <= n) {
        if (a === n) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (fibonacciNumber) => {
    const number = Number(fibonacciNumber);
    
    console.log(
        isNaN(number)
            ? "Por favor, insira um número válido."
            : isFibonacciNumber(number)
            ? `O número ${number} pertence à sequência de Fibonacci.`
            : `O número ${number} NÃO pertence à sequência de Fibonacci.`
    );
    
    rl.close();
});
