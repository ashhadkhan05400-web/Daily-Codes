console.log("array js is running ");


let array = ["ali", true, 55, null, undefined]
console.log(array[4]);

for (let i = 0; i < array.length; i++) {
    if (array[i] == "Ali".toLowerCase()) {
        console.log(array[i]);

    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] == 55) {
        console.log(array[i]);

    }
}

let nums = [54, 78, 23, 89, 100]
nums.filter((harry) => {
    if (harry % 2 == 0) {
        console.log(harry);

    }

})

nums.find((harryfirst) => {
    if (harryfirst % 3 == 0) {
        console.log(`${harryfirst}`);

    }
})

const students = [
    { name: "Ali", marks: [80, 90, 70] },
    { name: "Sara", marks: [60, 55, 40] },
    { name: "Zain", marks: [95, 100, 90] },
    { name: "Hina", marks: [30, 45, 50] },
];

function allfucntionality() {
    let st1mark = [60, 55, 40];
    let sum = st1mark.reduce((acc, currentvalue) => acc + currentvalue, 0)
    let avergare = sum / st1mark.length
    console.log(`Sara average ==> ${Math.floor(avergare)}`);

}

allfucntionality()