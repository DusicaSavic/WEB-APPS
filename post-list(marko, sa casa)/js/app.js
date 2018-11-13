import * as data from "./data.js";
import * as ui from "./ui.js";

const init = () => {
    console.log("App initialized");

    // fetch data from internet
    data.fetchData(handleSuccess, handleError);

}

function handleSuccess(postList) {
    // console.log("myData controller", postList);
    ui.displayPosts(postList);
}

function handleError() {
    // ui.displayError();

}

export {
    init
}