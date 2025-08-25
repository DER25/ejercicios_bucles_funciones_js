const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  if (!Array.isArray(mutants) || typeof power !== 'string') {
    return 'Entrada inválida. Asegúrate de proporcionar un array de mutantes y un poder como texto.'
  }

  const found = mutants.filter((mutant) => mutant.power === power)

  if (found.length > 0) {
    const names = found.map((m) => m.name).join(', ')
    return `Mutante(s) con el poder "${power}" encontrado(s): ${names}.`
  } else {
    return `No se encontró ningún mutante con el poder "${power}".`
  }
}

console.log(findMutantByPower(mutants, 'telepathy'))
// Mutante(s) con el poder "telepathy" encontrado(s): Professor X.

console.log(findMutantByPower(mutants, 'invisibility'))
// No se encontró ningún mutante con el poder "invisibility".
