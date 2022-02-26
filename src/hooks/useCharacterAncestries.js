import { useState, useEffect } from 'react'
import { coreAncestries } from '../data/_ancestriesCore'
import { draochtlanAncestries } from '../data/_ancestriesDraochtlan'
import { core, extendedDND } from '../data/_rulesets'

export default function useCharacterAncestries(ruleset = core) {
  const [ancestries, setAncestries] = useState(coreClasses)

  useEffect(() => {
    let currentClasses = {...coreClasses}

    if (ruleset.includes(extendedDND)) {
      currentClasses = {...currentClasses, ...dndExtendedClasses}
    }

    setClasses(currentClasses)

  }, [ruleset])

  return { classes }

}
