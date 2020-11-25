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
//------------------------------------
//------------------------------------
