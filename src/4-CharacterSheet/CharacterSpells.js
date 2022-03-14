function CharacterSpells({spells}) {

  function renderSpells() {
    return spells.map(spell => <li key="spell" className="spell-item">{spell}</li>)
  }

  return (

    <>

      <h3>Spells:</h3>

      <ul>

        {renderSpells()}

      </ul>

    </>
  )
}

export default CharacterSpells
