function renderMovieEntry(movie){
    return(`
    <div class="movie-entry" id="${movie.imdbID}">
        <div class="poster-container">
            <img src="${movie.poster}" alt="Poster of ${movie.title}" width="150">
        </div>
        <div class="title-container">
            <p class="movie-title">${movie.title}</p>
        </div>
        <div class="movie-info">
            <p class="movie-year">Year: ${movie.year}</p>
            <br>
            <p class='movie-rated'>Rated: ${movie.rated}</p>
        </div>
    </div>
    `)
}

export async function render(movieExamples){
    const $root = $('#root');
    //movieExamples.forEach(element => $root.append(renderMovieEntry(element)));
}

$(function() {
    render(movieExamples);
});