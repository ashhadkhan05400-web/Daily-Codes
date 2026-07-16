console.log(`object js is running`);



let obj = {
    name: "Ayesha",
    gender: "female",
    details: {
        education: "12th passed",
        major: "commerce",
        profession : "UI/UX dessigner"
    },
    sibling : "3",
    bio : [
        "I am professional UI/UX designer and I play football in my free time"
    ]
}
console.log(obj);
localStorage.setItem("name" , JSON.stringify(obj.name))
console.log(Object.values(obj));


let objdetails = obj.details
console.log(objdetails);

let bracketnotation = obj["bio"]
console.log(bracketnotation);


let ask = Object.hasOwn(obj , "name")
console.log(ask);

let ask2 = Object.hasOwn(obj , "car")
console.log(ask2);

