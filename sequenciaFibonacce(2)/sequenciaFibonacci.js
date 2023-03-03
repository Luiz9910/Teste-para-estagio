function fibonacci(number) {
    let a = 0;
    let b = 1;
    let c = 0;
    let sequence = [0,1];

    for (let i = 0; i < number; i++) {
        c = a + b;
        a = b;
        b = c;
        sequence.push(c);
    }

    sequence.includes(number);

    if (sequence.includes(number)) {
        return `O número ${number} pertece a sequência de Fibonacci`;
    } else {
        return `O número ${number} não pertece a sequência de Fibonacci`;
    }
}

console.log(fibonacci(13));
console.log(fibonacci(12));