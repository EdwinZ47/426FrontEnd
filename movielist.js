async function getMovieFromDB(title){
    
}

function renderMovieEntry(movie){
    return(`
    <div class="movie-entry" id="${movie.imdbID}">
        <div class="poster-container">
            <img src="${movie.Poster}" alt="Poster of ${movie.Title}" width="150">
        </div>
        <div class="title-container">
            <p class="movie-title">${movie.Title}</p>
        </div>
        <div class="movie-info">
            <p class="movie-year">Year: ${movie.Year}</p>
            <br>
            <p class='movie-rated'>Rated: ${movie.Rated}</p>
            <button class="delete">Delete</button>
        </div>
    </div>
    `)
}

export async function render(movieExamples){
    const $root = $('#root');
    movieExamples.forEach(element => $root.append(renderMovieEntry(element)));
}

$(function() {
    render(movieExamples);
});