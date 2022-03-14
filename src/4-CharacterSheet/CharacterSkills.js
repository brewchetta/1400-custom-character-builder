function CharacterSkills({skills}) {

  const skillNames = Object.keys(skills)


  function renderSkills() {
    return skillNames.map(skillKey => <li key={skillKey} className="skill-item">{skillKey} - d{skills[skillKey]}</li>)
  }

  return (

    <>

      <h3>Skills:</h3>

      <ul className="skills-list">

        {renderSkills()}

      </ul>

    </>
  )
}

export default CharacterSkills
