const ourFirstPromise = new Promise(function (resolve, reject) {
    const today = new Date();
    resolve(today);
    // reject("this is error")
    // }, 1000);
});

ourFirstPromise.then(function (today) {
    console.log("Current date:" + today);
});

ourFirstPromise.catch((errorTest) => {
    console.log(errorTest);
})