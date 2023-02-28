const rulesPlay = {
  play: [
    'Players describe what their characters do. The GM advises when their action is impossible, requires extra steps, demands a cost, or presents a risk. Players only roll to avoid risks.'
  ],
  rolling: [
    `When faced with a challenge, roll a d6 skill die - higher with a relevant skill, or d4 if injured or hindered.`,
    `1-2 Disaster. Suffer the full risk. Storyteller decides if you succeed at all.`,
    `3-4 Setback. A lesser consequence or partial success.`,
    `5+ Success. The higher the roll, the better.`,
    `If success can't get you what you want, you'll at least get useful info or set up an advantage.`,
    `The storyteller might increase how high you need to roll for more difficult challenges.`
  ],
  spells: [
    'A spell\'s name describes it. Describe the spell when you cast it and the storyteller determines its limitations.',
    'The storyteller may impose a challenge if the spell presents a risk. This can include overexerting your character\'s magic and being unable to cast the spell for a while.',
    'If the spell has any risk, the roll is Spellcasting',
    'You can disable a spell by clicking the checkmark.'
  ],
  rituals: [
    'A ritual takes ten minutes to cast and uses up a magical supply with the ritual tag.',
    'The blood of a recently killed person, or the sacrifice of a rare animal or plant can be substituted for a magical supply.',
    'You roll a spellcasting challenge to see how successfully you prepared the ritual.',
  ],
  load: [
    `Carry as much as makes sense, but more than one heavy item may hinder you at times.`
  ],
  advancement: [
    `After an adventure, increase a skill by editing your character (none→d8→d10→d12). Your storyteller may award you gold as well (usually d6 to each member).`
  ],
  defence: [
    `Say how one of your items breaks to turn a hit into a brief hindrance. Broken gear is useless until repaired.`
  ],
  harm: [
    `Injuries hinder, and heal with time, magic, or potions. If killed, make a new character to be introduced ASAP. Favour inclusion over realism.`
  ],
  'game mastery': [
    `Lead the group in setting lines not to cross in play. Fast-forward, pause, or rewind`,
    `redo scenes for pacing and safety, and invite players to do likewise. Present dilemmas and problems`,
    `you don’t know how to solve. Move the spotlight to give everyone time to shine. Test periodically for bad luck (e.g., run out of ammo, or into guards) roll d6 to check for (1–2) trouble now or (3–4) signs of trouble.`
  ],
  'custom rules': {
    'ancestries expanded': `Adds additional ancestries for player characters to choose from.`,
    'extended D&D classes': `Adds additional classes based on those found in dungeons and dragons. (Made by Nate)`,
    'draochtlan': `Replaces ancestries to match the custom Draochtlan setting. Cannot be used with other rules that change ancestries. (Made by Nate)`,
  }
}

export default rulesPlay;
