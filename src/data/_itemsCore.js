export const weapons = {
  dagger: {
    key:'dagger',
    name: 'Dagger',
    tags: ['Light Weapon', 'Weapon', 'One Hand']
  },
  shortSword: {
    key:'shortSword',
    name: 'Short Sword',
    tags: ['Light Weapon', 'Weapon', 'One Hand']
  },
  club: {
    key:'club',
    name: 'Club',
    tags: ['Light Weapon', 'Weapon', 'One Hand']
  },
  shortbow: {
    key:'shortbow',
    name: 'Shortbow',
    tags: ['Light Weapon', 'Weapon', 'bow', 'One Hand']
  },
  bastardSword: {
    key:'bastardSword',
    name: 'Bastard Sword',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'Two Hand'],
    cost: 2,
    special: '+1 to Melee Combat rolls'
  },
  greataxe: {
    key:'greataxe',
    name: 'Greataxe',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'Two Hand'],
    cost: 2,
    special: '+1 to Melee Combat rolls'
  },
  warhammer: {
    key: 'warhammer',
    name: 'Warhammer',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'Two Hand'],
    cost: 2,
    special: '+1 to Melee Combat rolls'
  },
  longbow: {
    key:'longbow',
    name: 'Longbow',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'bow', 'Two Hand'],
    cost: 2,
    special: '+1 to Archery rolls'
  },
  crossbow: {
    key:'crossbow',
    name: 'Crossbow',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'bow', 'Two Hand'],
    cost: 2,
    special: '+1 to Archery rolls'
  }
}

export const armours = {
  leather: {
    key:'leather',
    name: 'Leather Armour',
    tags: ['Armour', 'Worn'],
    durability: 1,
    maxDurability: 1
  },
  chain: {
    key:'chain',
    name: 'Chain Armour',
    tags: ['Armour', 'Worn'],
    durability: 2,
    maxDurability: 2,
    special: 'Hinders sneaking'
  },
  plate: {
    key:'plate',
    name: 'Plate Armour',
    tags: ['Armour', 'Heavy', 'Worn'],
    durability: 3,
    maxDurability: 3,
    special: 'Hinders sneaking',
    cost: 2
  },
  shield: {
    key:'shield',
    name: 'Shield',
    tags: ['Armour', 'One Hand'],
    durability: 1,
    maxDurability: 1
  }
}

export const tools = {
  crowbar: {
    key:'crowbar',
    name: 'Crowbar',
    tags: ['Tool'],
  },
  fishingRod: {
    key:'fishingRod',
    name: 'Fishing Rod',
    tags: ['Tool'],
  },
  grapplingHook: {
    key:'grapplingHook',
    name: 'Grappling Hook',
    tags: ['Tool'],
  },
  huntingTrap: {
    key:'huntingTrap',
    name: 'Hunting Trap',
    tags: ['Tool'],
  },
  instrument: {
    key:'instrument',
    name: 'Instrument',
    tags: ['Tool'],
  },
  lockpicks: {
    key:'lockpicks',
    name: 'Lockpicks',
    tags: ['Tool'],
  },
  pestleAndMortar: {
    key:'pestleAndMortar',
    name: 'Pestle and Mortar',
    tags: ['Tool'],
  },
  pickaxe: {
    key:'pickaxe',
    name: 'Pickaxe',
    tags: ['Tool'],
  },
  tenFootPole: {
    key:'tenFootPole',
    name: 'Ten Foot Pole',
    tags: ['Tool'],
  },
  shovel: {
    key:'shovel',
    name: 'Shovel',
    tags: ['Tool'],
  },
  tinderbox: {
    key:'tinderbox',
    name: 'Tinderbox',
    tags: ['Tool'],
  }
}

export const supplies = {
  ballBearings: {
    key:'ballBearings',
    name: 'Ball Bearings',
    tags: ['Supply'],
  },
  bandages: {
    key:'bandages',
    name: 'Bandages',
    tags: ['Supply'],
  },
  backpack: {
    key:'backpack',
    name: 'Backpack',
    tags: ['Supply']
  },
  chalk: {
    key:'chalk',
    name: 'Chalk',
    tags: ['Supply'],
  },
  ironSpike: {
    key:'ironSpike',
    name: 'Iron Spike (x2)',
    tags: ['Supply'],
    durability: 2,
    maxDurability: 2
  },
  fourPersonTent: {
    key:'fourPersonTent',
    name: 'Four Person Tent',
    tags: ['Supply', 'Heavy'],
    cost: 2
  },
  ram: {
    key:'ram',
    name: 'Ram',
    tags: ['Supply', 'Heavy'],
  },
  rope: {
    key:'rope',
    name: 'Rope (30ft)',
    tags: ['Supply'],
  },
  torch: {
    key:'torch',
    name: 'Torch (x5)',
    tags: ['Supply'],
    durability: 5,
    maxDurability: 5
  },
  waterskin: {
    key:'waterskin',
    name: 'Waterskin',
    tags: ['Supply']
  },
  wire: {
    key:'wire',
    name: 'Wire (10ft)',
    tags: ['Supply'],
  },
}

export const vehicles = {
  cart: {
    key:'cart',
    name: 'Cart',
    tags: ['Vehicle', 'Heavy'],
    cost: 2,
    special: "Enough room for 2"
  },
  wagon: {
    key:'wagon',
    name: 'Wagon',
    tags: ['Vehicle', 'Heavy'],
    cost: 4,
    special: "Enough room for 4"
  },
  rowboat: {
    key:'rowboat',
    name: 'Rowboat',
    tags: ['Vehicle', 'Heavy'],
    cost: 3,
    special: "Enough room for 3"
  },
  ship: {
    key:'ship',
    name: 'Ship',
    tags: ['Vehicle', 'Heavy'],
    cost: 10,
    special: "Enough room for 10"
  },
}

export const animals = {
  smallAnimal: {
    key:'smallAnimal',
    name: 'Small Animal Companion',
    tags: ['Animal Companion', 'Small Animal Companion'],
    special: 'A small sized animal companion like a raven, cat, or snake.'
  },
  mediumAnimal: {
    key:'mediumAnimal',
    name: 'Medium Animal Companion',
    tags: ['Animal Companion', 'Medium Animal Companion'],
    cost: 2,
    special: 'A medium sized animal companion like a hound, falcon, or monkey.'
  },
  largeAnimal: {
    key:'largeAnimal',
    name: 'Large Animal Companion',
    tags: ['Animal Companion', 'Large Animal Companion'],
    cost: 3,
    special: 'A large sized animal companion like a horse or mule, can be ridden.'
  },
}
