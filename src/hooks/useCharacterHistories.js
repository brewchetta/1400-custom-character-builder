import { useState } from 'react'
import coreHistories from 'data/_historyCore'
import { core } from 'data/_rulesets'

export default function useCharacterHistories(ruleset = [core]) {
  const [histories] = useState(coreHistories)

  // useEffect(() => {
  //   let currentHistories = [...coreHistories]
  //
  //   if (ruleset.includes(otherRuleset)) {
  //     currentHistories = [...currentQuirks, ...otherHistories]
  //   }
  //
  //   setHistories(currentHistories)
  //
  // }, [ruleset])

  return { histories }

}
