console.log(`fn js is running`);

function total(a, x, sums) {
    sums(a, x)
}
total(10, 6, (n1, n2) => {
    let calcu = n1 - n2;
    console.log(`Hi user this is the total ${calcu}`);

})

function counter() {
    let count = 0;

    return function increment() {
        count++
        console.log(count);

    }
    increment()

}
let inc = counter()
let call = counter()
inc()
inc()
call()
counter()()

function dontTell() {
    let secret = "hidden"
    let reveal = "nothing 🤣🤣"

    function donot() {
        console.log(`${secret}`);

    }

    function tell() {
        console.log(`${reveal}`);

    }

    return { donot, tell };
}
let { donot, tell } = dontTell()
console.log(tell());
console.log(donot());

let nums = [3, 4, 6, 8, 9, 12, 42, 23]
let totals = nums.filter((n) => {
    console.log(n % 2 == 0);

})
let mapp = nums.map((n) => {
    console.log(n * 10);

})

function repeat(n , action){
for(let i = 0; i < n; i++){
action(i)
}
}
repeat(3 , (i) => console.log(`Runs ${i}`))