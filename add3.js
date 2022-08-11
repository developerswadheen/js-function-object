function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(23, 17);
const result2 = add(22, 15);
const finalResult = add(result1, result2);
console.log(finalResult);