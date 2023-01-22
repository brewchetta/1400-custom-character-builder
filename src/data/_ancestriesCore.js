const ancestries = {
  human: {
    name: 'Human',
    description: 'Increase 2 skills at once.',
    skills: 2
  },
  elf: {
    name: 'Elf',
    description: 'Learn 1 spell. You cannot be beguiled or put to sleep by magic.',
    specialText: 'You cannot be beguiled or put to sleep by magic.',
    spells: 1
  },
  dwarf: {
    name: 'Dwarf',
    description: 'Increase 1 skill. You can see fine in low light and resist the effects of poisons and ale.',
    specialText: 'You can see fine in low light and resist the effects of poisons and ale.',
    skills: 1
  }
}

export default ancestries
