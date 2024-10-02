const magicItemsGenericDescription = `Rare items that you may find on your travels. Merchants rarely carry or buy them. Characters occasionally find magic items on their adventures.`
const heavyItemsGenericDescription = `Characters can carry one heavy item at a time.`
const oneHandItemsGenericDescription = `Characters can hold two one handed items at a time.`
const twoHandItemsGenericDescription = `Characters can hold only one two handed item at a time.`
const weaponItemsGenericDescription = `This item is a weapon. You can't fight without one.`
const armourItemsGenericDescription = `Mark off one piece of armour durability to avoid being injured.`
const wornItemsGenericDescription = `Wear this item to gain benefits. Only one piece of armour can be worn at a time.`
const lightItemsGenericDescription = `A smaller one handed weapon that anyone can pick up and use.`
const martialItemsGenericDescription = `A strong weapon that grants a bonus in combat.`
const bowItemsGenericDescription = `Can attack enemies at a range. Characters have ammunition unless they've run out as part of a failure.`
const vehicleItemsGenericDescription = `Can be used to more quickly get around. Vehicles can only transport a certain number of characters.`
const companionsGenericDescription = `Will follow your commands but may act on their own, be injured, or die.`
const toolItemsGenericDescription = `An item with a variety of uses. Can be used up or broken.`
const supplyItemsGenericDescription = `Items that may be destroyed or consumed as they're used or as part of a risk. Can be refilled or repaired.`

const rulesGear = {
  'heavy items': [
    `A character can only carry one heavy item at a time unless a more specific rule says they can carry more. If a character attempts to carry more than one, they may be hindered in their rolls.`
  ],
  costs: [
    `Collect gold during your adventures or as rewards.`,
    `Food, drinks, and rooms are negligible costs and aren't tracked.`,
    `You can spend gold in the store for additional items or to learn spells.`
  ],
  management: [
    `If a character's equipment loses durability, click on one of its checkmarks. If it breaks it cannot be used.`,
    `You may replace or repair equipment at the storyteller's discretion. Often you will need to pay one gold per item repaired.`,
    `You can manage equipment by opening the equipment store.`
  ],
  'common descriptions': {
    heavy: heavyItemsGenericDescription,
    'one hand': oneHandItemsGenericDescription,
    'two hand': twoHandItemsGenericDescription,
    weapon: weaponItemsGenericDescription,
    armour: armourItemsGenericDescription,
    worn: wornItemsGenericDescription,
  },
  'armour descriptions': {
    armour: armourItemsGenericDescription,
    worn: wornItemsGenericDescription,
    'one hand': oneHandItemsGenericDescription,
    heavy: heavyItemsGenericDescription,
  },
  'weapon descriptions': {
    weapon: weaponItemsGenericDescription,
    'light weapon': lightItemsGenericDescription,
    'martial weapon': martialItemsGenericDescription,
    bow: bowItemsGenericDescription,
    heavy: heavyItemsGenericDescription,
  },
  'tool descriptions': {
    tool: toolItemsGenericDescription
  },
  'supply descriptions': {
    supply: supplyItemsGenericDescription
  },
  'vehicle descriptions':  {
    vehicle: vehicleItemsGenericDescription
  },
  'animal companion descriptions': {
    'animal companion': companionsGenericDescription
  },
  'magic companion descriptions': {
    'magic companion': companionsGenericDescription,
    familiar: `A smaller companion bound magically to your will.`,
    'magic item': magicItemsGenericDescription
  },
  'magic vehicle descriptions': {
    vehicle: vehicleItemsGenericDescription,
    'magic item': magicItemsGenericDescription
  },
  'magic tool descriptions': {
    tool: toolItemsGenericDescription,
    'magic item': magicItemsGenericDescription
  },
  'magic supply descriptions': {
    supply: supplyItemsGenericDescription,
    potion: `Brewed item that has an immediate magic effect when completely consumed.`,
    'magic item': magicItemsGenericDescription
  },
  'magic weapon descriptions': {
    weapon: weaponItemsGenericDescription,
    'light weapon': lightItemsGenericDescription,
    'martial weapon': martialItemsGenericDescription,
    bow: bowItemsGenericDescription,
    heavy: heavyItemsGenericDescription,
    'magic item': magicItemsGenericDescription
  },
  'magic armor descriptions': {
    armour: armourItemsGenericDescription,
    worn: wornItemsGenericDescription,
    'one hand': oneHandItemsGenericDescription,
    heavy: heavyItemsGenericDescription,
    'magic item': magicItemsGenericDescription
  },

}

export default rulesGear
