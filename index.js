// console.log("Hello world",4+6,"Another log");
// console.warn("This is warning"); // used to write warnings
// console.error("This is error"); //used to write errors
// console.assert(4==4); // need to check

//const { response } = require("express");

//3. Javascrpt variables: variables are container to store values

var number1 = 34;
var number2 = 54;
// console.log(number1+number2);

// 4. Data types in Js
//numbers
var num1 = 45;
var num2 = 56;
//strings
var str1 = "Vivek is a good guy";
var str2 = "This is string data type";
//objects
var marks = {
    Ravi: 300,
    Vishal: 400,
    Vivek: 599
}
//boolean
var bool1 = true;
var bool2 = false;
// console.log(bool1,bool2);

//undefined
//var und=undefined;
// default value of any variable is undefined in js
// var und;
// var null1=null;
// console.log(und);
// console.log(null1);

/*At a very high level we can know there are two types of data types in js
1. Primitive DT: null, undefined, numbers,strings,boolean,symbols(concept of advance js)
2. Reference DT: Array,objects
*/

var arr = [1, 2, 3, 4, 5];
// console.log(arr);

//Arithmetic operators
var a = 10;
var b = 20;
// console.log("This is a+b=", a + b);
// console.log("This is a-b=", a - b);
// console.log("This is a*b=", a * b);
// console.log("This is a/b=", a / b);

// assignment operators
a -= 2;
b += 10;
// console.log(a,b);
//comparision operators
// console.log(a>=2);
// console.log(b<=3);

//Logical AND operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical OR operators 
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical Not
// console.log(!false);
// console.log(!true);

//Note: IN chrome console numbers appears in blue colour and test appears in black colors


//conditionals 
//- if-else
//- if-elseif
//Loops
//-for loop
//-ForEach Loop
var arr1 = [1, 2, 3, 4, 5];
// console.log("For Each loop");
arr1.forEach(function (element) {
    // console.log(element);
})

let j = 0;
// let is used for blocked scope, if a variable is declared inside a function using let then that can't be accessed outside of that 
// function.
const ac = 10; // If we want some variable should not be changed or can be changed accidentally then we declare variable as const.
// It can't be modified.
//ac = ac + 1;  // this line will throw an error.
// console.log("const ac=", ac + 1);

//Array in js

// let arr2=[1,"fan","mouse",null,undefined];
// console.log(arr2.push("Laptop"));
// arr2.push("Charger"); // to add an element at the end of the array
// console.log("After Push:",arr2);
// arr2.pop(); //to remove an element from end of an array
// console.log("After pop:",arr2);
// console.log(arr2.shift()); // shift removes first element from an array and return the value of it
// console.log(arr2.unshift("3")); // unshift insert an element at the beginning of an array and return the length of the array
// There are othere methods refernces for array to modify array element present in any index using splice method

//String and methods

var str1 = "Harry is a good boy good good";
// console.log(str1.length);
// console.log(str1.indexOf("good"));
// console.log(str1.lastIndexOf("good"));
// console.log(str1.replace("Harry","Rohan"));

//Date methods

var date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMonth());
// console.log(date.getMinutes());

// DOM Manipulation

let container_cls = document.getElementsByClassName("container");
container_cls[1].classList.add("bg-primary");

let child1 = document.createElement("P"); // createElement method is used to create a new element
child1.innerText = "This is 2nd child paragraph";
container_cls[1].appendChild(child1); // appendChild method is used to append a new child to an element 
let child2 = document.createElement("b");
child2.innerText = "This is bold element content";
container_cls[1].replaceChild(child2, child1); // replace child methods is used to repalce childNode of an element with another child node

// console.log(document.links); // it will give collection of all links available in the page
// console.log(document.URL); // it will give the URL address of the page
// console.log(document.title); // it will give title of the html page
// console.log(document.scripts); // it will give list of scripts added in the html page
// console.log(document.images); // it will give collection of all images present in the page
// console.log(document.domain); // it will give only ip address with https and url


// selecting using query
let sel = document.querySelector(".container");  // it will give the first element contains .container className, we can also give 
// id instead of className
// console.log(sel);

let selAll = document.querySelectorAll(".container"); // it will give the list of all elements contains .container className
// console.log(selAll);


// EVENT Handling

//In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object.
//  What distinguishes them from other objects is that functions can be called. 
// In brief, they are Function objects.
function Clicked() {
    console.log("Button was clicked");
}

window.onload = function () {
    console.log("Window was loaded");
}
//event handlers
FirstContainer.addEventListener("mouseover", function () {
    console.log("mouse over happen");
});

FirstContainer.addEventListener("mouseout", function () {
    console.log("mouse out happen");
});
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
FirstContainer.addEventListener("mousedown", function () {
    console.log("mouse down happen");
    document.querySelectorAll('.container')[1].innerHTML = "<p>This is changed content</p>";
});
FirstContainer.addEventListener("mouseup", function () {
    console.log("mouse up happen");
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
});

CallMe = () => {
    console.log("I am on call me");
}

let clr = setTimeout(CallMe, 2000); // it execute the function only once when page will be loaded, clr returns an id of this timeout interval
// which can be used to clear this timout methods if we dont want to get it executed.

console.log(clr);

clr = setInterval(CallMe, 1000); // setInterval is used if we want some code to be executed repetedly after someinterval then we use it.
// to stop this calling use clr id.
clearInterval(clr); // clearInterval will stop the execution of the setInterval function, SetInterval will be called only once then it will be stopped

//Local Storage: localstorage is a kind of storage which is present in every domain, it size is very less.

localStorage.setItem('name', 'vivek');  // used to set an item in or store some valaue locally into the browser domain.
console.log(localStorage.getItem('name')); // used to fetch the value of the localstorage item.
localStorage.removeItem('name'); // used to remove an item from localstorage.
localStorage.setItem('Id', '255');
console.log(localStorage);
localStorage.clear();// it is used to clear the localstrorage.

//JSON FORMAT: it is 

obj = {
    name: "vivek",
    job: "Project Engineer",
    workdone: function () {
        console.log("To Develop and handle ericsson sites");
    }
};
let obj2 = {
    "name": "Rahul",
    "job": "Senior Developer at google",
    "location": "Bangalore"
};
jso = JSON.stringify(obj);   // stringify method of JSON is used to convert json objects into strings this is called serialization.
// converting string into JSON object is called deserialization.
// console.log(jso.split(":"));
// console.log(typeof(jso));
// console.log(typeof(obj));
// console.log(typeof(obj2));
// obj.workdone();
// let jsoObject=JSON.parse(jso); // converting string into JSON object is called deserialization.
// console.log(jsoObject);
// console.log(typeof(jsoObject));
// console.log(jsoObject.name);


//js versions
//ES5,6,7,8,etc.. are versions ECMA is an standard to maintain the java scripts updates and features. When a new version of ECMA script is 
// released few features are deprecated and new additional features are added.

//backtics: with the help of backtics feature we don't need to add comma or + operator to display value of a variable.

let abc = 34;
// console.log(`this is a value${abc}`);

const ownersName = "vivek";
// console.log(ownersName);
// ownersName="Sharma";

const arr23 = [1, 2, 3, 4];
arr23.push(5);
// arr=[5,6];

//type conversion and type coercoin

// console.log("Type conversion and type coercoin");
// let myVar;
// myVar=String(34);
// console.log(myVar, (typeof myVar));

// myVar=String([1,2,3,5,6]);
// console.log(myVar,(typeof myVar));

// let myStr=Number("3443");
// let mystr2=Number('3D');
// console.log(myStr,(typeof myStr));
// console.log(mystr2,(typeof mystr2));
// let numvar="1234";
// let numvar2=Number(numvar);
// console.log(numvar2,(typeof numvar2));


// let floatvar=parseFloat('34.550');
// console.log(floatvar.toFixed(3));

//type coercoin: it is a concept of behaviors of variable when we do operations on it.
// for ex:
// if we add two numbers or we add two strings, or one string with one num




// let strVar1="1234";
// let numVar4=123;
// console.log(strVar1+numVar4);
// // here if add one string with a number then output will always be a string
// // if we add two integers and output will always be an integer.

// let numVar5=345;
// let numRes=numVar5+numVar4;

// console.log(numRes, (typeof numRes));

// //Array and objects
// const markArr=[1,2,3,4,5];
// let markArr2=[10,11,12,13];
// markArr=markArr2.concat([7,8,9]);
// console.log(markArr);

// let myobj={
//     name:'vivek',
//     branch:'Computer Science',
//     Designation:'Project Engineer',
//     Location:'Hyderabad',
//     Project:'CPI'
// }
// console.log(myobj);
// console.log(myobj['name']);
// console.log(myobj.Designation);

//selectors in js
//getElementById()
//getElementsByClassName()
//getElementByTagName()
//document.querySelector()
//document.querySelectorAll()

// traversing on DOM element

// let cNodes=document.querySelector('.container_obj');
// console.log(cNodes);

// console.log(cNodes.childNodes); //childNodes function gives list of all childs like text, elements, attributes etc.
// console.log(cNodes.children);  // chiildren function gives only list of all child Elements. It will not include textNodes and attributes.
// console.log(cNodes.childNodes[1].lastChild); //firstChild and lastChild function can give text nodes 
// console.log(cNodes.childNodes[1].firstElementChild); // firstElementChild or lastElementChild gives elements and igone text nodes
// console.log(cNodes.childNodes[1].childElementCount); // give you total number of childElements

// console.log(cNodes.childNodes[1].firstElementChild.nextElementSibling); // it gives next sibling of the current element.


//localStorage and sessionStorage
// localStorage and sessionStorage are storage objects which helps to store data locally in browser
//   localStorage.setItem('Name','vivek');
//   localStorage.setItem('Designation','Project Engineer');
//   //console.log(localStorage.getItem('Name'));
//   //console.log(localStorage.getItem('Designation'));
//  //console.log(localStorage.removeItem('Name'));

//  let sabzi=["aalo","Payaz","Bhindi"];
//   localStorage.setItem('sabzi',JSON.stringify(sabzi)); // stringify method is used to convert array into string so that it can be easy to store it in browser.
//   console.log(JSON.parse(localStorage.getItem('sabzi'))); // parse method convert string into array. so that it will be easy to do operations on it.


// // // //Session Storage: session storage data is removed when user close the browser but local storage data is stored permanent. There is no 
// // // // expiry date for local storage data, even if user close browser it data will be saved, user can view its data on opening the site next time.
//   sessionStorage.setItem('sName','sRahul');
//   sessionStorage.setItem('sDesignation','sSenior Developer');
//   console.log(sessionStorage.getItem('sName'));

// object literals, object oriented programming in js

//example of object literals
// var car={
//     name:'Nisan',
//     topSpeed:190,
//     run:function(){
//         console.log(`${this.name} car is running at speed ${this.topSpeed}`);
//     }
// }

// object creation using constructor

// GenerateCar=function (name,speed){   // this function is being used as a constructor for creating new car objects
//     this.name=name,
//     this.speed=speed,
//     this.run=function(){
//         console.log(`${this.name} car is running at speed ${this.speed}`);
//     }

// }

// car1=new GenerateCar('Mercedes','500');  // here we are creating object dynamically using constructor
// car2=new GenerateCar('BMW','400');
// car1.run();
// car2.run();

// function declartions 

//Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
//  You can use the function before you declared it:

// hoisted(); // logs "foo"

// function hoisted() {
//   console.log('foo');
// }


// Note that function expressions are not hoisted:

// notHoisted(); // TypeError: notHoisted is not a function

// var notHoisted = function() {
//    console.log('bar');
// };



//The function name. Can be omitted, in which case the function becomes known as an anonymous function.

// Here is an example of an anonymous function expression (the name is not used):

// var myFunction = function() {
//     statements
// }


//arrow functions

// let arrowF=()=>{let i=0; console.log(`arrow function is calling i=${i}`)}
// arrowF();

// Traditional Anonymous Function
// function (a){
//     return a + 100;
//   }

//   // Arrow Function Break Down

//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }

//   // 2. Remove the body braces and word "return" -- the return is implied.
//   (a) => a + 100;

//   // 3. Remove the argument parentheses
//   a => a + 100;
//   Copy to Clipboard
//   The { braces } and ( parentheses ) and "return" are required in some cases.

//   For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:

// Arrow Function with parameters
// (a, b) => {
//     let chuck = 42;
//     return a + b + chuck;
//   }


//object.prototype: when we create objects at the same few already defined properties are also associated with the object, which we can use

// let objPro = {
//     firstName: 'Vivek',
//     lastName: 'Sharma'
// }

// function generateObj(firstName, lastName) { // by using constructor we can create more objects
//     this.firstName = firstName,
//         this.lastName = lastName
// }

// let objPro2 = new generateObj('Mercedes', 'Benz');
// generateObj.prototype.setObjName = function (firstName, lastName) { // if function is created using constructor then only we can use objects prototype properties to add new function or properties to the object's prototype 
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// generateObj.prototype.getObjName = function () {
//     return (this.firstName);
// }

// // console.log(objPro2);

// //Note: we can add new functions to the global parent object's prototype but it will be a risk because when user creates new object
// // that function will be part every new object. Hence, it should be avoided
// // this is an example of creating proto
// const proto = {
//     slogan: function () {
//         console.log(`This is slogan regards${this.name}`);
//     },
//     changeName: function (name) {
//         this.name = name;
//     }
// }

// let newObjeP = Object.create(proto);  // creating object using Object.create function and passing poto argument will set prototypes
// newObjeP.name = "Harry";
// newObjeP.salary = 200000;

// // this object can also be created using another syntax
// const newObjP2 = Object.create(proto, {
//     name: { value: "suresh", writable: true },
//     role: { value: "programmer" }
// });

// console.log(newObjP2);

// //prototype inheritance

// function Employee(name, salary, experience) {
//     this.name = name,
//         this.salary = salary,
//         this.experience = experience
// }
// revision done 10/09/2022
// Employee.prototype.slogan = function () {
//     console.log(`This company is best regards,${this.name}`)
// }

// let emp1 = new Employee('Rakesh', 2, 0);

// console.log(emp1);

// function Programmer(name, salary, experience, language) {
//     Employee.call(this, name, salary, experience);  // accessing the constructor of Employee objects
//     this.language = language;
// }

// // this is the way to inherit prototype
// Programmer.prototype = Object.create(Employee.prototype);

// Programmer.prototype.constructor = Programmer;

// let prog1 = new Programmer('kusum', 20000, 2, 'Javascript');
// //=========================================================//

// // ES6 classes and Inheritance

// class Employee1 {  // syntax to create any class in js
//     constructor(name, salary, role, depart, experience) {  // constructor
//         this.name = name;
//         this.salary = salary;
//         this.role = role;
//         this.depart = depart;
//         this.experience = experience;
//     }

//     slogan() {  // member functions it can be viewed inside prototype
//         console.log(`${this.depart} is best department to work regards ${this.name} `);
//     }

//     joiningYear() {
//         console.log(`joined in this ${2022 - this.experience} year`);
//     }

//     static feedback() { // static fuction can be access without object only className is enough
//         console.log(`This company work life balance is best`);
//     }


// }

// class Programmer1 extends Employee1 { // inheritance of class using extends keywords
//     constructor(name, salary, role, depart, experience, language) {  // constructor
//         super(name, salary, role, depart, experience); // using super keyword to inherit parent class constuctor
//         this.language = language;
//     }

//     favoriteLang() {
//         if (this.language == "Python") {
//             console.log(`favorite Language is ${this.language}`);
//         }
//         else {
//             console.log(`favorite Language is JavaScript`);
//         }
//     }
// }

// let Prog = new Programmer1('Rohan', 230000, 'Developer', 'R&D', 3, 'Java');   // creating new objects

// // CallBack function: It is function which take another function as as an argument and operate on it.

// let Students = [
//     { name: 'Ravi', standard: '5th' },
//     { name: 'Rakesh', standard: '7th' }
// ];

// function getStudents(Students) {  // function will start execution after 1sec
//     setTimeout(function () {
//         let str = "";
//         Students.forEach(function (student) {
//             str += " " + student.name;
//         });
//         console.log(`List of students +${str}`);
//     }, 1000);
// }

// function setStudents(student, getStudents) { // function will start execution after 2sec count
//     setTimeout(function () {
//         Students.push(student);
//         getStudents(Students); // this function call will be called only when all statements present inside this setTimeout will be finshed then this call will start
//     }, 2000);

// }
// let newStudent = { name: 'Kamlesh', standard: '10th' };
// setStudents(newStudent, getStudents);


// setTimeout function helps in situation where server takes time to add data in database and fetching of elements are very fast.
// and we are parallely adding and presenting data into live site.
// we can push fetch function inside timeout of add function 

// 
//===============================Promises=================================//

//Promises: when we use promises then it return 2 parameters or state 
// 1. resolve: specific function process is completed...
//2. reject: specific function process is rejected...
//3. pending: funtion is being processed...

//post completion of these resolve/reject we can use define some function or statments which will be called once functional process is
// is resolved or reject.
// 

//resolve: it is the function inside then()
// reject: it is function inside catch() 

// let accountBal = 10000;
// let depAmount = 5000;
// function deposit(amount) {
//     return new Promise(function (resolve, reject) {
//         if (amount >= 1000) {
//             // console.log("deposit request is being resolved...");
//             resolve(amount);

//         }
//         else {
//             // console.log("deposit request is being rejected...");
//             reject();
//         }
//     })
// }


// function withdraw(wAmount) {
//     return new Promise(function (resolve, reject) {
//         if (accountBal >= wAmount) {
//             // console.log("withdraw requset is being resolved...");
//             resolve(wAmount);
//         }
//         else {
//             // console.log("withdraw request is being rejected...");
//             reject();
//         }
//     })
// }

// function Deposited() {
//     dAmount = depAmount;
//     accountBal = accountBal + dAmount;
//     // console.log("Deposit Successful");
//     // console.log(`Current Balance is ${accountBal}`);
// }

// function withDrawAmt(withAmt) {
//     accountBal = accountBal - withAmt;
//     // console.log(`Current Balance is ${accountBal}`);
// }



// deposit(depAmount).then(Deposited).catch(function () {
//     // console.log("Amount is less than 1000")
// });

// let wdAmount = 1200;
// withdraw(wdAmount).then(withDrawAmt(wdAmount)).catch(function () {
//     //   console.log("Insufficient Balance");
// })

//================== Fetch APIs=========================//

// instead of using xhr object for get and post request we can use fetch api
// we can user lesss code for both GET/POST request


// function getData() {  // get request using fetch api
//     // console.log("started getData");

//     let url = "test.txt";   // here we are not passing any additional parameter for method hence it is get request.

//     fetch(url).then((response) => {   // here we need to use then 2 times once to collect response and second to access data.
//         // console.log("first then is started");
//         return response.text()
//     }).then((data) => {
//         // console.log("second then is started");
//         // console.log(data);
//     })
// }
//  fetch(url).then((response) => {
//     return response.text();
// }).then((data) =>{
//     console.log(data);
// })
// // console.log("before calling getData");
// getData();
// console.log("After calling getData");


// collecting json data with get fetch api get request
// function getData() {  // get request using fetch api
//     // console.log("started getData");

//     let url = "https://api.github.com/users";   // here we are not passing any additional parameter for method hence it is get request.

//     fetch(url).then((response) => {   // here we need to use then 2 times once to collect response and second to access data.
//         // console.log("first then is started");
//         return response.json()   //fetching response as a json object otherwise it will be in string format
//     }).then((data) => {
//         // console.log("second then is started");
//         // console.log(data);
//     })
// }
// // console.log("before calling getData");
// getData();
// // console.log("After calling getData");


// POST request method

// function postData() {  // post request using fetch api
//     console.log("started postData");

//     let url = "https://reqres.in/api/users";   // here we are passing additional parameters method:post hence it is post request.
//     data = '{ "name": "morpheus","job": "leader"}'; // along with post request we are also sending data
//     let params = {
//         method: 'post',  //we are sending post request.
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: data   // we are passing input data
//     }

//     fetch(url, params).then(response => response.json()   // here we need to use then 2 times once to collect response and second to access data.

//         //fetching response as a json object otherwise it will be in string format
//     ).then((data) => {
//         // console.log("second then is started");
//         // console.log(data);
//     })
// }
// // console.log("before calling postData");
// postData();
// // console.log("After calling postData");


//=================== Async/Await==========================//

async function harry() {   // this is asyncronous function  it will not block execution of other function or statements present inside the file.
    // async function always return a promise, Note: we can use async await to overcome the issue of fetchAPI where we have to user two times "then" which is bit confusing.
    let url = 'https://reqres.in/api/users'
    let data = '{ "name": "morpheus","job": "leader"}'
    let param = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }
    // let response = await fetch(url, param);   // when await statment is encountered by the async function it stop the execution of the function and go outside and excute rest of the file content.
    // // console.log("response fetched");     // all statements below await will be on hold until await statement does not complete.
    // let respD = await response.json();
    // // console.log("data collected");
    // return respD;
}

//console.log("before calling harry");
// let res_data = harry();                   // since this is async function with await statments it will let statment below this function call executed.
// console.log("After calling harry");
// console.log(res_data);
// res_data.then(data => console.log(data));   // since async always return a promise so we need to apply "then" to check the received response.
// console.log("last statement of execution");


// try-catch statements
let tcVar;
try {

    // console.log("inside try block");
    if (tcVar == undefined) {
        throw new Error('tcVar is undefined throwing error manually');  // we use throw new Error to manually throw user generated 
        //errrors, when throw statement is encountered in a function rest of statements present inside a function will terminated and not executed.
        // Note: we use throw in a situation where response received from the server is not proper or unexpected then there is no meaning to execute
        // rest of the function. hence rest exeution will be terminated. 
    }

    calling_func();
}

catch (error) {
    // console.log(error.name);  // it display name of error for example: referenceError.
    // console.log(error.message); // it display message of error for example: calling_func is not defined
    //Note when we display on name and message it does not give the details about at which line error is present.
    // so we should use error or atleast one parameter variable inside catch to display the complete details about the error

}

finally {
    // console.log("inside finally block it will be excuted whether their are any error or not");
}


// asynchronous java script
//Difference between synchronous and asynchronous java script
// synchronous js: When only single operation excute once, when statement exeutes back to back or one by one, for example if we need to update 3 files and each file will be updated 
// only if previous file is already updated. so untill previous is not updated 2nd and 3rd file updation process will not start.
// in this case our cpu may go on idle state.
// so we don't want to keep our system in idle state, and we want to excute our other file updation parallely so that time can be reduced.

// for(let i=0;i<4000;i++){
//     console.log("synchronous execution:"+i);
// }
// console.log("synchronous execution end");

// Hence, we use asynchronous java script.

// In case of Asynchrous js execution of other file is not stopped all things run in paralllel in background along with other statments in the js file of your website and does not block the code or file.
// in async call multiple operations run at the same time. which reduce the overall excution time and cpu utilization also increases.

//Asynchronous js behaviour can be achieved by following 3 methods:
// 1. SetTimeout
//2. Async/Await
//3. callbacks


/*setTimeout(()=>{ for(let i=0;i<4;i++){
     console.log("Asynchronous execution:"+i);
 }
},1);
 console.log("Asynchronous execution continue with next line");
 console.log("Asynchronous execution continue with next line");
 console.log("Asynchronous execution continue with next line");
 console.log("Asynchronous execution continue with next line");

 for(let j=0;j<1000;j++){
    console.log("testing when asych will start execution");
 }

 for(let j=0;j<1000;j++){
    console.log("testing when asych will start execution");
 }*/

//setTimeout function can be used for asynch programming, when this statement is found by the js engine, it will jump to the next statment in the file and execute it when all execution will be finished then after 1 milisec it will
// it will execute statements present in setTimeout function.


// Ajax: Asynchronous java script with xml.

// Ajax is a set of technologies javascript +xml
// it is mainly use to send asynchronous request to the server and get data.
// it helps in fetching data asychnronously withour interferring with existing page.
// No refresh/reload of page is required to change any specific dom.
// Modern websites uses json rather than xml format.

// why we use?
// no refresh/reload
// better user experience.
// saves network bandwith.
// very interactive.

// How it works?
// Ajax uses XMLHttpRequest object to achieve this.
// Modern websites use JSON instead XML for data transfer, reason is human readiblity is better in JSON than xml.
// Data can be transferred in any format and protocol(not always https necessarily).

// code for AJAX GET request, we should never send data with GET request, becasue it will be visible to the hackers.
// Alaways user POST request to send data to the server. which is safe request
// we should never send synchronous request to our server because if data is not received then it will block the execution of rest of the file.


//  let coffeeVar=document.getElementById("coffee");
//  coffeeVar.addEventListener("click",fetchCoffee);

//  function fetchCoffee(){
//     console.log("You have ordered for a coffee, Thank You!");
//     const xhr=new XMLHttpRequest();  // creaing  XMLHttpRequest or xhr object.
//     xhr.open('GET','coffeeItem.txt',true); // opening object, 1st argument mode of request, 2nd argument url/filename to hit request,
//     // 3rd argument true- asynchronous request, false- synchronous request.

//     xhr.onprogress=function(){  // when xhr object status will be in progress state then this function will be executed.
//         console.log("Please wait, Your coffee is being prepared...")
//     }

//     xhr.onreadystatechange=function(){
//         console.log("ready state:"+xhr.readyState);
//     }

//     xhr.onload=function(){  // when xhr response is received from server or file.
//         if(this.status==200){   // http response code, if 200 means response is ok.
//             alert("Your coffee is ready Have a nice coffee!");
//             console.log(` Please have a look on Easy steps to enjoy coffee at home, ${this.responseText}`);
//         }
//     }


//     xhr.send(); // sending request to server.


//  }

//POST AJAX request

let lemonVar = document.getElementById('lemon');
lemonVar.addEventListener("click", fetLemon);

function fetLemon() {
    console.log("You have ordered for lemon Thank You!");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/users', true);  // here we are Sending post request to the server 
    xhr.getResponseHeader('content-type', 'application/json'); // in which format we will get the response.
    let params = '{"name": "morpheus123","job": "leader"}'; // input data which we want to send with this request.


    //let url='https://reqres.in/api/users'
    xhr.onprogress = function () {  // when xhr object status will be in progress state then this function will be executed.
        console.log("Please wait, Your lemon is being prepared...")
    }

    xhr.onreadystatechange = function () {
        console.log("ready state:" + xhr.readyState);
    }

    xhr.onload = function () {  // when xhr response is received from server or file.
        if (this.status == 201) {   // http response code, if 200 means response is ok. but here 200 response is not received so checked for 201 status
            alert("Your lemon is ready Have a nice lemon!");
            console.log(` Please have a look on you details, ${this.responseText}`);
        }
    }
    xhr.send(params);
}


// regular experession
//Basics
//let reg = /harry/; // regular expression literal.
let reg = /harry/gi; // regular expression literal.
let str = "This code is written by HarRy he is best programmer he is harry";
// console.log(reg); // it prints the exact regex pattern
// console.log(reg.source); // it print the date pattern string written between two "/"
 let result = reg.exec(str);  // exec function return an array which contains matched index postion, and input we provided, and what is matched harry or HaRry 
 console.log(result);

// console.log(result);
// console.log(result.input);
// console.log(result.index);

let resultTest = reg.test(str); // test function return true or false if pattern is present in the input string.
// console.log("resultTest", resultTest);

//https://www.youtube.com/watch?v=3IhQF4-HQdo&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=46

//14:51

let result3 = str.match(reg); // match will return an array of results or null, if we are using "gi" parameters also then result will contain more than one result and returns match of more than one string
// console.log("Result of match function", result3);

let result4 = str.search(reg); // it return index of first match else -1
// console.log("result of search", result4);

// metacharacter symbols in regex

let regex1 = /^harry/; // carat '^' symbol at the begining of regex then it search for if a string starts with the characters in the regex for ex: harry.
let regex2 = /harray$/; // it maches if a string ends with the characters present inside the regex2.
let regex3 = /h.rry/; // here in place of '.' any character can be considers for match.
let regex4 = /ha?rry?/g; // ? means the character followed by ? will be optional for matching.
let regex5 = /h\*rry/g; // \* means maching * or special characters in regex we use \* create a pattern for match.
let regexString = "harry searches for harray in hrr and h*rry";

let resultM1 = regexString.match(regex1);
let resultM2 = regexString.match(regex2);
let resultM3 = regexString.match(regex3);
let resultM4 = regexString.match(regex4);
let resultM5 = regexString.match(regex5);
console.log("match with \* symbol", resultM5);

// character sets in regex

let regexcSet = /h[a-zA-Z0-9]rry/g;  // this pattern search for any character from a-z or A-Z or 0-9 after h in the input string.
regexcSet = /h[a-zA-Z0-9]rr[^Z]/g;  // this pattern search for any character from z-z or A-z or 0-9 after h and after 'rr' thier can be any 
// character except 'Z'

regexcSet = /h[^abc][^r]ry/g;  // [^abc] means there can be any character except a,b,c 
let regStr = "harry is h0rry and also known as hZrry so hBZry";
regStr = "harry is h0rry and also known as hZrrZ so hBZry";

let resultC1 = regStr.match(regexcSet);

// console.log("character set result 1", resultC1);
// Quantifier

let regexQ = /har{2}y/g; // this pattern will match for exactly 2 'r' character after ha if exist then print the matched string

regexQ = /har{3}y/g; // exactly 3 'r' should be present in this pattern else it will return null if not matched.
regexQ = /har{0,2}y/g; // 'r' can occur 0 or 1 or 2 times in this pattern else it will return null if not matched.
regStr = "hary is brother of harry and sister of hay";  // pattern will only match if there will be ha then 1 r 2r or 0r but there should be atleast
// character at that index in case of 0r oherwise it will not be matched
let resultQ = regStr.match(regexQ);

// console.log("result after using quantifier", resultQ);

// // Groupings: we use parenthesis for grouping.
// regexQ = /(har){0,2}([a-z0-9A-Z]){3}y/g;
// regStr="harharabcy"
// resultQ=regexQ.exec(regStr);
// console.log("result after using grouping with quantifier", resultQ);

// for loop and for in loop

let objInLoop={
    name:'vivek',
    age:'24',
    role:'developer'
}
// Traditional for loop

// for(let key=0;key<Object.keys(objInLoop).length;key++){
//     console.log(objInLoop[Object.keys(objInLoop)[key]]);
// }


// for in loop, help to diretly iterate on object or string, Note: here objInLoop.key will not work
// for in we use to iterate on object and fetch key and values. using for in on object will directly give keys name, using which
// user can access values.
// for(key in objInLoop){
//     console.log(`${key}=${objInLoop[key]}`);
// }



// use of for in on string will give index of the characters in the string.

let strInLoop="This is for in loop";
// for(let char1 in strInLoop){
//     console.log(strInLoop[char1]);
// }

// for of loop is used to directly access the values from array or string rather than index

let arrOfLoop=['Rakesh','Mohan','Ravi','Ramesh'];

 for(let name of arrOfLoop){
     console.log(name);
 }

// for(let chars of strInLoop){
//     console.log(chars);
// }

//Note: object can be iterated using of loop


// Structuring and Destructuring
//1. Array
console.log("********concept of structuring********");  
let [a1,b1,c1]=[10,20,30]; // here all variable will be set with corresponding value of array
console.log(a1,b1,c1);

let [x1,y1,...z1]=['rakesh','ramesh','suresh','Harish'];  // in this type of structuring if array contains more elements than varaibles
// in list then rest of the elements in array will be assigned to last variable as an object or array.
console.log(x1,y1,z1);
//2. object
console.log("objects structuring");
let p,q,r,s;
({p,q,r,...s}={a:20,b:40,c:50,d:70,e:30});
console.log(p,q,r,s);


//Destructuring

//1. Array
let Fruits=['Banana','Apple','Guava'];
let [f1,f2,f3]=Fruits;
// console.log("Array destructuring");
// console.log(f1,f2,f3);

//2. object Destructuring

let objDest={
    name1:'Nobita',
    role1:'Speaker',
    Salary1:40000,
    job:function(){
        // console.log("focus on your work");
    }
}



let {name1, role1, Salary1,job} = objDest;
// console.log("Object Destructuring");
// console.log(name1,role1,Salary1);
job();

// map in js: map is a collection of element where each element is represented as key value pair
// Map object can hold both objects and primitive values as either key or value. 
// When we iterate over the map object it returns the key, value pair in the same order as inserted.

let mapobj=new Map();  // creating new map object

let key1="firstkey",key2={},key3=function(){}; // assinging key variable to be used as key

// setting values to the keys
mapobj.set(key1,"This is first key of mapset"); 
mapobj.set(key2,"This is second key value of mapset");
mapobj.set(key3,"This is third key value of mapset");

// console.log(mapobj);

// using for of loop to display all keys
// console.log("All keys of the mapobj:");
for (keys of mapobj.keys()){  // keys function return a map iterator object of all keys present inside the key

    // console.log(keys);
}
// using for of loop to display all values
console.log("All values of the mapobj:")
for(values of mapobj.values()){  // values function return a map iterator object of all values present inside the map
//    console.log(values);
}
// iterating map object using for each loop
console.log("iterating over mapobj using for each loop")
mapobj.forEach((value,key)=>{ 
    // console.log(key,"=",value);
})

//iterating on mapobje with key value combined
console.log("for of loop iterating with key value pair on mapobj");
for(let[key,value] of mapobj){
    // console.log(key,value);
}


console.log(mapobj.get(key1)); // get function return the value of the key 

console.log(mapobj.has(key2)); // has function is used to check if the key exists in map or not

// set objects: set is collection of element which stores unique elements only. duplicate elements are not allowed

var setobj=new Set();  // Set() method is used to create new setobject
console.log("empty set is created");

setobj.add("first");  // add method is used to add elements in set
setobj.add("Second");
setobj.add("third");
console.log("set elements");
console.log(setobj);

console.log("Size of set is ",setobj.size); // size is member variable in set objects which store count of total no of elements

console.log("set elements before delete",setobj);  
console.log("set elements after delete",setobj.delete("third"),setobj);  // delete method is used to delete one element from set, it return true after deletion.
console.log("second element present in set?",setobj.has("Second")); // has function is used to check existence of an element in object.
// iteration is pending


for(var element of setobj){
    console.log(element);
}
console.log("display set elements using for each loop")
setobj.forEach((element)=>{
    console.log(element)
})

//Ques: can we convert array into set and vice-versa
let setobj2= new Set([1,45,"this","that",{a:4,b:5}]);
console.log(setobj2);

let arrayset=[1,2,3,4,4,5];
let arrConvSet=new Set(arrayset);  // creating set from array using Set method and passing array as parameter
console.log(arrConvSet);

arrayset=Array.from(arrConvSet);  // creating Array from set object by passsing set object as an argument inside .from method
console.log(arrayset);

// symbol is a primitive data type like others e.g. integer, character,etc.
// symbols can be used to crate unique keys for ojects.
// when we compare two symbol literals they are not same. they are different irrespective of
// their same content

const key11=Symbol("key11");
const key12=Symbol("key12");

myobjSym={};
myobjSym[key11]="Value of key1";
myobjSym[key12]="Value of key2";

console.log("object created with symbols keys");
console.log(myobjSym); // it will display both key and value

// here we are only displaying values assigned to keys
console.log(myobjSym[key11]); 
console.log(myobjSym[key12]);
const key13=Symbol("key13");
const key14=Symbol("key13");
const key15=Symbol();
const key16=Symbol();



    //console.log(key13===key14);
    console.log(key15===key16); // both are different












































