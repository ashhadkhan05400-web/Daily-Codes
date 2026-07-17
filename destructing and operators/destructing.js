console.log(`Destructing js is running `);
let colours = ["red", "green", "blue"];
let de = [colour1 , ...rest] = colours;
console.log(de);
console.log(`${colour1}  this is remining ${rest}`);

var nums = [5,8,2,6]
let [one , two , , three , four] = nums
console.log(four);

let x = 5 , y =20;
[x , y]  =  [y , x]
console.log(x , y);

let [p = 5 , q = 20] = ["undefined" , 0]
console.log(p , q);


let marks = {
    hihg : 90,
    mid : 84,
    mid2 : 81,
    mid3 : 76,
    low : 67,
}
let {hihg, ...restmarks} = marks;
console.log(hihg);
console.log(restmarks);

let pop = {
    name : "Micheal",
    lastname : "Jackson",
    hobby : "singing and dancing",
    knowas : "KING OF POP"
}

console.log(pop);
let open = {...pop};
console.log(pop);
open.lastname = "jack"
console.log(pop);
console.log(open);


