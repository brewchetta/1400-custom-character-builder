function LinkPlayerCharacterCard({character, handleAttachCharacterToPlayer}) {
  return (
    <div>

        <h3>{character.name}</h3>
        <button onClick={() => handleAttachCharacterToPlayer(character)}>Add to Group</button>
        {/* help button with details about what that involves here */}

    </div>
  )
}

export default LinkPlayerCharacterCard