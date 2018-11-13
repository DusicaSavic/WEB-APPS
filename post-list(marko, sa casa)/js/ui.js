

const displayPosts = (data) => {

    const $ulElem = document.querySelector(".posts");

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        const $li = document.createElement("li");
        $li.textContent = `${post.id}. ${post.title}`;
        $ulElem.appendChild($li);
    }

}

export { displayPosts };