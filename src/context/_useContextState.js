import { useState, useContext, createContext } from 'react'
import { capitalize } from 'utilities'

function CreateStatefulContextWrapper(defaultState, stateName='state') {
  const StatefulContext = createContext()

  function StatefulContextWrapper({children}) {
    const [state, setState] = useState(defaultState)

    return (
      <StatefulContext.Provider value={{[stateName]: state, [`set${capitalize(stateName)}`]: setState}}>
        {children}
      </StatefulContext.Provider>
    )
  }

  const useStatefulContext = () => useContext(StatefulContext)

  return [useStatefulContext, StatefulContextWrapper]
}

export default CreateStatefulContextWrapper
