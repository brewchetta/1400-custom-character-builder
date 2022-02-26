import { weapons, armours, tools, supplies, animals } from './_itemsCore'

export default {
  bard: {
    name: 'Bard',
    coreskill: 'Perform',
    skills: ['Melee Combat', 'Deceive', 'Disguise', 'Reading People', 'Persuade'],
    skillSlots: 3,
    spells: 2,
    equipmentGuaranteed: [tools.instrument, supplies.backpack, supplies.waterskin],
    description: "Increase (d8) Perform and any 3 of Melee Combat, Deceive, Disguise, Reading People, Persuade. Learn 2 spells. Take an instrument."
  },
  mage: {
    name: 'Mage',
    coreskill: 'Spellcasting',
    skills: ['Arcana', 'Lore', 'Reading People', 'Religion'],
    skillSlots: 2,
    spells: 5,
    equipmentGuaranteed: [supplies.backpack, supplies.waterskin],
    description: "Increase (d8) Spellcasting and any 2 of Arcana, Reading People, Religion, Lore. Learn 5 spells."
  },
  priest: {
    name: 'Priest',
    coreskill: 'Religion',
    skills: ['Spellcasting', 'Melee Combat', 'Medicine'],
    skillSlots: 1,
    spells: 3,
    equipmentGuaranteed: [supplies.backpack, supplies.waterskin],
    equipmentGroups: [{...weapons, ...tools}],
    description: "Increase (d8) Religion and any 1 of Spellcasting, Melee Combat, Medicine. Learn 3 spells. Take a weapon or a tool."
  },
  scout: {
    name: 'Scout',
    coreskill: 'Tracker',
    skills: ['Archery', 'Run and Jump', 'Sneak', 'Forage'],
    skillSlots: 2,
    equipmentGroups: [weapons],
    equipmentGuaranteed: [animals.mediumAnimal, supplies.backpack, supplies.waterskin],
    description: "Increase (d8) Tracker and any 2 of Archery, Run and Jump, Sneak, Forage. Take a medium sized animal companion and a weapon."
  },
  skulker: {
    name: 'Skulker',
    coreskill: 'Sneak',
    skills: ['Traps', 'Sleight of Hand', 'Deceive', 'Disguise', 'Climb'],
    skillSlots: 3,
    equipmentGuaranteed: [supplies.backpack, supplies.waterskin],
    equipmentGroups: [weapons, tools],
    specialText: 'Increase two skills an additional time (d10)',
    description: "Increase (d8) Sneak and any 3 of Traps, Sleight of Hand, Deceive, Disguise, Climb. Then increase (d10) two of them again. Take a light weapon and a tool."
  },
  warrior: {
    name: 'Warrior',
    coreskill: 'Melee Combat',
    skills: ['Intimidate', 'Run and Jump', 'Archery', 'Vehicles'],
    skillSlots: 2,
    equipmentGuaranteed: [supplies.backpack, supplies.waterskin],
    equipmentGroups: [armours, weapons],
    specialText: 'Can carry 2 heavy items without hindrance',
    description: "Increase (d8) Melee Combat and any 2 of Intimidate, Run and Jump, Archery, Vehicles. Can carry 2 heavy items without hindrance. Take a piece of armour and a weapon."
  },
}
