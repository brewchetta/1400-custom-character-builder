import { useState, useEffect } from 'react'
import { coreClasses } from '../data/_classesCore'
import { dndExtendedClasses } from '../data/_classesExtendedDND'
import { core, extendedDND } from '../data/_rulesets'

export default function useCharacterClasses(ruleset = core) {
  const [classes, setClasses] = useState(coreClasses)

  useEffect(() => {
    let currentClasses = {...coreClasses}

    switch (ruleset) {
      case extendedDND:
        currentClasses = {...currentClasses, ...dndExtendedClasses}
      default:
        setClasses(currentClasses)
    }

  }, [ruleset])

  return { classes }

}
