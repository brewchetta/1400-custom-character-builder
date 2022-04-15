import { useState, useContext, createContext } from 'react'
import { capitalize } from 'utilities'

function CreateStatefulContextWrapper(defaultState, stateName='state', callback) {
  const StatefulContext = createContext()

  function StatefulContextWrapper({children}) {
    const [state, setState] = useState(defaultState)

    function setLocalState(newState) {
      setState(
        callback(newState)
      )
    }

    return (
      <StatefulContext.Provider value={{[stateName]: state, [`set${capitalize(stateName)}`]: setLocalState}}>
        {children}
      </StatefulContext.Provider>
    )
  }

  const useStatefulContext = () => useContext(StatefulContext)

  return [useStatefulContext, StatefulContextWrapper]
}

export default CreateStatefulContextWrapper
