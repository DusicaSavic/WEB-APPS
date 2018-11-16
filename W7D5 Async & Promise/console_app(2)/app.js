const arrOfPromises = [];

for (let i = 0; i < 100; i++) {
    arrOfPromises.push(new Promise((resolve, reject) => {
        let id = i;
        let interval = Math.floor(Math.random() * 500)
        setTimeout(function () {
            resolve(interval);
        }, interval);
    })
        .then((successMessage) => {
            // console.log(successMessage);
        }))
}

Promise.all(arrOfPromises).then(function () {
    console.log("All promises are completed");
})

console.log(arrOfPromises[0].resolve);




// let promise = new Promise((resolve, reject) => {
//     let interval = Math.floor(Math.random() * 500)
//     setTimeout(function () {
//         resolve(interval);
//     }, interval);
// })
//     .then((successMessage) => {
//         // console.log(successMessage);
//     });

// console.log(promise.resolve);