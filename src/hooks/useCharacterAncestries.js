import { useState, useEffect } from 'react'
import coreAncestries from 'data/_ancestriesCore'
import draochtlanAncestries from 'data/_ancestriesDraochtlan'
import { core, draochtlan } from 'data/_rulesets'

export default function useCharacterAncestries(ruleset = core) {
  const [ancestries, setAncestries] = useState(coreAncestries)

  useEffect(() => {
    switch (ruleset) {
      case draochtlan:
        setAncestries(draochtlanAncestries)
        break;
      default:
        setAncestries(coreAncestries)
    }
  }, [ruleset])

  return { ancestries }

}
