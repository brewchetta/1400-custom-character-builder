import { Fragment } from 'react'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import allSpells from 'data/_spellsCore'
import { useCharacterContext } from 'context/CharacterContext'

/* CURRENTLY UNUSED */
/* ADDING SPELLS IS HANDLED BY THE STORE AND LEVEL UP SCREENS */
// function CharacterSpellsAdd() {

//   const {currentCharacter: { spells, gold }, setCurrentCharacter} = useCharacterContext()

//   const availableSpells = Object.keys(allSpells).filter(s => !spells.includes(s))

//   const handleAddSpell = spell => {
//     setCurrentCharacter( prev => ({ ...prev, spells: [ ...prev.spells, spell ] }))
//   }

//   const handleBuySpell = spell => {
//     if ( gold >= 2 ) {
//       setCurrentCharacter( prev => ({ ...prev, spells: [ ...prev.spells, spell ], gold: prev.gold - 2 }) )
//     }
//   }

//   const renderedSpells = availableSpells.map(spellKey => (
//     <div className="" key={ spellKey }>
//       <button disabled={ gold < 2 } onClick={ () => handleBuySpell(spellKey) }>
//         Buy
//       </button>
//       <button onClick={ () => handleAddSpell(spellKey) }>
//         Take
//       </button>
//       <span>{ allSpells[spellKey].name }</span>
//     </div>
//   ))

//   return (
//     <>
//       <h4>Learn New Spells (Cost 2 Gold):</h4>

//       <div className="flex-wrap-container standard-gap">
//         {renderedSpells}
//       </div>


//     </>
//   )
// }

// export default ConditionalWrapper(CharacterSpellsAdd)
