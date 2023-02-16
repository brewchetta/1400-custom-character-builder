import { useState } from 'react'
import { useCharacterContext } from 'context/CharacterContext'
import EquipmentStoreSpellItem from './EquipmentStoreSpellItem'
import HelpButton from 'shared/HelpButton'
import { capitalize } from 'utilities'
import CollapsibleWrapper from 'shared/CollapsibleWrapper'
import CollapsibleOpenButton from 'shared/CollapsibleOpenButton'

// used for both spells and rituals, category determines the difference
function EquipmentStoreSpells({ category = "spells", spells = [] }) {

  const [isOpen, setIsOpen] = useState(false)
  const characterContext = useCharacterContext()

  const toggleOpen = () => setIsOpen(isOpen => !isOpen)

  const characterSpells = category === "spells"
  ? characterContext.currentCharacter.spells
  : characterContext.currentCharacter.rituals

  const availableSpells = Object.keys(spells).filter(s => !characterSpells.includes(s))

  const renderedSpells = availableSpells.map( spellKey => (
    <EquipmentStoreSpellItem key={ spellKey } spell={ spells[spellKey] } spellKey={ spellKey } />
  ) )

  const renderedHelpButton = (
    category === "spells" ? <HelpButton info={"TODO: Spells info goes here!"} />
    : category === "rituals" ? <HelpButton info={"TODO:Rituals info goes here!"} />
    : <HelpButton info={"Could not find information for that..."} />
  )

  return (
    <div>

      <h3>
        <CollapsibleOpenButton toggleOpen={toggleOpen} isOpen={isOpen} />
        {" "}<span onClick={toggleOpen} style={{cursor: "pointer"}}>{ capitalize( category ) }</span>
        {" "}{renderedHelpButton}
      </h3>

      <CollapsibleWrapper isOpen={isOpen}>
        <table>
          <tbody>

            <tr>
              <th>Name</th>
              <th>Buy With Money</th>
              <th>Add For Free</th>
            </tr>

            { renderedSpells }

          </tbody>

        </table>

      </CollapsibleWrapper>

    </div>
  )
}

export default EquipmentStoreSpells
