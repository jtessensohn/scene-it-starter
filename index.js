document.addEventListener('DOMContentLoaded', function() {
        const searchForm = document.getElementById('search-form')
        movieData = ""
        searchForm.addEventListener('submit', function(e) {
            // event listener code here
            e.preventDefault();
            const searchString = document.getElementById('search-bar').value
            const urlEncodedSearchString = encodeURIComponent(searchString);
            axios.get("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString).then( (response) => {
                movieData = response.data.Search
                cardTitle.innerHTML = renderMovies(response.data.Search)
        });


    })
})

function renderMovies(movieArray) {
    let movieHtmlArray = movieArray.map(function(currentMovie) {
        return `<div class="movie col mb-4">
        <div class="card" style="width: 18rem">
        <img src="${currentMovie.Poster}" alt="no image" class="card-img-top">
        <div class="card-body">
        <h5>${currentMovie.Title}</h5>
        <p class="card-text">${currentMovie.Year}</p>
        <a href="#" onclick= "saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary add-button">Add movie</a>
        </div>
        </div>
        </div>`
    });
    return movieHtmlArray.join("");
}

function saveToWatchList(imdbID) {
    let movie = movieData.find((currentMovie) => {
            return currentMovie.imdbID == imdbID;
        });
        let watchlistJSON = localStorage.getItem('watchlist');
        let watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null) {
            watchlist = []
        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
        console.log(imdbID)
    }


const addButton = document.querySelector('.add-button')
const cardTitle = document.querySelector('.movies-container')




