

const BASE_ENDPOINT = 'http://127.0.0.1:3000'

const fetchData = (onSuccess) => {
    // let onSuccess;

    fetch(BASE_ENDPOINT)
        .then(function (response) {
            return response.json();
            console.log(response)
        })
}


export {
    fetchData
}