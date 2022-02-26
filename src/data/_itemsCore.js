export const weapons = {
  dagger: {
    name: 'Dagger',
    tags: ['Light Weapon', 'Weapon', 'One Hand']
  },
  shortSword: {
    name: 'Short Sword',
    tags: ['Light Weapon', 'Weapon', 'One Hand']
  },
  club: {
    name: 'Club',
    tags: ['Light Weapon', 'Weapon', 'One Hand']
  },
  shortbow: {
    name: 'Shortbow',
    tags: ['Light Weapon', 'Weapon', 'bow', 'One Hand']
  },
  bastardSword: {
    name: 'Bastard Sword',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'Two Hand'],
    cost: 2,
    special: '+1 to Melee Combat rolls'
  },
  greataxe: {
    name: 'Greataxe',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'Two Hand'],
    cost: 2,
    special: '+1 to Melee Combat rolls'
  },
  warhammer: {
    name: 'Warhammer',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'Two Hand'],
    cost: 2,
    special: '+1 to Melee Combat rolls'
  },
  longbow: {
    name: 'Longbow',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'bow', 'Two Hand'],
    cost: 2,
    special: '+1 to Archery rolls'
  },
  crossbow: {
    name: 'Crossbow',
    tags: ['Martial Weapon', 'Weapon', 'Heavy', 'bow', 'Two Hand'],
    cost: 2,
    special: '+1 to Archery rolls'
  }
}

export const armours = {
  leather: {
    name: 'Leather Armour',
    tags: ['Armour', 'Worn'],
    durability: 1
  },
  chain: {
    name: 'Chain Armour',
    tags: ['Armour', 'Worn'],
    durability: 2,
    special: 'Hinders sneaking'
  },
  plate: {
    name: 'Plate Armour',
    tags: ['Armour', 'Heavy', 'Worn'],
    durability: 3,
    special: 'Hinders sneaking',
    cost: 2
  },
  shield: {
    name: 'Shield',
    tags: ['Armour', 'One Hand'],
    durability: 1
  }
}

export const tools = {
  crowbar: {
    name: 'Crowbar',
    tags: ['Tool'],
  },
  fishingRod: {
    name: 'Fishing Rod',
    tags: ['Tool'],
  },
  grapplingHook: {
    name: 'Grappling Hook',
    tags: ['Tool'],
  },
  huntingTrap: {
    name: 'Hunting Trap',
    tags: ['Tool'],
  },
  instrument: {
    name: 'Instrument',
    tags: ['Tool'],
  },
  lockpicks: {
    name: 'Lockpicks',
    tags: ['Tool'],
  },
  pestleAndMortar: {
    name: 'Pestle and Mortar',
    tags: ['Tool'],
  },
  pickaxe: {
    name: 'Pickaxe',
    tags: ['Tool'],
  },
  tenFootPole: {
    name: 'Ten Foot Pole',
    tags: ['Tool'],
  },
  shovel: {
    name: 'Shovel',
    tags: ['Tool'],
  },
  tinderbox: {
    name: 'Tinderbox',
    tags: ['Tool'],
  }
}

export const supplies = {
  ballBearings: {
    name: 'Ball Bearings',
    tags: ['Supply'],
  },
  bandages: {
    name: 'Bandages',
    tags: ['Supply'],
  },
  backpack: {
    name: 'Backpack',
    tags: ['Supply']
  },
  chalk: {
    name: 'Chalk',
    tags: ['Supply'],
  },
  ironSpike: {
    name: 'Iron Spike (x2)',
    tags: ['Supply'],
    durability: 2
  },
  fourPersonTent: {
    name: 'Four Person Tent',
    tags: ['Supply', 'Heavy'],
    cost: 2
  },
  ram: {
    name: 'Ram',
    tags: ['Supply', 'Heavy'],
  },
  rope: {
    name: 'Rope (30ft)',
    tags: ['Supply'],
  },
  torch: {
    name: 'Torch (x5)',
    tags: ['Supply'],
    durability: 5
  },
  waterskin: {
    name: 'Waterskin',
    tags: ['Supply']
  },
  wire: {
    name: 'Wire (10ft)',
    tags: ['Supply'],
  },
}

export const vehicles = {
  cart: {
    name: 'Cart',
    tags: ['Vehicle', 'Heavy'],
    cost: 2,
    ridingSpace: 2
  },
  wagon: {
    name: 'Wagon',
    tags: ['Vehicle', 'Heavy'],
    cost: 4,
    ridingSpace: 4
  },
  rowboat: {
    name: 'Rowboat',
    tags: ['Vehicle', 'Heavy'],
    cost: 3,
    ridingSpace: 3
  },
  ship: {
    name: 'Ship',
    tags: ['Vehicle', 'Heavy'],
    cost: 10,
    ridingSpace: 10
  },
}

export const animals = {
  smallAnimal: {
    name: 'Small Animal Companion',
    tags: ['Animal Companion', 'Small Animal Companion'],
    special: 'A small sized animal companion like a raven, cat, or snake.'
  },
  mediumAnimal: {
    name: 'Medium Animal Companion',
    tags: ['Animal Companion', 'Medium Animal Companion'],
    cost: 2,
    special: 'A medium sized animal companion like a hound, falcon, or monkey.'
  },
  largeAnimal: {
    name: 'Large Animal Companion',
    tags: ['Animal Companion', 'Large Animal Companion'],
    cost: 3,
    special: 'A large sized animal companion like a horse or mule, can be ridden.'
  },
}
