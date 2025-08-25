function createPlaylist(songs, genreFilter, minDuration) {
  const playlist = []

  for (const song of songs) {
    if (song.genre === genreFilter && song.duration > minDuration) {
      playlist.push(song)
    }
  }

  console.log(
    `Playlist de ${genreFilter} con duración mayor a ${minDuration} minutos:`
  )
  console.log(playlist)
}

// Ejemplo de uso:
const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 }
]

createPlaylist(songs, 'Rock', 5)
