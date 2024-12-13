const ancestries = {
  orc: {
    "name": "orc",
    "description": "Increase 1 skill. If you would be harmed, roll a d6. On a 5 or higher, you shrug off the injury.",
    "specialText": "If you would be harmed, roll a d6. On a 5 or higher, you shrug off the injury.",
    "skills": 1,
    "tags": ["ancestries-expanded"],
    "rules": "ancestries-expanded"
  },
  goblin: {
    "name": "goblin",
    "description": "Increase 1 skill. You roll a d6 instead of a d4 when hindered unless you wear or carry any heavy items.",
    "specialText": "You roll a d6 instead of a d4 when hindered unless you wear or carry any heavy items.",
    "skills": 1,
    "tags": ["ancestries-expanded", "unhindered"],
    "rules": "ancestries-expanded"
  },
  devilkin: {
    "name": "devilkin",
    "description": "Learn 1 spell. You are immune to fire and cold.",
    "specialText": "You are immune to fire and cold.",
    spells: 1,
    "tags": ["ancestries-expanded"],
    "rules": "ancestries-expanded"
  },
  dragonkin: {
    "name": "dragonkin",
    "description": "Learn 1 skill. You can breathe fire and can't be hurt by it.",
    "specialText": "You can breathe fire and can't be hurt by it.",
    "skills": 1,
    "tags": ["ancestries-expanded"],
    "rules": "ancestries-expanded"
  },
  centaur: {
    "name": "centaur",
    "description": "Learn 1 skill. You can carry an additional heavy item.",
    "specialText": "You can carry an additional heavy item.",
    "skills": 1,
    "tags": ["ancestries-expanded", "strong"],
    "rules": "ancestries-expanded"
  },
  dryad: {
    "name": "dryad",
    "description": "Learn 1 spell. You can understand and speak to plants.",
    "specialText": "You can understand and speak to plants.",
    spells: 1,
    "tags": ["ancestries-expanded"],
    "rules": "ancestries-expanded"
  },
  beastkin: {
    "name": "beastkin",
    "description": "Learn 4 skills. You are hindered when using any skill you aren't trained in.",
    "specialText": "You are hindered when using any skill you aren't trained in.",
    "skills": 4,
    "tags": ["ancestries-expanded", "specialized"],
    "rules": "ancestries-expanded"
  },
}

export default ancestries
