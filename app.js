// 239d62fe
// const defaultContainerEl = document.querySelector(".default__container");
// const goBackEl = document.querySelector(".goBack");

// async function searchBarInput(event) {
//   const inputValue = event.target.value;
//   const movie = await fetch(
//     `https://www.omdbapi.com/?apikey=239d62fe&s=${inputValue}`
//   );
//   }

//   const movieData = await movie.json();

function renderMovies() {
  const moviesContainerEl = document.querySelector(`.movies`);
  console.log(moviesContainerEl)
//   moviesContainerEl.innerHTML = 
//   `<div class="movie">   
// <figure class="poster__wrapper">
// <img
//   src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//   alt="Movie Poster"
//   class="movie__poster"
// />
// </figure>
// <h3 class="movie__title">Guardians of the Galaxy Vol. 2</h3>
// <div class="movie__info--wrapper">
// <p class="movie__rated movie__info">PG-13</p>
// <p class="movie__genre movie__info">
//   Action, Adventure, Comedy
// </p>
// <p class="movie__time movie__info">136 min</p>
// </div>
// <p class="movie__plot">
// The Guardians struggle to keep together as a team while dealing
// with their personal family issues, notably Star-Lord's encounter
// with his father the ambitious celestial being Ego.
// </p>
// </div>`
}

setTimeout(() => {
  renderMovies();
});





// function moviesHTML = movies.map(books) {
//    return `<div class="movie">
//               <figure class="poster__wrapper">
//                 <img
//                   src="${movie.Poster}"
//                   alt="Movie Poster"
//                   class="movie__poster"
//                 />
//               </figure>
//               <h3 class="movie__title">${movie.title}</h3>
//               <div class="movie__info--wrapper">
//                 <p class="movie__rated movie__info">${movie.rated}</p>
//                 <p class="movie__genre movie__info">
//                   ${movie.genre}
//                 </p>
//                 <p class="movie__time movie__info">${movie.runtime}</p>
//               </div>
//               <p class="movie__plot">
//                 ${move.plot}
//               </p>
//             </div>`;
// }



// {/* <div class="movie">   
// <figure class="poster__wrapper">
// <img
//   src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//   alt="Movie Poster"
//   class="movie__poster"
// />
// </figure>
// <h3 class="movie__title">Guardians of the Galaxy Vol. 2</h3>
// <div class="movie__info--wrapper">
// <p class="movie__rated movie__info">PG-13</p>
// <p class="movie__genre movie__info">
//   Action, Adventure, Comedy
// </p>
// <p class="movie__time movie__info">136 min</p>
// </div>
// <p class="movie__plot">
// The Guardians struggle to keep together as a team while dealing
// with their personal family issues, notably Star-Lord's encounter
// with his father the ambitious celestial being Ego.
// </p>
// </div> */}

// `<div class="movie">
// <figure class="poster__wrapper">
//  <img
//     src="${movie.Poster}"
//     alt="Movie Poster"
//    class="movie__poster"
//  />
// </figure>
// <h3 class="movie__title">${movie.title}</h3>
// <div class="movie__info--wrapper">
//   <p class="movie__rated movie__info">${movie.rated}</p>
//   <p class="movie__genre movie__info">
//     ${movie.genre}
//   </p>
//   <p class="movie__time movie__info">${movie.runtime}</p>
// </div>
// <p class="movie__plot">
//   ${move.plot}
// </p>
// </div>`;