import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import spellsObj from 'data/_spellsCore'

function CharacterSpells({spells}) {

  const renderedSpells = spells.map(spell => (
    <div key={spell} className="crossable-checkbox">
      <Checkbox
        name={`spell-${toSpinalCase(spell)}`}
        labelText={spellsObj[spell]?.name}
      />
    </div>
  ))

  return (

    <>

      <h3>Spells:</h3>

      <ul className="skills-list grid-columns-small">

        {renderedSpells}

      </ul>

    </>
  )
}

export default ConditionalWrapper(CharacterSpells)
