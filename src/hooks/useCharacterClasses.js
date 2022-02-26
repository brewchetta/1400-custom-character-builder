import { useState, useEffect } from 'react'
import { coreClasses } from '../data/_classesCore'
import { draochtlanClasses } from '../data/_classesDraochtlan'
import { core, draochtlan } from '../data/_rulesets'

export default function useCharacterClasses(ruleset = core) {
  const [classes, setClasses] = useState(coreClasses)

  useEffect(() => {
    let currentClasses = {...coreClasses}

    switch (ruleset) {
      case draochtlan:
        currentClasses = {...currentClasses, ...draochtlanClasses}
      default:
        setClasses(currentClasses)
    }

  }, [ruleset])

  return { classes }

}
