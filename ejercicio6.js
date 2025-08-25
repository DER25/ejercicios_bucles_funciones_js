const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
]

// Función genérica para agrupar por década
function groupByDecade(movies) {
  const grouped = {}

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i]
    // Calcula la década
    const decade = Math.floor(movie.releaseYear / 10) * 10

    // Si no existe la clave, inicializa un array
    if (!grouped[decade]) {
      grouped[decade] = []
    }

    // Agrega la película a la década correspondiente
    grouped[decade].push(movie.title)
  }

  return grouped
}

const groupedMovies = groupByDecade(starWarsMovies)
console.log(groupedMovies)
