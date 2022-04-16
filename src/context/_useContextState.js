import { useState, useContext, createContext } from 'react'
import { capitalize } from 'utilities'

function CreateStatefulContextWrapper(defaultState, stateName='state', callback) {
  const StatefulContext = createContext()

  function StatefulContextWrapper( { children } ) {
    const [state, setState] = useState(defaultState)

    function applyState( newState ) {
      if (callback && typeof newState === 'function') {
        setState( prev  => callback( newState( prev ) ) )
      } else if (callback) {
        setState( callback( newState ) )
      } else {
        setState(newState)
      }
    }

    return (
      <StatefulContext.Provider value={ { [stateName]: state, [`set${capitalize(stateName)}`]: applyState } }>
        {children}
      </StatefulContext.Provider>
    )
  }

  const useStatefulContext = () => useContext(StatefulContext)

  return [useStatefulContext, StatefulContextWrapper]
}

export default CreateStatefulContextWrapper
