console.log(`dummy js is running`);

function callapi(id) {

    fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => {
            console.log(res);
            return res.json()

        })
        .then((result) => {
            let data = result;
            console.log(`${data.firstName}  ${data.lastName}  ${data.age}`);

        })
}
callapi(19)



//question - 1
fetch(`https://dummyjson.com/products/1`)
    .then((res) => {
        console.log(res);
        return res.json()

    })
    .then((data) => {
        console.log(data);
        console.log(`${data.price} $ it is ${data.title}`);

    })

//question - 2
fetch(`https://dummyjson.com/recipes/8`)
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then((data) => {
        console.log(data);
        console.log(`${data.cookTimeMinutes}`);

    })


//question - 3
fetch(`https://dummyjson.com/products/`)
    .then((res) => {
        console.log(res);
        return res.json()
    })
    .then((datatotal) => {
        console.log(datatotal.products);

    })


//question - 4
fetch(`https://dummyjson.com/products/`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let callTittles = data.products.map(product => product.title)
        console.log(callTittles);

    })


//question - 5

function callUserEmails(tellid) {
    fetch(`https://dummyjson.com/users/${tellid}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data.email);

        })

}
callUserEmails(20)

//question - 6
fetch(`https://dummyjson.com/products/category/smartphones`)
    .then((mobile) => {
        return mobile.json()
    })
    .then((data) => {
        let namelog = data.products.map(mobile => mobile.title)
        console.log(namelog);


    })

//question - 7
fetch(`https://dummyjson.com/products/`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let priceexp = data.products.filter((product) => {
            if (product.price > 500) {
                console.log(`${product.title} and its price is ${product.price}`);

            }
        })
    })

//question - 8
fetch(`https://dummyjson.com/users/`)
    .then((res) => {
        return res.json()
    })
    .then((tell) => {
        let find = tell.users.find(user => user.age > 30)
        console.log(find);

    })

fetch(`https://dummyjson.com/users/15`)
.then((res) => {
    return res.json()
})
.then((user) => {
    console.log(user.firstName , user.id);

   return fetch(`https://dummyjson.com/posts/user/${user.id}`)

    
})
.then((res) => {
    return res.json()
})
.then((result) => {
    console.log(result.posts);
    
})