const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  {
    name: 'David Bowie',
    influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground']
  },
  {
    name: 'Eddie Vedder',
    influences: ['The Who', 'Neil Young', 'Jim Morrison']
  },
  {
    name: 'Freddie Mercury',
    influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin']
  },
  {
    name: 'John Lennon',
    influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly']
  }
]

function listArtistsAndInfluences(artistList) {
  for (let i = 0; i < artistList.length; i++) {
    const artist = artistList[i]
    for (let j = 0; j < artist.influences.length; j++) {
      console.log(`${artist.name} → ${artist.influences[j]}`)
    }
  }
}

listArtistsAndInfluences(artists)
