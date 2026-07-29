console.log(`js is running`);


class person{
    constructor(name , age){
        this.name = name;
        this.age = age
    }

    greet(){
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
        
    }

    say(){
        console.log(`Say my name!!`);
        
    }

    good(){
        console.log(`You are god damn right!`);
        
    }

}
let p1 = new person("Sahil" , "15")
console.log(p1);
p1.greet()
p1.say()
console.log(`Sahil`);
p1.good()