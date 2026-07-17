console.log(`operaters js is running`);


let user = {
    name: "Ayesha",
    hobby: "making cool stuff ny coding",
    details : {
        profession: "Developer",
        exp: "1 year",
    }
}
let all = {...user}
all.name = "Ali"
all.details.exp = "6 months"
console.log(all);
console.log(user);
