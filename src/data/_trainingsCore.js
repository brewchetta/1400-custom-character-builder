const trainings = {
    abjurerOfEvil: {
        name: "Abjurer of Evil",
        description: "Spirits, demons, and the undead cannot attempt to harm you directly unless they are especially powerful.",
        prerequisites: ['disciple']
    },
    artisan: {
        name: "Artisan",
        description: "You can mend damaged armor without the aid of an artisan. Each square of durability takes an hour to mend."
    },
    bloodthirsty: {
        name: "Bloodthirsty",
        description: "Whenever anything dies by your hand you regain your Luck Dice."
    },
    brawler: {
        name: "Brawler",
        description: "You get +1 to Melee Combat when you aren't armed with weapons."
    },
    chef: {
        name: "Chef",
        description: "When describing an end of day meal, roll for a Cooking challenge. On a 3+, all players regain their Luck Dice."
    },
    crusader: {
        name: "Crusader",
        description: "Whenever you defeat a spirit, demon, or the undead you regain your Luck Dice.",
        prerequisites: ['disciple']
    },
    disciple: {
        name: "Disciple",
        description: "Whenever you heal or aid someone you regain your Luck Dice."
    },
    healer: {
        name: "Healer",
        description: "You can make a medicine roll to gather helpful herbs and heal a single character's wound over the course of an hour."
    },
    heavilyArmed: {
        name: "Heavily Armed",
        description: "You can wield two handed weapons without being hindered.",
        prerequisites: ['warrior']
    },
    heavilyArmored: {
        name: "Heavily Armored",
        description: "You can wear heavy armor without being hindered.",
        prerequisites: ['warrior']
    },
    lucky: {
        name: "Lucky",
        description: "You have two Luck Dice instead of one. When you regain a Luck Dice, you only regain one at a time."
    },
    magicalMusician: {
        name: "Magical Musician",
        description: "You can use Performing instead of Spellcasting when casting spells. This only works if you sing or use an instrument as part of casting the spell."
    },
    mageInitiate: {
        name: "Mage Initiate",
        description: "You have room for 4 spells in your spellbook."
    },
    mageAdept: {
        name: "Mage Adept",
        description: "You have room for 8 spells in your spellbook.",
        prerequisites: ['mageInitiate']
    },
    mageAscendant: {
        name: "Mage Ascendant",
        description: "You have room for any number of spells in your spellbook.",
        prerequisites: ['mageAdept']
    },
    ritualist: {
        name: "Ritualist",
        description: "If you are part of a Ritual and you aren't injured, you can use your own blood in the place of the Ritual Item. Doing so injures you."
    },
    skulkerThief: {
        name: "Skulker Thief",
        description: "Whenever you steal something valuable you regain your Luck Dice."
    },
    strong: {
        name: "Pack Mule",
        description: "You can carry an additional Heavy Item without hindrance."
    },
    tenacious: {
        name: "Tenacious",
        description: "When you're hindered due to injury, use a d6 instead of a d4."
    },
    wanderer: {
        name: "Wanderer",
        description: "Whenever you find something lost to time or undiscovered you regain your Luck Dice."
    },
    wandererDruid: {
        name: "Wanderer Druid",
        description: "On gaining this training choose an animal no larger than a bear and no smaller than a mouse. You can shapeshift into that animal at will.",
        prerequisites: ['wanderer']
    },
    wandererTamer: {
        name: "Wanderer Tamer",
        description: "You have an animal companion who joins your adventure. The companion has its own health, personality and motives however it considers you a friend so long as you treat it well. You may also have a number of small animal companions like sparrows or squirrels.",
        prerequisites: ['wanderer']
    },
    warrior: {
        name: "Warrior",
        description: "Whenever you finish combat you regain your Luck Dice."
    }
}

export default trainings