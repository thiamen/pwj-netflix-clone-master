// Called when the page is loaded
window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
  getAction();
  getAdventure(); 
  getAnimation();
  getComedy();
  getCrime();
  getDocumentary();
  getDrama();
  getFamily();
  getHorror();
  getMystery();
  getRomance();
};

function showMovies(movies, element_selector, path_type) {
  var moviesEl = document.querySelector(element_selector);
  for (var movie of movies.results) {
    var image = `
            <img src="https://image.tmdb.org/t/p/original${movie[path_type]}"></img>
        `;
    moviesEl.innerHTML += image;
  }
}

function fetchMovies(url, element_selector, path_type) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong");
      }
    })
    .then((data) => {
      showMovies(data, element_selector, path_type);
    })
    .catch((error_data) => {
      console.log(error_data);
    });
}

function getOriginals() {
  var url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url, ".original__movies", "poster_path");
}

function getTrendingNow() {
  var url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, "#trending", "backdrop_path");
}

function getTopRated() {
    var url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
    fetchMovies(url, "#top_rated", "backdrop_path");
  }
  
function getAction() {
  var url =
    "https://api.themoviedb.org/3/discover/movie/?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28";
  fetchMovies(url, "#action_28", "backdrop_path");
}

function getAdventure() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12";
    fetchMovies(url, "#adventure_12", "backdrop_path");
  }

  function getAnimation() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16";
    fetchMovies(url, "#animation_16", "backdrop_path");
  }
  
  function getComedy() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35";
    fetchMovies(url, "#comedy_35", "backdrop_path");
  }
  
  function getCrime() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80";
    fetchMovies(url, "#crime_80", "backdrop_path");
  }
  
  function getDocumentary() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99";
    fetchMovies(url, "#documentary_99", "backdrop_path");
  }
  
   
  function getDrama() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18";
    fetchMovies(url, "#drama_18", "backdrop_path");
  }
  
  function getFamily() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14";
    fetchMovies(url, "#family_14", "backdrop_path");
  }
  
    
  function getHorror() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27";
    fetchMovies(url, "#horror_27", "backdrop_path");
  }
  
  function getMystery() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648";
    fetchMovies(url, "#mystery_9648", "backdrop_path");
  }
  
  function getRomance() {
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749";
    fetchMovies(url, "#romance_10749", "backdrop_path");
  }
  
