const ancestries = {
  orc: {
    name: 'Orc',
    description: 'Increase 1 skill. If you would be harmed, roll a d20. On a 10 or higher, you shrug off the injury.',
    specialText: 'If you would be harmed, roll a d20. On a 10 or higher, you shrug off the injury.',
    skills: 1
  },
  goblin: {
    name: 'Goblin',
    description: 'Increase 1 skill. You roll a d6 instead of a d4 when hindered unless you wear or carry any heavy items.',
    specialText: 'You roll a d6 instead of a d4 when hindered unless you wear or carry any heavy items.',
    skills: 1
  },
  devilkin: {
    name: 'Devilkin',
    description: 'Learn 1 spell. You are immune to fire and cold.',
    specialText: 'You are immune to fire and cold.',
    spells: 1
  },
  dragonkin: {
    name: 'Dragonkin',
    description: 'Learn 1 skill. You can breathe fire and can\'t be hurt by it.',
    specialText: 'You can breathe fire and can\'t be hurt by it.',
    skills: 1
  },
  centaur: {
    name: 'Centaur',
    description: 'Learn 1 skill. You can carry an additional heavy item.',
    specialText: 'You can carry an additional heavy item.',
    skills: 1
  },
  dryad: {
    name: 'Dryad',
    description: 'Learn 1 spell. You can understand and speak to plants.',
    specialText: 'You can understand and speak to plants.',
    spells: 1
  },
  beastkin: {
    name: 'Beastkin',
    description: 'Learn 4 skills. You are hindered on any skill roll that you haven\'t learned.',
    specialText: 'You are hindered on any skill roll that you haven\'t learned.',
    skills: 4
  },
}

export default ancestries
