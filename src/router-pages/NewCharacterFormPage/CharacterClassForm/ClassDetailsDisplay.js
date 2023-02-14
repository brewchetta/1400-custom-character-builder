import ConditionalWrapper from 'shared/ConditionalWrapper'

function ClassDetailsDisplay({characterClass}) {

  return (
    <div>

      <h2>{characterClass.name}</h2>
      <p>{characterClass.description}</p>

    </div>
  )

}

export default ConditionalWrapper(ClassDetailsDisplay)
