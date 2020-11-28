const {add} = require('./michal');
console.log("HEllo");

const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter(); 

eventEmitter.on('lunch', () => {
    console.log('yum 🍷');
})

eventEmitter.emit('lunch');
eventEmitter.emit('sleep!!!!');

const path = require('path');
const { readFile, readFileSync } = require('fs').promises;
const txt = ( async ()=> await readFile('./hello.txt', 'utf8'))();

console.log({txt});
console.log("koniec");

console.log("ADDD 4 + 5");
console.log(add(4,5));