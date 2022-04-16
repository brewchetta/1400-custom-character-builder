import { useState, useEffect } from 'react'
import coreBackgrounds from 'data/_backgroundsCore'
import draochtlanBackgrounds from 'data/_backgroundsDraochtlan'
import { core, draochtlan } from 'data/_rulesets'

export default function useCharacterBackgrounds(ruleset = core) {
  const [characterBackgrounds, setCharacterBackgrounds] = useState(coreBackgrounds)

  useEffect(() => {
    if (currentRulesets.includes(draochtlan)) {
      setAncestries(draochtlanBackgrounds)
    } else {
      setAncestries(coreBackgrounds)
    }
  }, [ruleset])

  return { characterBackgrounds }

}
