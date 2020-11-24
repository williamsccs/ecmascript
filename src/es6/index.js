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

//template literal

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//------------------------------------