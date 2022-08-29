const rulesPlay = {
  play: [
    'Players describe what their characters do. The GM advises when their action is impossible, requires extra steps, demands a cost, or presents a risk. Players only roll to avoid risks.'
  ],
  rolling: [
    `Roll a d6 skill die - higher with a relevant skill, or d4 if hindered by injury or circumstances. If helped by circumstances, roll an  extra d6; if helped by an ally, they roll their skill die and share the risk. Take the highest die.`,
    `1-2 Disaster. Suffer the full risk. GM decides if you succeed at all. If risking death, you die.`,
    `3-4 Setback. A lesser consequence or partial success. If risking death, you're maimed.`,
    `5+ Success. The higher the roll, the better.`,
    `If success can't get you what you want, you'll at least get useful info or set up an advantage.`
  ],
  load: [
    `Carry as much as makes sense, but more than one heavy item may hinder you at times.`
  ],
  advancement: [
    `After an adventure, increase a skill (none→d8→d10→d12), gain d6 gold pieces (GP), and +1 guild rep. Roll d20 ≤ a fitting rep to check if someone recognizes you.`
  ],
  defence: [
    `Say how one of your items breaks to turn a hit into a brief hindrance. Broken gear is useless until repaired.`
  ],
  harm: [
    `Injuries hinder, and heal with time or aid. If killed, make a new character to be introduced ASAP. Favour inclusion over realism.`
  ],
  'game mastery': [
    `Lead the group in setting lines not to cross in play. Fast-forward, pause, or rewind`,
    `redo scenes for pacing and safety, and invite players to do likewise. Present dilemmas and problems`,
    `you don’t know how to solve. Move the spotlight to give everyone time to shine. Test periodically for bad luck (e.g., run out of ammo, or into guards) roll d6 to check for (1–2) trouble now or (3–4) signs of trouble.`
  ]
}

export default rulesPlay;
