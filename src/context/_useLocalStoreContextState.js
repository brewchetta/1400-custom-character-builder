import { useState, useContext, createContext } from 'react'
import { capitalize } from 'utilities'

function CreateStatefulContextWrapper(defaultState, stateName='state', callback) {
  const StatefulContext = createContext()

  function StatefulContextWrapper({children}) {
    const [state, setState] = useState(defaultState)

    function setLocalState(newState) {
      // the set state here needs to take into account the normal setState can take in a function callback with `prev` or it can take in an argument
      console.log('TODO: Check the comment written above this log');
      setState( prev => callback(newState) )
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
