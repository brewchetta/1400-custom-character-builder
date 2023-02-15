export const magicSupplies = {
  healingPotion: {
    key:'healingPotion',
    name: 'Healing Potion',
    durability: 1,
    maxDurability: 1,
    cost: 2,
    tags: ['Supply', 'Potion', 'Magic Item'],
    special: 'Heal an injury. Discard after use.'
  },
  manaPotion: {
    key:'manaPotion',
    name: 'Mana Potion',
    durability: 1,
    maxDurability: 1,
    cost: 2,
    tags: ['Supply', 'Potion', 'Magic Item'],
    special: 'Regain the power to cast your spells if any are disabled. Discard after use.'
  },
  summonersChalk: {
    key:'summonersChalk',
    name: 'Summoner\'s Chalk',
    durability: 1,
    maxDurability: 1,
    cost: 2,
    tags: ['Supply', 'Magic Item'],
    special: 'Used in rituals. Discard after use.'
  },
  magicSalt: {
    key:'magicSalt',
    name: 'Magic Salt',
    durability: 1,
    maxDurability: 1,
    cost: 2,
    tags: ['Supply', 'Magic Item'],
    special: 'Used in rituals. Discard after use.'
  },
  elementalDust: {
    key:'elementalDust',
    name: 'Elemental Dust',
    durability: 1,
    maxDurability: 1,
    cost: 2,
    tags: ['Supply', 'Magic Item'],
    special: 'Used in rituals. Discard after use.'
  },
}

export const magicWeapons = {
  flameSword: {
    key: 'flameSword',
    name: 'Flaming Sword',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Light Weapon', 'Weapon', 'One Hand', 'Magic Item'],
    special: '+1 to Melee Combat rolls'
  },
  orbOfStorms: {
    key: 'orbOfStorms',
    name: 'Orb of Storms',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Light Weapon', 'Weapon', 'One Hand', 'Magic Item'],
    special: '+1 to Arcana rolls to cast weather related spells'
  }
}

export const magicArmor = {
  mithrilChain: {
    key: 'mithrilChain',
    name: 'Mithril Chain Armour',
    durability: 3,
    maxDurability: 3,
    cost: 50,
    tags: ['Armour', 'Worn', 'Magic Item']
  },
  meteorPlate: {
    key: 'meteorPlate',
    name: 'Meteor Plate Armour',
    durability: 5,
    maxDurability: 5,
    cost: 50,
    tags: ['Armour', 'Worn', 'Magic Item'],
    special: 'Hinders sneaking. Cannot be harmed by fire or lightning.'
  },
  cloakOfThievery: {
    key: 'cloakOfThievery',
    name: 'Cloak of Thievery',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Worn', 'Magic Item'],
    special: '+1 to Sneak rolls'
  },
  amuletOfShielding: {
    key: 'amuletOfShielding',
    name: 'Amulet of Shielding',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Worn', 'Magic Item'],
    special: 'Cannot be beguiled, put to sleep by magic, seen or heard by scrying, or affected by telepathy.'
  },
  bootsOfFeatherFall: {
    key: 'bootsOfFeatherFall',
    name: 'Boots of Feather Fall',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Worn', 'Magic Item'],
    special: 'The small wings on these boots keep you from falling at a speed that would harm you.'
  },
}

export const magicTools = {
  bagOfHolding: {
    key:'bagOfHolding',
    name: 'Bag of Holding',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Tool', 'Magic Item'],
    special: 'Magically holds any number of heavy items except vehicles.'
  },
  eyeOfInfiltration: {
    key:'eyeOfInfiltration',
    name: 'Eye of Infiltration',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Tool', 'Magic Item'],
    special: 'A winged glass eye that follows your commands. You can see whatever it sees.'
  },
}

export const magicCompanions = {
  demonFamiliar: {
    key: 'demonFamiliar',
    name: 'Demon Familiar',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Magic Companion', 'Familiar'],
    special: 'A small demonic familiar. Cannot be hurt by fire or cold.'
  },
  fairyFamiliar: {
    key: 'fairyFamiliar',
    name: 'Fairy Familiar',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Magic Companion', 'Familiar'],
    special: 'A small fairy familiar that can shine bright as a torch.'
  },
  skeletonServant: {
    key: 'skeletonServant',
    name: 'Skeleton Servant',
    durability: 2,
    maxDurability: 2,
    cost: 50,
    tags: ['Magic Companion'],
    special: 'A skeletal servant raised by necromancy.'
  },
  griffon: {
    key: 'griffon',
    name: 'Griffon',
    durability: 3,
    maxDurability: 3,
    cost: 50,
    tags: ['Magic Companion', 'Animal Companion', 'Large Animal Companion'],
    special: 'A large sized animal companion. Can fly and be ridden.'
  },
}

export const magicVehicles = {
  airship: {
    key: 'airship',
    name: 'Airship',
    durability: 10,
    maxDurability: 10,
    cost: 150,
    tags: ['Vehicle', 'Heavy', 'Magic Item'],
    special: 'Enough room for 10. Can fly.'
  },
  flyingBroom: {
    key:'flyingBroom',
    name: 'Flying Broom',
    durability: 1,
    maxDurability: 1,
    cost: 50,
    tags: ['Vehicle', 'Magic Item'],
    special: 'Enough room for 1. Can fly.'
  },
}

export const allMagicItems = {...magicSupplies, ...magicArmor, ...magicTools, ...magicWeapons, ...magicCompanions, ...magicVehicles}
