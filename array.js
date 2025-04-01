//map method
/*
const arrs = [1, 2, 3, 4, 5];

const newArr = arrs.map(arr => {
    return arr * arr;
});
console.log(`The newArr is = ${newArr}`);*/

//filter method
/*
const arrs = [1, 2, 3, 4, 5];

const newArr = arrs.filter(arr => {
    return arr < 4;
});
console.log(`The newArr is = ${newArr}`);*/

//filter method
/*
const students = [
    {
        name: " Tamanna",
        age: 25,
        gender: "female",
        country: "Bangladesh"
    },
    {
        name: "riya",
        age: 28,
        gender: "female",
        country: "Bangladesh"
    },
    {
        name: " Rumon",
        age: 30,
        gender: "male",
        country: "Singapur"
    },
    {
        name: " riyad",
        age: 25,
        gender: "ale",
        country: "spain"
    }

];

const std = students.filter(student => {
    return student.country === "spain";
});

console.log(std);
*/

//map method
//map using for each value
/*
const products = ['shoes', 'dress', 'shirt', 't-shirt'];
const newProducts = products.map(product => {
    return product.toUpperCase()
});
console.log(newProducts);
*/
//reduce method
//reduce returns one value
/*
const prices = [100, 200, 500, 345, 134, 450];

const totalPrice = prices.reduce((total, currentprice) => {
    return total += currentprice
});
console.log(`The total products price is== ${totalPrice}`);
console.log(totalPrice);
*/
/*
const students = [
    {
        name: " Tamanna",
        age: 25,
        gender: "female",
        country: "Bangladesh"
    },
    {
        name: "riya",
        age: 28,
        gender: "female",
        country: "Bangladesh"
    },
    {
        name: " Rumon",
        age: 30,
        gender: "male",
        country: "Singapur"
    },
    {
        name: " riyad",
        age: 25,
        gender: "male",
        country: "spain"
    }

];

students.sort((leftperson, rightperson) => {
    return rightperson.age - leftperson.age;
});


console.log(students);
*/
/*
let names = ['tiya', 'riya', 'piya', 'jiya', 'siya', 'fatiha'];
names.sort();
console.log(names);*/

//reverse method

let names = ['tiya', 'riya', 'piya', 'jiya', 'siya', 'fatiha'];
names.reverse();
console.log(names);

const numbers = [1, 3, 6, 9];
numbers.reverse();
console.log(numbers);