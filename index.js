function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function(currentMovie) {
        retun `<div>
            <h2>${currentMovie.Title}</h2>
        </div>`
    });
    return movieHtmlArray.join('');
}

const moviesContainer = document.getElementsByClassName('#movies-container')

document.addEventListener('DOMContentLoaded', function() {
    moviesContainer.innerHTML = renderMovies(movieData)
})
