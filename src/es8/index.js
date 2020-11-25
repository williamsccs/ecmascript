//------------------------------------

//Object entries,

const data = {
    frontend:'williams',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
//console.log(data);
console.log(entries.length);
//------------------------------------

//objeect value

const data = {
    frontend:'williams',
    backend: 'Isabel',
    design: 'Ana',
}

const value = Object.values(data)
console.log(value);
console.log(value.length);
//------------------------------------

//padding

const string = 'hello';

console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));

console.log('food'.padEnd(12,'  -----'));
//------------------------------------

//Trailing-Comas

const obj = {
    name: 'oscar', //el trailin coma es que puedo poner una comar al final y no explota
}
//------------------------------------

// async-await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        //(false)
        ? setTimeout(() => resolve('HelloWorld'), 3000)
        : reject(new Error ('Test Error'))
    })
} 

const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();
//------------------------------------
//leer el articulo de abajo porfavor
//------------------------------------
//https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/