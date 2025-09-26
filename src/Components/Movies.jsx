function Movies (){
    const movies = [
  { title: "Inception", director: "Christopher Nolan" },
  { title: "The Matrix", director: "The Wachowskis" },
  { title: "Spirited Away", director: "Hayao Miyazaki" },
];

return (
    <ul>
        {movies.map ((movie, index) => (<li key = {index}>{movie.title} - {movie.director}</li>))}
    </ul>
)
}

export default Movies;