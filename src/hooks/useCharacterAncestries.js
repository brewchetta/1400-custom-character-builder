import { useState, useEffect } from 'react'
import coreAncestries from 'data/_ancestriesCore'
import draochtlanAncestries from 'data/_ancestriesDraochtlan'
import expandedAncestries from 'data/_ancestriesExpanded'
import { core, draochtlan, ancestriesExpanded } from 'data/_rulesets'

export default function useCharacterAncestries(ruleset = core) {
  const [ancestries, setAncestries] = useState(coreAncestries)

  useEffect(() => {

    setAncestries(prev => coreAncestries)

    if (ruleset.includes(ancestriesExpanded)) {
      setAncestries(prev => ({...prev, ...expandedAncestries}))
    }

    if (ruleset.includes(draochtlan)) {
      setAncestries(prev => draochtlanAncestries)
    }
  }, [ruleset])

  return { ancestries }

}
