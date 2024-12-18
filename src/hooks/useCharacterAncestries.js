import { useState, useEffect } from 'react'
import coreAncestries from 'data/_ancestriesCore'
// import draochtlanAncestries from 'data/_ancestriesDraochtlan'
import expandedAncestries from 'data/_ancestriesExpanded'
// import skygardenAncestries from 'data/_ancestriesSkygarden'
import { core, ancestriesExpanded, /*skygarden*/ } from 'data/_rulesets'

export default function useCharacterAncestries(ruleset = core) {
  const [ancestries, setAncestries] = useState(coreAncestries)

  useEffect(() => {

    setAncestries(prev => coreAncestries)

    // if (ruleset.includes(skygarden)) {
    //   setAncestries(prev => ({...prev, ...skygardenAncestries}))
    // }

    // if (ruleset.includes(draochtlan)) {
    //   setAncestries(prev => draochtlanAncestries)
    // }

    if (ruleset.includes(ancestriesExpanded)) {
      setAncestries(prev => ({...prev, ...expandedAncestries}))
    }

  }, [ruleset])

  return { ancestries }

}
