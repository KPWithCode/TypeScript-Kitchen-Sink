let nameA: any = 'Zed';

const usstates = '50';

var sum = 5 + 4;
console.log(sum);


// Added if else statment sot that if name stats 
// with letter after L and alert of Back of the line is displayed
if (nameA.charCodeAt(0) >= 77) {
    alert('Back of the line chump!');
} else {
    alert('Next!');
}
// sayHello function
function sayHello(Phone: string) {
    alert(Phone);
}
sayHello('Samsung');
sayHello('Apple');

function add(water: number, juice: number) {
    (water + juice)
    return name
}
let myNum = add(21, 19);
console.log(myNum);


//checkAge function[]

let names = ['Charles', 'Abby', 'James', 'John'];

function checkMyAge(name: string, age: number): void {
    if (age < 21) {
        alert(`Sorry ${name} you aren't old enough to view this page!`);
    } else {
        alert('Come on in Budster');
    }
}

checkMyAge(names[0], 21);
checkMyAge(names[1], 27);
checkMyAge(names[2], 18);
checkMyAge(names[3], 17);


// Array for favorite Vegetables & 
// Use a loop to display each of your favorite vegetables 
// to the developer console.

var favVeggies = ['Carrots', 'Radish', 'Cabbage', 'Lettuce'];

for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);

}

// Create an array of 5 objects that contain name and age properties.
interface ThemePark {
    name: string;
    age: number;
}
let Person1: ThemePark = {
    name: 'Clyde',
    age: 23
};
let Person2: ThemePark = {
    name: 'Aaron',
    age: 14
}

let Person3: ThemePark = {
    name: 'Ashley',
    age: 19
}

let Person4: ThemePark = {
    name: 'Vincent',
    age: 34
}
let Person5: ThemePark = {
    name: 'Ryan',
    age: 26
};

// Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.

function checkAge(name: string, age: number) {

    if (age < 21) {
        alert(`Sorry + ${name},${age} you STILL aren't old enough to view this page!`);
    } else {
        alert('WELCOME TO BIKINI BOTTOM');
    }
}
let nameAge: Array<ThemePark> = [Person1,Person2,Person3, Person4, Person5]
for (let i: number = 0; i<nameAge.length; i++) {
    checkAge(nameAge[i].name, nameAge[i].age);
}




// getLength that takes any word as an argument
function getLength(greeting: any) {

    return (greeting.length)
}

getLength("HelloWorld");
// Store the returned result of that function in a variable.
// Check the number in the variable from the previous objective. 
// Find out if it;s odd or even
function getGreetLength(words: string) {
    if (words.length % 2 == 0) {
        alert(`The World Is Nice & Even`);
    } else {
        alert(`The World Is An Odd Place`);

    }
    console.log(words.length)
}
console.log(getGreetLength('hi mom'))