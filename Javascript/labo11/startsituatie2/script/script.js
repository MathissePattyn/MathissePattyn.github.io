const setup = () => {
    laadfilms();
}

let likes =0;
let dislikes = 0;
let likedMovies = [];

const laadfilms = () => {
    for (let i = 0; i < movies.length; i++) {
        let id = movies[i].id;
        let title = movies[i].title;
        let url = movies[i].imageUrl;
        let description = movies[i].description;

        maakFilm(id, title, url, description);
    }
}

const toonLikedMovies = () => {
    if (likedMovies.length > 0) {
        let likebarmovies = document.getElementById("likebarmovies");
        let likebar = document.getElementById("likebar");
        likebar.style.visibility = "visible";
        likebarmovies.innerHTML = "";

        for (let i = 0; i < likedMovies.length; i++) {
            let movie = likedMovies[i];
            let div = maakElement("div");
            let textNode = document.createTextNode(movie.title);

            let trashButton = createIconButton("fas fa-trash", "trash", (e) => {
                // Verwijder DOM-element
                e.currentTarget.parentElement.remove();

                // Verwijder 1 item op index i
                likedMovies.splice(i, 1);

                // Verberg balk indien lijst leeg
                if (likedMovies.length === 0) {
                    document.getElementById("likebar").style.visibility = "hidden";
                }
            });


            div.appendChild(textNode);
            div.appendChild(trashButton);
            likebarmovies.appendChild(div);
        }
    } else {
        let likebar = document.getElementById("likebar");
        likebar.style.visibility ="hidden"
    }
}

const dislike = (event) => {

    let buttons = event.currentTarget.closest(".buttons");
    let likebutton = buttons.getElementsByClassName("likebutton")[0];
    let dislikebutton = buttons.getElementsByClassName("dislikebutton")[0];
    let dislikeCounter = document.querySelectorAll("#dislikecounter #dislike")[0];
    let likeCounter = document.querySelectorAll("#likecounter #like")[0];

    if (likebutton.classList.contains("like")) {
        likebutton.classList.remove("like");
        likes--;
        likeCounter.textContent = likes;
    }

    if(dislikebutton.classList.contains("dislike")) {
        dislikebutton.classList.remove("dislike");
        dislikes--;
        dislikeCounter.textContent = dislikes;
        return;
    }

    event.currentTarget.classList.add("dislike");
    dislikes++;
    dislikeCounter.textContent = dislikes;

}

const like = (event) => {
    let buttons = event.currentTarget.closest(".buttons");
    let likebutton = buttons.getElementsByClassName("likebutton")[0];
    let dislikebutton = buttons.getElementsByClassName("dislikebutton")[0];
    let dislikeCounter = document.querySelectorAll("#dislikecounter #dislike")[0];
    let likeCounter = document.querySelectorAll("#likecounter #like")[0];

    if (dislikebutton.classList.contains("dislike")) {
        dislikebutton.classList.remove("dislike");
        dislikes--;
        dislikeCounter.textContent = dislikes;
    }

    if(likebutton.classList.contains("like")) {
        likebutton.classList.remove("like");
        likes--;
        likeCounter.textContent = likes;
        return;
    }

    likes++;
    likeCounter.textContent = likes;
    event.currentTarget.classList.add("like");

    let movieId = buttons.classList[1];
    console.log(movieId)

    if(!likedMovies.includes(movies[movieId])){
        likedMovies.push(movies[movieId-1]);
        toonLikedMovies();
    }
}

const maakFilm = (id,title,imageUrl,description) => {
    let movielist = document.getElementById("movielist");

    let divContainer = maakElement("div","movie");
    let titel = maakElement("div","title", title);
    let img = createImg(imageUrl, "movie");
    let omschrijving = maakElement("div","description", description);

    let buttons = maakElement("div","buttons");
    buttons.classList.add(id);
    let dislikeButton = createIconButton("fas fa-thumbs-down", "unset dislikebutton", dislike);
    let likeButton = createIconButton("fas fa-thumbs-up", "unset likebutton", like);

    buttons.appendChild(dislikeButton);
    buttons.appendChild(likeButton);
    divContainer.appendChild(buttons);
    divContainer.appendChild(titel);
    divContainer.appendChild(img);
    divContainer.appendChild(omschrijving);

    movielist.appendChild(divContainer);
}

const createImg = (url, alt) => {
    let img = maakElement("img", "image");
    img.setAttribute("src", url);
    img.setAttribute("alt", alt);
    return img;
}

const maakElement = (element, className="", text = "") =>{
    const e = document.createElement(element);
    if (className) {
        className.split(" ").forEach(classNaam => e.classList.add(classNaam));
    }
    if(text){
        e.textContent = text;
    }
    return e;
}

const createIconButton = (iconClass, buttonClass, onClick) => {
    let button = maakElement("a", buttonClass);
    let icon = maakElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
}

window.addEventListener("load", setup);