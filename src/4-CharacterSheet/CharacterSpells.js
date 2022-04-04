import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import spellsObj from 'data/_spellsCore'

function CharacterSpells({spells}) {

  const renderedSpells = spells.map(spell => (
    <div key={spell} className="spell-item">
      <Checkbox
        name={`spell-${toSpinalCase(spell)}`}
        labelText={spellsObj[spell]?.name}
      />
      {/*checked={spellIsChosen} */}
      {/*onChange={() => handleChange(spell)} */}
      {/*disabled={!spellsLeftToChoose && !spellIsChosen} */}
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
