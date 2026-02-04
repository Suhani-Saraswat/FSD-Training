let x=5;
let y=10;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x%y);

//If Else
let age=20;        
if (age>=18){
    console.log("yes");
}
else {
    console.log("no");
}

//Array
let arr=[10,20,30,40,50]; 
console.log(arr[0]);
arr.push[60];
arr.pop();
console.log(arr);

//Object
let students={
    name:"Riya",
    age:32
};

//Funstion
function add(p,q){
    return p+q;
}
console.log(add(5,7));

//arrow function 
const multiply=(p,q) =>p*q;
console.log("Arrow function",multiply(5,10));

//date
let today=new Date();
console.log(today);

//math module
console.log(Math.sqrt(2));
console.log(Math.random());

//string
txt="hello world";
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());
console.log(txt.includes("html"));

//type conversion
let strnum="123";
let convert=Number(strnum);
console.log(convert+10);

