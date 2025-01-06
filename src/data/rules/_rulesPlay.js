const rulesPlay = {
  play: [
    'How it works: Players describe what their characters do. The GM advises when their action is impossible, requires extra steps, demands a cost, or presents a risk. Players generally only roll if they need to avoid a risk.'
  ],
  specificity: [
    'These are general rules. A specific rule overrides a general one.',
    'If two rules conflict, use common sense and consensus to decide which one to use.',
  ],
  dice: [
    `This system requires six differently sized dice determined by the number of sizes.`,
    `A d4 is a four sided dice, a d6 is a six sided, etc.`,
    `The d20 is only used in special circumstances, most often for a luck roll.`,
  ],
  rolling: [
    `When faced with a challenge, roll a d6 skill die - higher with a relevant skill.`,
    `If hindered or injured, roll a d4 instead.`,
    `1-3 Failure. Suffer the full risk. Storyteller decides if you succeed at all.`,
    `4+ Success. Higher rolls mean more impressive results.`,
    `If success can't get you what you want, you'll at least get useful info or set up an advantage.`,
    `The storyteller might increase the roll needed for difficult tasks.`
  ],
  luck: [
    `Once per adventure a character can use their luck dice (d20).`,
    `When a character rolls a die they can spend their luck for a better result: they roll a d20 and substitute the new roll in place of the old one.`,
    `The storyteller can return players their luck dice for good roleplaying, generosity, sacrifice, or any other reason.`
  ],
  spells: [
    'A character can only add three spells to their spellbook without special training',
    'Spells have names. When using a spell, describe how it\'s cast and its intended effect.',
    'The storyteller might impose a challenge if the spell presents a risk or a powerful effect.',
    'If the spell has any risk, the roll is a d6 unless you have special training',
    'The storyteller determines based on success and intention how the effect manifests.',
  ],
  rituals: [
    'Rituals take ten minutes to cast and use a magical supply with the ritual tag. The challenge roll for a ritual is the same for spellcasting (d6 or special training).',
    'The blood of a recently killed person, or the sacrifice of a rare animal or plant can be substituted.',
    'Multiple people can take part. Each rolls a spellcasting challenge. The highest roll determines success or failure.',
    'Each participant in the ritual becomes "connected" and shares one truthful answer to another player\'s question.',
  ],
  load: [
    `Carry as much as makes sense, but more than one heavy item may hinder you at times.`
  ],
  advancement: [
    `After an adventure, increase a skill by editing your character (none→d8→d10→d12). Your storyteller may award you gold as well (usually 1d6 to each member).`
  ],
  training: [
    `Your training determines special abilities and features. You can learn new training during downtime after an adventure.`
  ],
  defence: [
    `Instead of being injured, your worn armor loses a point of durability. Alternately, one of your items breaks or some other ill effect happens.`,
    `In town it takes one gold to repair a broken or disabled item.`
  ],
  hindrance: [
    `If your character is hindered, either in the short or long term, roll with a d4 instead of a larger dice.`
  ],
  harm: [
    `Injuries hinder (roll with a d4 for all skill challenges), and heal with time, magic, or potions.`,
    `Exhaustion, encumbrance, low morale, or other effects can also be considered "injuries".`,
    `If killed, make a new character to be introduced ASAP. Favour inclusion over realism.`
  ],
  'game mastery': [
    `Lead the group in setting lines not to cross in play. Fast-forward, pause, or rewind`,
    `redo scenes for pacing and safety, and invite players to do likewise. Present dilemmas and problems`,
    `you don’t know how to solve. Move the spotlight to give everyone time to shine. Test periodically for bad luck (e.g., run out of ammo, or into guards) roll d6 to check for (1–2) trouble now or (3–4) signs of trouble.`
  ],
  // 'custom rules': {
  //   'ancestries expanded': `Adds additional ancestries for player characters to choose from.`,
  //   'skygarden': `Adds additional ancestries for players to choose from based on the custom Skygarden setting.`,
  //   'extended D&D classes': `Adds additional classes based on those found in dungeons and dragons. (Made by Nate)`,
  //   'draochtlan': `Replaces ancestries to match the custom Draochtlan setting. Cannot be used with other rules that change ancestries. (Made by Nate)`,
  // }
}

export default rulesPlay;
