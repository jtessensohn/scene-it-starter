function renderMovies(movieArray) {
    let movieHtmlArray = movieArray.map(function(currentMovie) {
        return `<div class="movie col mb-4">
        <div class="card" style="width: 18rem">
        <img src="${currentMovie.Poster}" alt="no image" class="card-img-top">
        <div class="card-body">
        <h5>${currentMovie.Title}</h5>
        <p class="card-text">${currentMovie.Year}</p>
        <a href="#" onclick="removeWatchlist('${currentMovie.imdbID}')" class="btn btn-danger remove-button">Remove</a>
        </div>
        </div>
    </div>`
    });
    return movieHtmlArray.join("");
}

function removeWatchlist(imdbID) {
        let watchlistJSON = localStorage.getItem('watchlist');
        let watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null) {
            watchlist = []
        }
        let newWatchlist = watchlist.filter(movie => movie.imdbID != imdbID);
        cardTitle.innerHTML = (`${renderMovies(newWatchlist)}`)
        watchlistJSON = JSON.stringify(newWatchlist);
        localStorage.setItem('watchlist', watchlistJSON);
        
    }

const cardTitle = document.querySelector('.movies-container')
const removeButton = document.getElementsByClassName('remove-button')


document.addEventListener('DOMContentLoaded', function() {
    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    cardTitle.innerHTML = (`${renderMovies(watchlist)}`)
})