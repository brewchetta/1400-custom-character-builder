import { useState, useEffect } from 'react'
import coreClasses from 'data/_classesCore'
import dndExtendedClasses from 'data/_classesExtendedDND'
import { core, extendedDNDClasses } from 'data/_rulesets'

export default function useCharacterClasses(ruleset = [core]) {
  const [classes, setClasses] = useState(coreClasses)

  useEffect(() => {
    let currentClasses = {...coreClasses}

    if (ruleset.includes(extendedDNDClasses)) {
      currentClasses = {...currentClasses, ...dndExtendedClasses}
    }

    setClasses(currentClasses)

  }, [ruleset])

  return { classes }

}
