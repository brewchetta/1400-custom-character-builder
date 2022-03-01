import ConditionalWrapper from 'shared/ConditionalWrapper'

function BioAncestryDisplay({ancestry}) {

  return (
    <div>
      <h4>{ancestry.name}</h4>
      <p>{ancestry.description}</p>
    </div>
  )

}

export default ConditionalWrapper(BioAncestryDisplay)
