console.log(`prototypes js is running`);


let animals = {
    normalAnimals: "eats , walks",
    rareanimal: "extint"
}

let rabbit = Object.create(animals)
console.log(rabbit);

let serbiantiger = {
    details: "white coloured tall tiger with long sharp teeths"
}
Object.setPrototypeOf(serbiantiger, animals)
console.log(serbiantiger);

function Person(name, age) {
    this.name = name;
    this.age = age
    this.greet()
}

Person.prototype.greet = function () {
    console.log(`Hello and welcome to oue store ${this.name}`);
}

console.log(new Person("Ali", 25))


function Laptop(ram, gpc, storage, processor) {
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpc;
    this.processor = processor;
    this.details()
}
Laptop.prototype.details = function () {
    console.log(`Its an very heavy task performer laptop has ${this.ram} ${this.storage} ${this.gpu} and ${this.processor}`);
}
let laptopcall = new Laptop("8gb", "RTX 4030", "1 tb storage", "I9 Intel processor")
console.log(laptopcall);
