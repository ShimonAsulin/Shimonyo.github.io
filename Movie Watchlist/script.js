const formEl = document.getElementById("form")
const inputEl = document.getElementById("input-search")
const movieListEl = document.getElementById('movie-list')





    
    
    



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
                    console.log(data);
                    render(data)
                })
           
        })
    })}






function render(movie) {
        document.getElementById("movie-exploring").style.display = "none"
        movieListEl.innerHTML +=  `
            <div class="movie-container">
                <div class="details-1">
                    <img class="movie-img" src="${movie.Poster}">
                    <div class="space-between">
                        <p class="movie-runtime">${movie.Runtime}</p>
                        <p class="movie-genre">${movie.Genre}</p>
                        <button id="btn" class="addToBtn" onclick={addMovie()}>add</button>
                    </div>
                </div>
                
                <div class="details-2">
                    <div class="title-rating">    
                            <h3 class="movie-title">${movie.Title}</h3>
                            <p class="movie-rating">⭐${movie.imdbRating}</p>
                    </div>
                        <p class="movie-plot">${movie.Plot}</p>
                </div>
                
                
            </div>
           `
        
    }




function addMovie(movie) {
    console.log('Adding')
}


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    callApi()
})