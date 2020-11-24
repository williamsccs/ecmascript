//------------------------------------
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'AR';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'oscar', age = 32, country = 'AR'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Williams', '36', 'VE');

//------------------------------------

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//template literal es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//------------------------------------

let lorem = 'antes asi se hacian \n'
+ 'las frases multilinea'

//template literal es6

let lorem2 = `ahora las multilineas se puede agregar
solo con darle "enter" y funciona igual`;

console.log(lorem);
console.log(lorem2);

//------------------------------------

//destructuracion de elementos

let person={
    'name': 'oscar',
    'age': '32',
    'country': 'Mx'
}
console.log(person.name, person.age, person.country);

// es6

let { name, age, country } = person;

console.log(name, age, country);
console.log(name, age);
//------------------------------------

//operador de propagacion

let team1 = ['Williams', 'Jesus','Amluy'];
let team2 = ['Jessica', 'Karla','Daniela'];

//es6

let education = ['David', ...team1, ...team2];

console.log(education);
//------------------------------------

// var y let, const, diferencias del scope

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);// aqui si funciona
}

console.log(globalVar);
console.log(globalLet);// aqui no funciona

const a = 'B';
a = 'A';
console.log(a);
//------------------------------------
//------------------------------------
//------------------------------------
//------------------------------------
