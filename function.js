//const multiply = (x,y) => { return x * y }
//console.log(multiply(5, 10))


//const getMaxValue = (a, b) => a > b ? a : b;
//let result = getMaxValue(10, 20);
//console.log("ค่าที่มากที่สุดคือ:", result);

//Task10
const multiply = (x, y) => { return x * y }
console.log(multiply(5, 10))
module.exports = {
    multiply
};

const greet = function greet(name){
    return 'Hello ' + name
}
console.log(greet('John'))
module.exports = {
    greet
}