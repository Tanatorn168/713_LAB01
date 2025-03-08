const n = [1, 2, 3, 4, 5];
//const square = n.map((num) => num * num);
//console.log(square);

const even = n.filter((num) => num % 2 === 0);
console.log(even);

const processNumbers = (numbers) => {
    return numbers
        .filter(num => num % 3 ===0)
        .map(num => num**3)
}

const result = processNumbers(n);
console.log(result);