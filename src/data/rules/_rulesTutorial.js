const rulesTutorial = {
  welcome: [
    `This is 1400 plus. This is a tabletop roleplaying game (TTRPG) set in a fantasy world of your choosing.`,
    `You can play this game with any number of people but we recommend between 3 and 7 players. One of you will be the storyteller who is similar to the dungeon master or game master in other games while everyone else roleplays as an adventurer.`,
    `You can learn more about the players, characters, storyteller, and the world in other sections of the rulebook.`,
    `One last note, if a rule that you see in conflicts with another rule, the more specific rule takes precedence.`,
    `Welcome and let's get started!`,
  ],
  storyteller: [
    `The storyteller wears many hats during the adventure. They describe the places you are and roleplay the characters you will meet.`,
    `Your storyteller also embodies the dangers you'll face along the way whether they're monsters, traps, or evil magics. These obstacles heighten the challenge and make the story more exciting. It's important to remember that the storyteller isn't your adversary, they're just there to make the adventure more interesting.`,
    `Gameplay revolves around your adventurers while the storyteller fills in the details of the world and sets challenges to overcome. While the storyteller may do things to facilitate, it's up to the players to move forward and pursue their quests.`,
    `The storyteller also arbitrates the rules, if you could consider a world with elves, orcs, and magic to be something with rules. It's up to the storyteller to decide whether an action is reasonable or unrealistic. Sometimes they'll bring you back down to earth by saying, "No you can't defy gravity... but you can learn to fly with magic".`,
  ],
  dice: [
    `There are many types of dice in this game and you'll use all of them at one point or another.`,
    `A dice's size is determined by the number of sides it has. We use a special notation to show how big a dice is. A d4 is a four sided dice, a d6 is a six sided dice, so on and so forth. The largest dice in this game is the d20, a special dice for 'luck' rolls which get outlined later.`,
    `Dice are most often used for character skills. If a skill is a d8 for example, any challenges you face with that skill use a d8 to roll.`,
    `Every once in a while your character might be hindered. This might happen when you're attempting Ranged Combat in a heavy fog, Sneaking in plain sight, or you've been injured and struggle to cast your spells. When hindered, your character rolls all their skills with a d4 regardless of their training.`
  ],
  challenges: [
    `Players embody their characters in the game's world. Whenever you'd like to do something, just tell everyone what it is you'd like to do.`,
    `The storyteller will tell you if something is impossible. For example, just stating you'd like to jump to the roof of a ten story building without tools or magic probably won't work.`,
    `If something is possible but challenging you'll roll a dice depending on the skill you want to use. For example, if you wanted to persuade a troll to let you pass you would you would roll the appropriate skill and if you succeed then you may pass, if you fail then you suffer the consequences.`,
    `An important aspect of a challenge is that every challenge has a risk. If there's no risk then there's no need to roll. If you don't succed or only partially succeed then you'll suffer the risk's consequences. In the example above, the risk might be that the troll attacks and injures you. The storyteller should always hint at a risk when giving a challenge.`,
    `Each skill will have a dice size associated with it, and that's the dice you'll roll for the skill. If you're not trained in a skill then you roll a d6 and if you're hindered or injured you roll a d4. Normally the highest you can roll for a skill is a d12.`,
    `When you roll a dice, consult below to determine what happens:`,
    `1-2 Disaster. Suffer the full risk. Storyteller decides if you succeed at all.`,
    `3-4 Setback. A lesser consequence or partial success.`,
    `5+ Success. The higher the roll, the better.`,
    `If success can't get you what you want, you'll at least get useful information or set up some sort of future advantage for the people around you. At the very least you'll be rewarded with knowledge.`,
    `The storyteller might increase these numbers for more difficult challenges but will inform you beforehand.`
  ],
  combat: [
    'Combat in this system is narrative rather than mechanical. For those used to more mechanical battles you may have to deprogram certain concepts like initiative, health points, and attacking things until their health bar goes to zero. Instead, when encountering enemies, the player characters will need to describe how they succeed against those enemies using their skills and teamwork to end the fight.', 
    'One at a time, players describe actions they take to aid each other, build on previous attacks, cover for failures, and set up a decisive victory. The storyteller tracks each success and failure. Partial successes don\'t count either way.',
    'Players can be injured or suffer damage to their armor and items like normal during these challenges.',
    'Certain skills like Melee Combat will require items like a Short Sword. Attempting to attack with your bare fists or an improvised weapon may raise the difficulty of a challenge.',
    'Overusing skills, for example two characters using Melee Combat in a row, might incur additional difficulty as enemies adapt to your strategies. Using creative strategies however can be rewarded with additional successes if they succeed.',
    'Combat normally ends after each player has a chance to act, although the storyteller might end the battle early or demand additional challenges depending on the foe. A player can\'t act again until every player has gone.', 
    'At the end, if the players had more successes than failures they may narrate their victory which may be peaceful, violent, or somewhere in between.',
    'By contrast if there were more failures than successes, the storyteller narrates how the characters are routed, captured, or suffer other negative consequences.',
    'If the successes and failures are tied, players continue attempting challenges until the next success or failure.',
  ],
  inventory: [
    `Your character can carry as much as makes sense for their adventure. There aren't any strict rules on how much you can carry with the exception of Heavy items.`,
    `A character can only bring one heavy item with them at a time or else they're Hindered on their rolls (all of their rolls are made with a d4). Realistically, some heavy items shouldn't be carried at all. It probably wouldn't make sense for a character to lug around a sailboat while on dry land for example.`,
    `Additionally, a character wielding a two handed weapon or equipped with heavy armor may be hindered as well without the proper training.`,
    `The storyteller is the ultimate arbiter of what can and cannot be carried.`,
    `Characters can find or purchase new equipment on their journeys. You can open the shop by clicking the chest icon near your inventory. The storyteller may occasionally give characters items as rewards.`
  ],
  spells: [
    'A character can only learn two spells without special training',
    'A spell\'s name describes what it does. You can add your own more specific description or interpretation to the spell when you cast it and the storyteller determines its limitations.',
    `The storyteller may impose a challenge if the spell presents a risk. This can include overexerting your character\'s magic for larger effects and being unable to cast the spell for a while. You can disable a spell by clicking on it in your character's page.`,
    'If the spell has any risk, the roll is Spellcasting.',
    `Characters can learn new spells in exchange for gold in the equipment shop.`
  ],
  rituals: [
    'A ritual takes ten minutes in game to cast and uses up a magical supply with the ritual tag.',
    'The blood of a recently killed person, or the sacrifice of a rare animal or plant can be substituted for a magical supply.',
    'You roll a spellcasting challenge to see how successfully you prepared the ritual.',
    'Multiple people can take part in a ritual in which case they all roll and the highest roll counts.',
    'Communal ritual casting connects the people casting it. Before the ritual ends you learn one truth about another participant in the ritual.',
    'To "learn one truth" ask a player a question about their character and they must answer truthfully. Only one question can be asked of each character.',
  ],
  advancement: [
    `There's are no "levels" in this game. Instead, characters can either improve a skill at the end of every adventure or else gain a new training.`,
    `Once an adventure is over, increase one of the skills or add a new training by editing your character.`,
    `Improving Skills: You can either choose a new skill to train in or improve one of your existing skills (none→d8→d10→d12).`,
    `Gain Training: TODO ADD TRAININGS`, // TODO: Add training instructions here
    `The storyteller may also award you gold for finding loot and for any services rendered. The payout is usually agreed upon with the quest giver and an adventurer might also find items each worth an additional d4 gold in the course of their quest.`,
    `You can use the gold to buy new items in the equipment store as long as you're somewhere that you can buy those items (this is up to the storyteller's discretion). Some of the more valuable magic items might not be available unless you find them in the course of your adventures.`
  ],
  health: [
    `Given how dangerous your adventures are, injury is often a risk. There are no health bars or hit points, a character is either healthy, injured, or dead.`,
    `When a character suffers physical harm, they have some defense against it. If they're wearing armor then the armor can lose a point of durability and the character remains unharmed. Once armor has lost all durability it becomes broken and loses any abilities it once had. You can repair armor with an appropriate craftsperson for one gold.`,
    `If a character does become injured during the game, they become hindered (they can only roll with a d4). Characters can heal from their injuries with enough time. You can also heal injuries with the Healing Ritual or a Potion of Healing.`,
    `A character who's injured is at risk of death. If they would suffer harm again, they don't become more injured... they die!`,
    `Beyond character health, risks might also include damage to equipment. You can mark off equipment durability by clicking its checkboxes. Once a piece of equipment loses all durability, it's broken and can't be used.`
  ],
  luck: [
    `A player gets one luck dice per adventure. This is a d20 that the player can roll to replace any poor roll they've just made. That player then sets aside the luck dice and can't use it again. On a roll of 20 they keep don't set aside the dice.`,
    `Once a luck dice is used, the storyteller can return it to the player as a reward for good roleplaying, acts of sacrifice, or any other reason at all.`,
    'Players can also regain their luck dice for describing dangers during travel or a meal during downtime (see Travel & Rest).',
    `Players always get their luck dice back at the end of an adventure or between gaming sessions.`
  ],
  'travel & rest': {
    'travel': 'While travelling from one place to another, each player describes something of interest like a vista, another group of travelers, or a distant wolf howling. If the storyteller decides there is danger involved, the player rolls a d6 and on a 1-2 the group must contend with that danger. Regardless of the outcome, the player regains their luck die.',
    'rest': 'When the group rests they briefly describe their accomodations. Any player then describes a meal, song, or activity. The character can turn back time briefly to describe any preparation such as collecting ingredients for a meal. The player who described the activity regains their luck die.'
  },
  'session zero': {
    'session zero': `Session zero is often considered an important first session for your group of adventurers. It serves several important functions: first it creates a safe space for everyone to play; secondly, it introduces the world to the players; thirdly, it establishes the rules.`,
    'storyteller': `This might seem obvious but choosing the storyteller is an important step nonetheless. The storyteller serves an important function in the game and players need to decide who will take on that role.`,
    'lines and veils': `A very important task in any session is to define lines and veils. A line is something that you never want to see in your game while a veil is something that's only alluded to. Make a list of these things for everyone to reference. Common themes include sexual content, harm to children or animals, drugs, political topics, racism, etc.`,
    'worldbuilding': `What does your fantasy world look like? While the world can be specific or general, generic or unique, we recommend looking at the Worldbuilding section of the rulebook for an idea of how to quickly and inclusively build a setting.`,
    'making your character': `Once everyone has gone through the rulebook it's time for the players to build their first characters!`
  },
  worldbuilding: [
    `Whether you're playing a one-shot or a longer campaign, worldbuilding is integral to your story. This is a suggested guide to worldbuilding to make everyone feel like they have some ownership over the lands that they'll be adventuring in.`,
    `The storyteller asks players to take turns answering prompts below until each player has answered three. Multiple players can answer the same prompt and they're allowed to collaborate with each other (and the storyteller) on their answers.`,
    `For example, if two players want to answer "Describe a distant land" they might each describe a foreign kingdom and then collaborate, deciding their kingdoms have been at war with each other for the past hundred years.`,
    `Here are suggested prompts:`,
    `1. Describe a distant land.`,
    `2. Describe the town, village or city that your adventurer came from.`,
    `3. What is the name of a tavern your adventurer frequents? Describe its characteristics.`,
    `4. Describe an upcoming festival or holy day that the people in this area celebrate.`,
    `5. What important event happened before your adventurer was born? How did it change the culture or land around you?`,
    `6. Describe some nearby ruins and the rumors that surround them.`,
    `7. Monsters/villains have attacked recently. Who are they?`,
    `8. Name a god who protects these lands. Alternately name an evil god who covets these lands.`,
    `9. Name and describe a public figure like a monarch or a civil leader.`,
    `10. What is an interesting custom or taboo in the culture your character comes from?`,
    `11. Make up a prompt and answer it!`,
    `Once players have created the world, they ought to build characters and decide how those characters know each other. It's suggested that each character has a tie to one of the worldbuilding prompts and each character knows at least one of the other adventurers. That being said, if you want to be total strangers then that's up to you!`
  ],
  'custom rules': {
    'your own rules': `The storyteller and players can agree on any house rules of their choice. Additionally, this site supports a few extra rulesets for more options while building characters.`,
    'ancestries expanded': `Adds additional ancestries for player characters to choose from.`,
    'extended D&D classes': `Adds additional classes based on those found in dungeons and dragons. (Made by Nate)`,
    'draochtlan': `Replaces ancestries to match the custom Draochtlan setting. Cannot be used with other rules that change ancestries. (Made by Nate)`,
  }
}

export default rulesTutorial;
