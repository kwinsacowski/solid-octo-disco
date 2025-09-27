function Movies (){
    const movies = [
  { title: "Inception", director: "Christopher Nolan" , like:false,},
  { title: "The Matrix", director: "The Wachowskis", like:true, },
  { title: "Spirited Away", director: "Hayao Miyazaki", like:false,},
];

return (
    <ul>
        {movies.map ((movie, index) => (<li key = {index}>{movie.title} - {movie.director} {movie.like ? "👍": "👎" }</li>))}
    </ul>
)
}

export default Movies;