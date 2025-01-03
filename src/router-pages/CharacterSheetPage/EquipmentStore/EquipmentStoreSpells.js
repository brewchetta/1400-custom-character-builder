import { useState } from 'react'
import { useCharacterContext } from 'context/CharacterContext'
import EquipmentStoreSpellItem from './EquipmentStoreSpellItem'
import HelpButton from 'shared/HelpButton'
import { capitalize } from 'utilities'
import CollapsibleWrapper from 'shared/CollapsibleWrapper'
import CollapsibleOpenButton from 'shared/CollapsibleOpenButton'
import { rulesPlay } from 'data/rules'

// used for both spells and rituals, category determines the difference
function EquipmentStoreSpells({ category = "spells", spells = [] }) {

  const [isOpen, setIsOpen] = useState(false)
  const { currentCharacter } = useCharacterContext()

  const toggleOpen = () => setIsOpen(isOpen => !isOpen)

  const characterSpells = category === "spells"
  ? currentCharacter.spells.map(s => s.key) || []
  : currentCharacter.rituals.map(s => s.key) || []

  const availableSpells = spells.filter(s => !characterSpells.includes(s.key))

  const renderedSpells = availableSpells.map( spell => (
    <EquipmentStoreSpellItem key={ spell.key } item={ spell } itemKey={ spell.key } category={category} />
  ) )

  const renderedHelpButton = (
    category === "spells" ? <HelpButton info={rulesPlay.spells} />
    : category === "rituals" ? <HelpButton info={rulesPlay.rituals} />
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
