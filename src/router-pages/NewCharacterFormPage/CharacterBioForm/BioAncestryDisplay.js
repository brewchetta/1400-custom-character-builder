import ConditionalWrapper from 'shared/ConditionalWrapper'
import { capitalize } from 'utilities'

function BioAncestryDisplay({ancestry}) {

  return (
    <div>
      <h4>{capitalize(ancestry.name)}</h4>
      <p>{ancestry.description}</p>
    </div>
  )

}

export default ConditionalWrapper(BioAncestryDisplay)
