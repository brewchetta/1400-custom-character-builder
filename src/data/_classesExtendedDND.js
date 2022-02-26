import { weapons } from './_itemsCore'

export const dndExtendedClasses = {
  druid: {
    name: 'Druid',
    coreskill: 'Forage',
    skills: ['Climb', 'Cook', 'Lore', 'Medicine', 'Religion', 'Spellcasting'],
    skillSlots: 2,
    spells: 2,
    specialText: 'You learn the Animal Form spell. You roll to cast Animal Form at the level of your highest skill, even if your Spellcasting is lower.',
    description: "Increase (d8) Forage and any 2 of Climb, Cook, Lore, Medicine, Religion, Spellcasting. Learn Animal Form and 2 other spells. You roll to cast Animal Form at the level of your highest skill, even if your Spellcasting is lower."
  },
  warlock: {
    name: 'Warlock',
    coreskill: 'Spellcasting',
    skills: ['Deceive', 'Disguise', 'Intimidate', 'Religion', 'Lore'],
    skillSlots: 2,
    spells: 3,
    equipmentGroups: [weapons],
    specialText: 'You can take a harm to gain advantage on casting a spell.',
    description: "Increase (d8) Spellcasting and any 2 of Deceive, Disguise, Intimidate, Religion, Lore. Learn 3 spells. Can take a harm to gain an advantage on casting a spell. Take a weapon."
  },
  barbarian: {
    name: 'Barbarian',
    coreskill: 'Melee Combat',
    skills: ['Lore', 'Run and Jump', 'Swim', 'Tracker'],
    skillSlots: 2,
    equipment: [weapons],
    specialText: 'You can use Melee Combat in a rage, increasing the risk and the effect. Cannot wear armor heavier than leather.',
    description: "Increase (d8) Melee Combat and any 2 of Lore, Run and Jump, Swim, Tracker. You can use Melee Combat in a rage, increasing the risk and the effect. Cannot wear armor heavier than leather. Take a martial weapon."
  },

}
