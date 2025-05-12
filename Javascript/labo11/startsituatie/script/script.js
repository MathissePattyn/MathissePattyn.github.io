// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const setup = () => {
    laadFilms();
}

let likes = 0;
let dislikes = 0;

let likedMovies = [];
let dislikedMovies = [];

const dislike = (event) => {
    // let likebutton = document.querySelectorAll(".buttons .likebutton")[0];
    // likebutton.classList.remove("liked");

    event.currentTarget.classList.add("disliked");
    let movieId = event.currentTarget.getAttribute("data-id")-1;
    if(dislikedMovies.includes(movies[movieId].title)){
        return;
    }

    let indexLike = likedMovies.indexOf(movies[movieId].title);
    if (indexLike !== -1) {
        likedMovies.splice(indexLike, 1);
        likes--;
        document.getElementById("like").textContent = likes;
        toonLikedMovies();

        event.currentTarget.classList.remove("liked");
        // let dislikeButton = document.getElementsByClassName("liked")[indexLike];
        // dislikeButton.classList.remove("liked");
    }


    dislikedMovies.push(movies[movieId].title);
    dislikes++;

    document.getElementById("dislike").textContent = dislikes;
}

const like = (event) => {

    let movieId = event.currentTarget.getAttribute("data-id")-1;

    if(likedMovies.includes(movies[movieId].title)){
        return;
    }
    event.currentTarget.classList.add("liked");

    let index = dislikedMovies.indexOf(movies[movieId].title);
    if (index !== -1) {
        dislikedMovies.splice(index, 1);
        dislikes--;
        // icon.classList.remove("disliked");
        // let dislikeButton = document.getElementsByClassName("disliked")[index];
        // dislikeButton.classList.remove("disliked");

        document.getElementById("dislike").textContent = dislikes;
    }

    likes++;

    likedMovies.push(movies[movieId].title);
    document.getElementById("like").textContent = likes;

    console.log(likedMovies)
    toonLikedMovies();
}

const toonLikedMovies = () => {
    let likebar = document.getElementById("likebar");
    let likebarmovies = document.getElementById("likebarmovies");
    likebarmovies.innerHTML = "";

    if(likedMovies.length > 0){
        likebar.style.visibility = "visible";
    }

    for(let i = 0; i < likedMovies.length; i++) {
        let textNode = createElement("p", "movieTitle", likedMovies[i]);
        likebarmovies.appendChild(textNode);
    }
}

const laadFilms = () => {
    let movieList = document.getElementById('movielist');
    console.log(movieList);

    for (let i = 0; i < movies.length; i++) {
        let div = createElement("div", "movie");
        let title = createElement("p", "movieTitle", movies[i].title);
        let likeButton = createIconButton("fas fa-thumbs-up", "unset likebutton", like);
        likeButton.setAttribute("data-id", movies[i].id);
        let dislikeButton = createIconButton("fas fa-thumbs-down", "unset dislikebutton",  dislike);
        dislikeButton.setAttribute("data-id", movies[i].id);
        let buttons = createElement("div", "buttons");


        let img = createImage(movies[i].imageUrl, "img");

        let description = createDescription(movies[i].description);


        buttons.appendChild(likeButton);
        buttons.appendChild(dislikeButton);
        div.appendChild(title);
        div.appendChild(buttons);
        div.appendChild(img);
        div.appendChild(description);

        movieList.appendChild(div)
    }
};

const createImage = (src, alt) => {
    let img = createElement("img", "image");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    return img;
}

const createDescription = (text) => {
    let p = createElement("p", "description", text);
    return p;
}

const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};


// const createElementWithClass = (element, className) => {
//     let e = document.createElement(element);
//     e.classList.add(className);
//     return e;
// }
//
// const createElementWithClassAndText = (element, className, text) =>{
//     let e = createElementWithClass(element, className);
//     e.appendChild(document.createTextNode(text));
//     return e;
// }

window.addEventListener("load", setup);