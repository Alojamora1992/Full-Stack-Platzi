//Arrays destructuring.

let fruits = ['apple', 'banana'];
let[a,b] = fruits; //destructuring.
console.log(a,b);

//Object destructuring

let user = { username: 'Carlos', age: 34 };
let {username, age} = user;
console.log(username, age);

//Spread Operator.

let person = {name: 'Carlos', job: 'QA Engineer', age: 30};
let country = 'Colombian';
let data = { id: 1, ...person,country};
console.log(data);

//rest

function sum ( num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,4,5,6,7,8);