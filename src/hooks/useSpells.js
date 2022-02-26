import { useState, useEffect } from 'react'
import { spellsCore } from '../data/_spellsCore'
import { core, extendedDND } from '../data/_rulesets'

export default function useCharacterClasses(ruleset = core) {
  // const [ruleset, setRuleset] = useState(ruleset)
  const [spells, setSpells] = useState(spellsCore)

  useEffect(() => {
    let currentSpells = {...spells}

    switch (ruleset) {
      case extendedDND:
        currentSpells = {...currentSpells}
      default:
        setSpells(currentSpells)
    }

  }, [ruleset])

  return { spells }

}
