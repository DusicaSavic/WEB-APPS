for (let i = 0; i < 100; i++) {

    new Promise((resolve, reject) => {
        let id = i;
        let interval = Math.floor(Math.random() * 500);

        setTimeout(function () {
            resolve(id);
        }, interval);
    })
        .then((successMessage) => {
            console.log(successMessage);

        })

}



// const firstPromise = new Promise((resolve, reject) => {
//     const today = new Date();
//     setTimeout(function () {
//         resolve(`First promise ${today.getSeconds()}`);
//     }, 1000);
// });

// const secondPromise = new Promise((resolve, reject) => {
//     const today = new Date();
//     setTimeout(function () {
//         resolve("Second promise", today.getSeconds());
//     }, 500);
// });


// Promise.all([firstPromise, secondPromise])
//     .then(function (result) {
//         console.log(".......");
//         console.log("first", result[0]);
//         console.log("second", result[1]);
//         console.log("All finished");
//     });