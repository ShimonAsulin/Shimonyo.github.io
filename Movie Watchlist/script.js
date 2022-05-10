const formEl = document.getElementById("form")
const inputEl = document.getElementById("input-search")
const movieListEl = document.getElementById('movie-list')

let watchlist = localStorage.id? JSON.parse(localStorage.id): []
console.log("🚀 ~ file: script.js ~ line 6 ~ watchlist", watchlist)





    
    
    



 function callApi() {
        let search = inputEl.value

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=fcb380f9`)
        .then (res => res.json())
        .then (data =>  {
            // console.log(data);
            data.Search.map(movie => {
                fetch(`https://www.omdbapi.com/?t=${movie.Title}&apikey=fcb380f9`)
                .then(res=>res.json())
                .then(data => { 
                    render(data)
                })
           
        })
    })}






function render(movie) {
        document.getElementById("movie-exploring").style.display = "none"
        const {Poster, Runtime, Genre, Title, imdbRating, Plot, imdbID} = movie
        
        movieListEl.innerHTML +=  `
            <div class="movie-container">
                <div class="details-1">
                    <img class="movie-img" src="${Poster}">
                    <div class="space-between">
                        <p class="movie-runtime">${Runtime}</p>
                        <p class="movie-genre">${Genre}</p>
                        <button id="${imdbID}" class="addToBtn" onclick={addMovie(id)}>add</button>
                    </div>
                </div>
                
                <div class="details-2">
                    <div class="title-rating">    
                            <h3 class="movie-title">${Title}</h3>
                            <p class="movie-rating">⭐${imdbRating}</p>
                    </div>
                        <p class="movie-plot">${Plot}</p>
                </div>
            </div>
           `
    }
    
    function addMovie(id) {      
        watchlist.push(id) 
        
        localStorage.setItem('id', JSON.stringify(watchlist))
        
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=fcb380f9`)
        .then (res => res.json())
        .then (data =>  {
            alert(`${data.Title} Added to Watchlist`)
        })
}
    




formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    callApi()
})