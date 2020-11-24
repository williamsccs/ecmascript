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

//propiedad de objetos mejorada

let name = 'oscar';
let age = 23 ;

//es5
obj = {name: name, age: age};

//es6

obj2= {name, age};

console.log(obj2);
//------------------------------------

//arrow function
const names = [
    { name: 'Williams', age:32},
    { name: 'Yessica', age:27}
]

//esto recorre el array, crea uno nuevo con el .map y muestra cada uno

//es5
let listOfNames = names.map(function (item){
    console.log(item.name);
})

//es6

let listOfNames2 = names.map(item => console.log(item.name))

//arrow function con varios parametros
const listOfNames3 = (name, age, country) => {
    //aqui iria el codigo
}
//arrow function con un solo parametro
const listOfNames4 = name =>{
    //aqui iria el codigo
}
//mucho mas sencilla de escribir con un solo parametro 
const square = num => num * num;
//------------------------------------

//promises

//es6

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true){ //cambiar a false para probarlo
            resolve('Hey!')//la promesa  respondio correctamente
        }
        else{
            reject('Ups!!')//la promesa no respondio correctamente
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(console.log('Jelou')) //ejemplo de que podemos agregar varios .then
    .catch(error => console.log(error))


//------------------------------------

//class es6 (tambien tienen herencia)

class calculator{
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB; 
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));
//------------------------------------

//import

import hello  from './module';

console.log(hello());


//------------------------------------

//generators es6

//(averiguar que son los generator y que demonios son los yield)

function* hellowWorld() {
    if(true){
        yield 'Hello';
    }

    if(true){
        yield 'World';
    }
}

    const generatorHello = helloWorld();

    //averiguar como hacer funcionar esto en vscode
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);

//------------------------------------


