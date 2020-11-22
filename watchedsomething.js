function debounce(fn, delay) {
    let timeoutID;
    return function(){
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout( ()=>{
            fn();
        }, delay)
    };
};

function renderSearchEntry(movie, index){
    return(`
    <div class="search-result-container">
        <div class="search-result-entry" id="${movie.Title}">
            <img src="${movie.Poster}" alt="Poster of ${movie.Title}" width="150">
            <p>${movie.Title}</p>
            <label for="thoughts">How was the movie?</label>
            <select class="thoughts${index}"><option value="true">Good!</option><option value="false">Bad!</option></select>
            <button class="add-button" id="button${index}" data-buttonid=${index}>Add to my list</button>
        </div>
    </div>
    `)
}

export async function renderWatchedSomething(){
    const $root = $('#root');

    let arr;
    $(document).on("keydown", "#movie-search-field", debounce(async function(){
        axios.get(`http://www.omdbapi.com/?apikey=16033043&s=${document.getElementById("movie-search-field").value}`)
        .then(function(response){
            arr = response.data.Search;
            $root.empty();
            arr.forEach((element, index) => $root.append(renderSearchEntry(element, index)));
        })
        .catch(function(error){
        })
        .finally(function(){
        })
    }, 1000))

    $(document).on("click", ".add-button", async function() {
        let index = this.dataset.buttonid;
        let obj = {Title: arr[index].Title, Poster: arr[index].Poster, Liked: $(`.thoughts${index}`).val()}
        movieList.push(obj);
        $(`.add-button#button${index}`).replaceWith(`<p>Added!</p>`)
        //console.log(movieList);
        //axio here

    });
}

$(function() {
    renderWatchedSomething();
});