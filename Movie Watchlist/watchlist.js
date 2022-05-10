const watchList = document.getElementById("watch-list")

let watch = localStorage.getItem("id")
let watchJSON = JSON.parse(watch)


watchJSON.map((movie) => {
        
    fetch(`https://www.omdbapi.com/?i=${movie}&apikey=fcb380f9`)
    .then (res => res.json())
    .then (data =>  {
        const {Poster, imdbID, Runtime, Genre, Title, imdbRating, Plot} = data
        watchList.innerHTML += `
        <div class="movie-container">
            <div class="details-1">
                <img class="movie-img" src="${Poster}">
                <div class="space-between">
                    <p class="movie-runtime">${Runtime}</p>
                    <p class="movie-genre">${Genre}</p>
                </div>
            </div>
            
            <div class="details-2">
                <div class="title-rating">    
                        <h3 class="movie-title">${Title}</h3>
                        <p class="movie-rating">⭐${imdbRating}</p>
                </div>
                <button id="${imdbID}" class="removeBtn" onclick={RemoveFromLocalStorageJSON(id)}>remove</button>
                    <p class="movie-plot">${Plot}</p>
            </div>
        </div>
    `
})
})




function RemoveFromLocalStorageJSON(id) {
    let arr = watchJSON;
    console.log(arr) 
    console.log(id) 

    arr = arr.filter((value) => value !== id);
    localStorage.setItem("id", JSON.stringify(arr));
    location.reload();
    return arr;

}