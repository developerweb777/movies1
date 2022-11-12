"use strict";
movies.splice(50);
const Allmovies = movies.map((movies) => {
  return {
    title: movies.title,
    year: movies.year,
    lang: movies.language,
    category: movies.categories,
    id: movies.imdbId,
    time: `${Math.floor(movies.runtime / 60)}h ${movies.runtime % 60}m`,
    summary: movies.summary,
    link: `https://www.youtube.com/embed/${movies.youtubeId}`,
    maxImg: movies.bigThumbnail,
    minImg: movies.smallThumbnail,
    rating: movies.imdbRating,
  };
});

function renderAllMovies() {
  Allmovies.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("shadow-lg", "card");
    card.innerHTML = `
        <img src="${el.maxImg}" class="card-img" alt="asdasfdg">
                        <div class="card_body">
                            <h4 class="card_title">${el.title}</h4>
                            <ul class="list-unstyled">
                                <li><strong>year:${el.year}</strong></li>
                                <li><strong>language:${el.lang}</strong></li>
                                <li><strong>rating:${el.rating}</strong></li>
                                <li><strong>category:${el.category}</strong></li>
                                <li><strong>runtime:${el.time}</strong></li>
                                <li><strong> link:  <a href="${el.link}">youtube:</a></strong></li>
                            </ul>
                            <div class="social d-flex">
                                <button class="btn btn-danger m-2">
                                    trailers
                                </button>
                                <button class="btn btn-success m-2">
                                    read more.. 
                                </button>
                                <button class="btn btn-warning m-2">
                                    add bookmark
                                </button>
                            </div>
        `;
    $(".wrapper").appendChild(card);
  });
}
renderAllMovies();
