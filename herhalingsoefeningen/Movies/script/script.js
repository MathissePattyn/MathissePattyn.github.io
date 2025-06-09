// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
let likedMovies = [];

const setup = () => {
    console.log("setup")
    laadMovies();
    toonGeliketeMovies();
}

let countLikesAndDisliked = () => {
    let like = document.getElementById("like");
    let dislike = document.getElementById("dislike");

    let likes = document.querySelectorAll(".liked").length.toString();
    let dislikes = document.querySelectorAll(".disliked").length.toString();

    like.innerText = likes;
    dislike.innerText = dislikes;
}

const laadMovies = () => {
    console.log("laadMovies")
    let movieList = document.getElementById('movielist');
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        let divContainer = maakElement("div","movie");
        divContainer.setAttribute("id", movie.id);
        let title = maakElement("h3","title",movie.title);
        let description = maakElement("p","description",movie.description);
        let img = maakElement("img","img")
        img.setAttribute("src",movie.imageUrl);
        img.setAttribute("alt",movie.title);

        let buttons = maakElement("div","buttons");
        let likeButton = maakElement("i","fas fa-thumbs-up");
        likeButton.addEventListener('click',like);
        let dislikeButton = maakElement("i","fas fa-thumbs-down");
        dislikeButton.addEventListener('click',dislike);
        buttons.appendChild(likeButton);
        buttons.appendChild(dislikeButton);

        divContainer.append(title);
        divContainer.append(description);
        divContainer.append(img);
        divContainer.append(buttons);

        movieList.appendChild(divContainer);
    }
}

const like = (event) => {
    console.log("like");
    let likeButton = event.target;
    let buttons = likeButton.parentElement;
    let movie = buttons.parentElement;
    let id = movie.getAttribute("id");
    let index = likedMovies.indexOf(id);
    if(likeButton.classList.contains("liked")){
        likeButton.classList.remove("liked");
        likedMovies.splice(index, 1);
    } else {
        likeButton.classList.add("liked");
        likedMovies.push(id);
    }

    let dislikeButton = buttons.querySelector(".disliked");
    if(dislikeButton){
        dislikeButton.classList.remove("disliked");
    }

    toonGeliketeMovies();
    countLikesAndDisliked();
}

const dislike = (event) => {
    console.log("dislike");
    let dislikeButton = event.target;
    let buttons = dislikeButton.parentElement;
    if(dislikeButton.classList.contains("disliked")){
        dislikeButton.classList.remove("disliked");
    } else {
        dislikeButton.classList.add("disliked");
    }
    let movie = buttons.parentElement;

    let id = movie.getAttribute("id");
    let likeButton = buttons.querySelector(".liked");
    let index = likedMovies.indexOf(id);

    if (index !== -1) {
        likedMovies.splice(index,1)
    }
    if(likeButton){
        likeButton.classList.remove("liked");
    }
    console.log(likedMovies);
    toonGeliketeMovies();
    countLikesAndDisliked();
}

const toonGeliketeMovies = () => {
    if(likedMovies.length > 0){
        let likebar = document.getElementById("likebar");
        likebar.style.visibility = "visible";
        let likebarmovies = document.getElementById("likebarmovies");
        likebarmovies.innerHTML = "";
        for (let i = 0; i < likedMovies.length; i++) {
            let id = parseInt(likedMovies[i]);
            let movie = movies.find(m => m.id === id);
            let div = maakElement("div");
            let title = maakElement("h3","title",movie.title);
            let vuilbak = maakElement("i", "fas fa-trash");
            vuilbak.addEventListener('click', verwijderMovie);
            div.appendChild(title);
            div.appendChild(vuilbak);
            likebarmovies.appendChild(div);
        }
    } else {
        let likebar = document.getElementById("likebar");
        likebar.style.visibility = "hidden";
    }
}

const verwijderMovie = (event) => {
    let target = event.target;
    let div = target.parentElement;
    let title = div.getElementsByTagName("h3")[0].textContent.trim();

    let movie = movies.find(m => m.title === title);
    let index = likedMovies.indexOf(movie.id.toString());
    if(index !== -1) {{
        likedMovies.splice(index, 1);
        console.log(likedMovies)
    }}
    div.remove();
    if (likedMovies.length === 0) {
        document.getElementById("likebar").style.visibility = "hidden";
    }

    let origineleMovieDiv = document.getElementById(movie.id)
    let liked = origineleMovieDiv.querySelectorAll(".liked")[0];
    liked.classList.remove("liked")
    console.log(liked);


    countLikesAndDisliked();
}

const maakElement = (element, className="", text="") => {
    let e = document.createElement(element);
    if(className){
        className.split(" ").forEach(className => e.classList.add(className))
    }
    if(text){
        e.textContent = text;
    }
    return e;
}

window.addEventListener('load', setup)
