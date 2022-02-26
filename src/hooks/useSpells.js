import { useState, useEffect } from 'react'
import { spellsCore } from '../data/_spellsCore'
import { core, draochtlan } from '../data/_rulesets'

export default function useCharacterClasses(ruleset = core) {
  // const [ruleset, setRuleset] = useState(ruleset)
  const [spells, setSpells] = useState(spellsCore)

  useEffect(() => {
    let currentSpells = {...spells}

    switch (ruleset) {
      case draochtlan:
        currentSpells = {...currentSpells}
      default:
        setSpells(currentSpells)
    }

  }, [ruleset])

  return { spells }

}
