console.log("i did it");

// VARIABLE AND DATA TYPES

//1. Use a LET statement
 //let carName = "Volvo";

 //2. We can change the value of a variable by giving it a new value eg; carName = "Toyota"

 //3. By changing the name of variable

 //4. Creating a variable is called "declaring " a variable, eg: let = or var =
 // Assigning a variable is giving it a name  eg: let name =
 // Define is when you give it a value eg let name = "john doe"


//5. Psuedocode is a detailed yet readable description of what a computer program or 
//algorithm must do, expressed in a formally-styled natural language rather than in a programming language.

//6. Thinking/planning and psuedocoding about 70% and coding about 30%


//Strings

//1. let firstVariable = 'Hello World';
     firstVariable = 123;
     secondVariable = 'how are you';
     firstVariable = secondVariable

     console.log(firstVariable);
// prints  "how are you"

//2 let yourName = "Adnan";
console.log("hello, my name is ". yourName);

// Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false == false == false == false == false == false == true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a < b < c);
console.log(a + a < d);
console.log(48 == '48');

// The Farm

let animal = "cow";
if(animal === "cow"){
    console.log('Mooooo')
}
else{
    console.log("Hey! You're not a cow.")
}

// Driver's Ed

let age = 20;
if(age <= 16){
    console.log("here are the keys");
        
    }
else{ 
    console.log("sorry, you are too young");

}

// Loops
// The basics
//1. 
for(let i = 0; i <= 10; i ++){
console.log(i);
}

//2.
for (let i = 10; i <= 400; i++){
    console.log(i);
}

for(let i = 12; i <= 4000; i +=3){
    console.log(i); 
}

// Get Even
for(let i = 0; i <= 100; i +=2){
    console.log(i + "is an even number")
}

// give me five{
for(let i = 0; i <= 100; i++){
    if (i % 5 === 0){
    
    console.log(i +  " High five "); 
} else if (i % 3 === 0){
    console.log("I found a number " + i + ". Three is a crowd." );
}
else{
    console.log("I found a number"+ i);
}
}

// Savings Account

let bankAccount = 0
for(i = 0; i <= 10; i++){
    bankAccount = bankAccount + i;
}
console.log(bankAccount);

let doublePay = 0;
for(i = 0; i <= 100; i++){
    doublePay = (doublePay + (2 * i));
}
console.log(doublePay);

// Multiples of 3 and 5

// Done Previously


// Arrays and acontrol flow
//1. things in an array are elements
//2. Yes arrays gurantee things will be in order
//3. toyotaModels = ["corolla", "camry","Tacoma","Thundra","Rav4"];

// Easy does it
// let quotes = [“So many books so little time”,"time is money","knowledge is poer"];

//Accessing Elements
const randomThings = [1, 10, "Hello", true]
//1. put its index number after the arrays name
randomThings[1];
//2.
randomThings[2] = "World";
console.log(randomThings);

//Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1. ourClass[2]
ourClass[3] = "";
ourClass[4] = "Octocat";
ourClass.push("Cloudcity");

console.log(ourClass);

//Mix it up
const myArray = [5, 10, 500, 20]
myArray.push("Egon");
myArray.push("moon");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
Array.prototype.reverse(myArray);

console.log(myArray);

//Biggie Smalls
var checkNumber = 550;

if(checkNumber <= 100){
    console.log("Small Number");
}
else{
    console.log("Big Number");
}

//Monkey in the middle
let num = 50;

if(num < 5){
    console.log("Little Number");
}
else if(num > 10){
    console.log("big Number");
}
else{
    console.log("Monkey");
}

// What's in your closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log("Krystyn is rocking that " + kristynsCloset[2] + " today.");

  kristynsCloset.push("raybans");

  kristynsCloset[5] = "Stained knit had";

  console.log("Thom is rocking that " + (thomsCloset[0])[0] + " today");
  console.log("Thom is rocking that " + (thomsCloset[1])[0] + " today");
  console.log("Thom is rocking that " + (thomsCloset[2])[1] + " today");

  console.log("Thom is rocking his outfit with " + (thomsCloset[0])[0] + ", " + (thomsCloset[1])[0] + " and " + (thomsCloset[2])[0] + " today");

  (thomsCloset[1])[2] = "Footie Pajamas";

  // Functions
  // Print Greeting
  function printGreeting(name){
    return "Hello there, " + name;
  }
  console.log(printGreeting("Slimer"));

  //printCool
  function printCool(name){
    return name + " is cool";
  }
  console.log(printCool("Captain Reynolds"));

  //Calculate Cube
  function calculateCube(number){
      return number * number * number;
  }
  console.log(calculateCube(5))

  //isVowel

function isVowel(letter){
    if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
        return true;
    }
    else{
        return false;
    }
}

console.log(isVowel("A"));

//getTwoLengths
function getTwoLengths(string1, string2){
    return [string1.length, string2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//getMultipleLengths

function getMultipleLengths([]){
    return array3.length;
}

//console.log(array3["hello", "what", "up"]);

//maxOfThree
function maxOfThree(num1, num2, num3){
   return Math.max(num1, num2, num3)
}

console.log(maxOfThree(6, 9, 1));

//printLongestWord
const printLongestWord = (strArray) => {
    let longestWordIndex = 0;
      let longest = 0;
        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i].length > longest) {
                longestWordIndex = i;
                longest = strArray[i].length;
            }
        }
        return strArray[longestWordIndex];
    }
    
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

    //transmogrify

function transmogrify(firstNum, secondNum, thirdNum){
    return Math.pow(firstNum * secondNum, thirdNum)
}

console.log(transmogrify(5, 3, 2));


//get down and dirty with math.random

function randomNumber(){
    for(i = 1; i <= 10; i++){
        return Math.random(randomNumber * 10);
    }
}
console.log(randomNumber());


//Objects
//Make a user object

const user = {
    name: "wolverine",
    email: "wolverine@marvels.com",
    age: 300,
    purchased: [],
}

console.log(user);

//Update the user
user.email = "wolverine@marvels.com";
user.age = user.age + 1;


//Adding keys and values

user.location = "marvels";


//Shopaholic
user.purchased.push("Carbohydrates");
user.purchased.push("Peace of mind");
user.purchased.push("Merino jodhpurs")

console.log(user.purchased[2]);

console.log(user);

//Object Within Object
user.friend = {
    name: "Hulk",
    age: 40,
    location: "headquarters",
    purchased: [],

}

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;

user.friend.purchased = ["the one ring"];
user.friend.purchased.push("A Latte");

console.log(user);
console.log(user.friend.purchased[1]);


//Loops
for(let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

for(let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}


//functins can operate on objects
function updateUser(){
    let userAge = 0;
    for(let i = 0; i < 15; i++){
        userAge = userAge + 1;
        return userAge
    }
}
console.log(updateUser(3));