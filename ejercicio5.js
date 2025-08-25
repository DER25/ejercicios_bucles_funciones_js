function sumAlbumDurationsByGenre(albums, genreFilter) {
  let totalDuration = 0

  for (const album of albums) {
    if (album.genre === genreFilter) {
      totalDuration += album.duration
    }
  }

  console.log(
    `Duración total de álbumes de ${genreFilter}: ${totalDuration.toFixed(
      2
    )} minutos`
  )
  return totalDuration
}

// Ejemplo de uso:
const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.0 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
]

sumAlbumDurationsByGenre(albums, 'Rock')
