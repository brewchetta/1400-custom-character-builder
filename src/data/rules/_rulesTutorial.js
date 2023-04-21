const rulesTutorial = {
  welcome: [
    `This is 1400 plus. This is a tabletop roleplaying game (TTRPG) set in a fantasy world of your choosing.`,
    `You can play this game with any number of people but we recommend between 3 and 7 players. One of you will be the storyteller who is similar to the dungeon master or game master while everyone else roleplays as an adventurer of their own invention.`,
  ],
  storyteller: [
    `The storyteller wears many hats during the adventure. They describe the places you are and roleplay the characters you will meet.`,
    `A storyteller also embodies the dangers you face along the way whether they're monsters, traps, or evil magics. They'll also throw obstacles in your way to heighten the challenge and make the story more exciting. It's important to remember that the storyteller isn't your adversary, they're just there to make the story more interesting.`,
    `Gameplay revolves around your adventurers while the storyteller fills in the details of the world and sets challenges to overcome. While the storyteller may do things to facilitate, it's up to the players to move forward and pursue their quests.`,
  ],
  dice: [
    `There are many types of dice in this game and you'll use all of them at one point or another.`,
    `A dice's size is determined by the number of sides it has. We use a special notation to show how big a dice is. A d4 is a four sided dice, a d6 is a six sided dice, so on and so forth. The largest dice in this game is the d20, a special dice for special occasions.`,
    `Dice are most often used for character skills. If a skill is a d8 for example, you'll roll with a d8 when you roll for that skill.`
  ],
  "dice challenges": [
    `Players embody their characters in the game's world. Whenever you'd like to do something, just tell everyone what it is you'd like to do.`,
    `The storyteller will tell you if something is impossible. For example, just stating you'd like to jump to the roof of a ten story building without tools or magic probably won't work.`,
    `If something is possible but challenging you'll roll a dice depending on the skill you want to overcome it with. For example, if you wanted to defeat an undead skeleton and you had a sword then you could declare you want to fight it in Melee Combat and the storyteller tells you the risks. You roll that skill and if you succeed then you destroy the skeleton, if you fail then you suffer the risk.`,
    `An important aspect of a challenge is that every challenge has a risk. If there's no risk then there's no need to roll. If you don't succed or only partially succeed then you'll suffer the risk's consequences. In the example above, the risk might be that the skeleton injures you. The storyteller should always mention the risk when giving a challenge.`,
    `Each skill will have a dice size associated with it, and that's the dice you'll roll for the skill. If you're not trained in a skill then you roll a d6 and if you're hindered or injured you roll a d4. Normally the highest you can roll for a skill is a d12.`,
    `When you roll a dice, consult below to determine what happens:`,
    `1-2 Disaster. Suffer the full risk. Storyteller decides if you succeed at all.`,
    `3-4 Setback. A lesser consequence or partial success.`,
    `5+ Success. The higher the roll, the better.`,
    `If success can't get you what you want, you'll at least get useful info or set up some sort of future advantage for the people around you. At the very least you'll be rewarded with knowledge.`,
    `The storyteller might increase these numbers for more difficult challenges but will inform you beforehand.`
  ],
  spells: [
    'A spell\'s name describes what it does. You can add your own more specific description or interpretation to the spell when you cast it and the storyteller determines its limitations.',
    'The storyteller may impose a challenge if the spell presents a risk. This can include overexerting your character\'s magic and being unable to cast the spell for a while. You can disable a spell by clicking the checkmark.',
    'If the spell has any risk, the roll is Spellcasting.',
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

export default rulesTutorial;
