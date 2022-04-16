import { useState, useEffect } from 'react'
import spellsCore from 'data/_spellsCore'
import { core } from 'data/_rulesets'

export default function useSpells(ruleset = core) {
  // const [ruleset, setRuleset] = useState(ruleset)
  const [spells, setSpells] = useState(spellsCore)

  useEffect(() => {
    let currentSpells = {...spells}

    // if (ruleset.includes(extendedDND)) {
    //   currentSpells = {...currentSpells}
    // }

    setSpells(currentSpells)

  }, [ruleset])

  return { spells }

}
