console.log("local storage");


let obj = {
    id: "01",
    name: "ali",
    details : [
        "i am pro footballer and  love to code and building something from 0"
    ]
}

let arr = [
    "laptop", "phone"
]
localStorage.setItem("User1", JSON.stringify(obj))
localStorage.setItem("User2", obj)
localStorage.setItem("products", arr)
localStorage.setItem("user1details", JSON.stringify(obj.details))

console.log(localStorage.getItem("User1"));


document.getElementById("btn").addEventListener("click" , ()=>{
    localStorage.setItem("btn" , "btn clicked")
})

function random(){
    let randoo = Math.floor(Math.random() * 8)
    localStorage.setItem("random value" , randoo)
}
random()

console.log( localStorage.getItem("random value"));
 