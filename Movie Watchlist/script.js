const formEl = document.getElementById("form")
const inputEl = document.getElementById("input-search")
const movieListEl = document.getElementById('movie-list')





    
    
    



async function callApi() {
        let search = inputEl.value
        console.log("🚀 ~ file: script.js ~ line 6 ~ callApi ~ input", search)

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=fcb380f9`)
        .then (res => res.json())
        .then (data =>  {
            console.log(data);
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
                <img src="${movie.Poster}">
                <div>
                    <div>
                        <h3>${movie.Title}</hh3>
                        <p>${movie.imdbRating}</p>
                    </div>
                    <p>${movie.Runtime}</p>
                    <p>${movie.Genre}</p>
                    <button id="btn" onclick={addMovie()}>➕</button>
                    <p>${movie.imdbRating}</p> 
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