var x = 2.60;//Global variable
let y = 30;//Block variable
const z = 40;//Block variable constant - can't be redefined
/*

const addTwoNumbers = (p1, p2) => {
    console.log(p1, p2);
    let num1 = p1 || 10;
    let num2 = p2 || 10;
    let sum = num1 + num2;
    console.log(`The sum of two numbers is: ${sum}`);
    console.log(`The value of parameter1 is: ${p1}`);
    console.log(`The value of parameter2 is: ${p2}`);
};

addTwoNumbers(10, 50);
addTwoNumbers(40, 50);
addTwoNumbers();

console.log(typeof a);*/

let a = 10;
let b = "2";
console.log(a/b);
console.log(2 === "2");

let c = [1, 2, 3, "ass"];
let d = [1, 2, 3, "ass"];
console.log(c[0] === d[0]);

let arr = [1, 2, 3, 4, 5, 6];

//For loop: - the for loop changes the array directly
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + i;
}

//For each loop:
arr.forEach((element, index) => {
    console.log(element, index);
});

//Map
arr.map((element, index) => {
    console.log(element, index);
})

//Map - new array - map creates a new array instead of changing the existing one
let aa = arr.map((element, index) => {
    return element + index;
});

//Map - new array - shorter way
let aaa = arr.map((element, index) => element + index);

console.log(arr);
console.log(aa);
console.log(aaa);