const API = 'https://jsonplaceholder.typicode.com/posts';

const fetchData = (onSuccess, onError) => {


    var request = new XMLHttpRequest();
    request.open('GET', 'URL_HERE', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();
}
