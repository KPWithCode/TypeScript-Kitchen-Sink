let name = 'Zed';

const usstates = '50';

var sum = 5 + 4;
console.log(sum);


// Added if else statment sot that if name stats 
// with letter after L and alert of Back of the line is displayed
if (name.charCodeAt(0) >= 77) {
    alert('Back of the line chump!');
} else {
    alert('Next!');
}
// sayHello function
function sayHello(Phone) {
    alert(Phone);
}
sayHello('Samsung');
sayHello('Apple');

function add(water, juice) {
    (water + juice)
    return name
}
let myNum = add(21, 19);
console.log(myNum);


//checkAge function[]

let names = ['Charles', 'Abby', 'James', 'John'];

function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry ${name} you aren't old enough to view this page!`);
    } else {
        alert('Come on in Budster');
    }
}

checkAge(names[0], 21);
checkAge(names[1], 27);
checkAge(names[2], 18);
checkAge(names[3], 17);


// Array for favorite Vegetables & 
// Use a loop to display each of your favorite vegetables 
// to the developer console.

var favVeggies = ['Carrots', 'Radish', 'Cabbage', 'Lettuce'];

for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);

}

// Create an array of 5 objects that contain name and age properties.

let ThemePark = [{
        name: 'Clyde',
        age: 23
    },
    {
        name: 'Aaron',
        age: 14
    },
    {
        name: 'Ashley',
        age: 19
    },
    {
        name: 'Vincent',
        age: 34
    },
    {
        name: 'Ryan',
        age: 26
    }
];

// Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.

function checkAge(name, age) {

    if (age < 21) {
        alert(`Sorry ${name,age} you STILL aren't old enough to view this page!`);
    } else {
        alert('WELCOME TO BIKINI BOTTOM');
    }
}

checkAge(ThemePark[0], 23);
checkAge(ThemePark[1], 14);
checkAge(ThemePark[2], 19);
checkAge(ThemePark[3], 34);
checkAge(ThemePark[4], 26);


// getLength that takes any word as an argument
function getLength(greeting)    {
   
    return(greeting.length)
}

getLength("HelloWorld");
// Store the returned result of that function in a variable.
// Check the number in the variable from the previous objective. 
// Find out if it;s odd or even
let stored = getLength("HelloWorld");   {
    if("HelloWorld" %2 ==0) {
        alert(`The World Is Nice & Even`);
    }   else   {
        alert(`The World Is An Odd Place`);

    }
}