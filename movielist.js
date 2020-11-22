async function getMovieFromDB(title){
    
}

function renderLikeButton(like, ID){
    if(like){
        return(`
        <button class="like-button" data-movieid="${ID}"><img src="thumbs-up.png" alt="thumbs-up" title="Click to dislike" width="50"></button>
        `)
    }else{
        return(`
        <button class="dislike-button" data-movieid="${ID}"><img src="thumbs-down.png" alt="thumbs-down" title="Click to like" width="50"></button>
        `)
    }
}
function renderMovieEntry(movie){
    return(`
    <div class="movie-entry" id="movie-${movie.imdbID}">
        <div class="poster-container">
            <img src="${movie.Poster}" alt="Poster of ${movie.Title}" width="150">
        </div>
        <div class="title-container">
            <p class="movie-title">${movie.Title}</p>
        </div>
        <div class="movie-thoughts">
            <button class="like-button" data-movieid="${movie.imdbID}"><img src="thumbs-up.png" alt="thumbs-up" title="Click to dislike" width="50"></button>
            <button class="delete-button" data-movieid="${movie.imdbID}">&#10060</button>
        </div>
    </div>
    `)
}

export async function render(movieList){
    const $root = $('#root');
    movieList.forEach(element => $root.append(renderMovieEntry(element)));

    $(document).on("click", ".delete-button", async function(){
        let ID = this.dataset.movieid;
        $(`#movie-${ID}`).remove();
        console.log('delete')
        //axios here
    })

    $(document).on("click", ".like-button", async function(){
        let ID = this.dataset.movieid;
        $(`#movie-${ID} .like-button`).replaceWith(renderLikeButton(false, ID));
        //axios here
    })

    $(document).on("click", ".dislike-button", async function(){
        let ID = this.dataset.movieid;
        $(`#movie-${ID} .dislike-button`).replaceWith(renderLikeButton(true, ID));
        //axios here
    })
}

$(function() {
    render(movieExamples);
});