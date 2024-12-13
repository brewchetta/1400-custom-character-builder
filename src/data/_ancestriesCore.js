const ancestries = {
  human: {
    "name": "human",
    "description": "Increase 2 skills at once.",
    "skills": 2,
    "tags": ["core"],
    "rules": "core"
  },
  elf: {
    "name": "elf",
    "description": "Learn 1 spell. You cannot be beguiled or put to sleep by magic. You live twice as long as other ancestries.",
    "specialText": "You cannot be beguiled or put to sleep by magic. You live twice as long as other ancestries.",
    "spells": 1,
    "tags": ["core"],
    "rules": "core"
  },
  dwarf: {
    "name": "dwarf",
    "description": "Increase 1 skill. You can see fine in low light and resist the effects of poisons and ale.",
    "specialText": "You can see fine in low light and resist the effects of poisons and ale.",
    "skills": 1,
    "tags": ["core"],
    "rules": "core"
  },
}

export default ancestries