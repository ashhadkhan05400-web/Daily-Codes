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
    let average = sum / st1mark.length
    console.log(`Sara average ==> ${Math.floor(average)}`);

    if (average < 50) {
        console.log(`${students[1].name} is failed`);

    }

    let distinationlist = []

    students.filter((all) => {
        let sum = all.marks.reduce((acc, currentvalue) => acc + currentvalue, 0)
        let average = sum / all.marks.length

        if (average < 80) {
            console.log(`${all.name} name is put in the distination list `);
            distinationlist.push(all.name)
        }


    })
    console.log(distinationlist);

    students.filter((hihgest) => {
        let sum = hihgest.marks.reduce((acc, currentvalue) => acc + currentvalue, 0)
        let average = sum / hihgest.marks.length
        let hihgestave = 90;

        if (average > hihgestave) {
            console.log(`${hihgest.name} you have the hihgest average`);
            console.log(`${hihgest.name} prcentage is ${average}`);

        }
    })

    let join = students.map((student) => student.name).join(",")
    console.log(students);
    
}

allfucntionality()