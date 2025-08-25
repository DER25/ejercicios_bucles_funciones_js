function getCapital(country) {
  if (typeof country !== 'string')
    return 'Entrada inválida. Debes proporcionar un nombre de país como texto.'

  const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  }

  const capital = capitals[country]

  return capital ? capital : `No se encontró la capital de "${country}".`
}

console.log(getCapital('Spain')) // Madrid
console.log(getCapital('Germany')) // Berlin
console.log(getCapital('Brazil')) // No se encontró la capital de "Brazil".
console.log(getCapital(123)) // Entrada inválida. Debes proporcionar un nombre de país como texto.
