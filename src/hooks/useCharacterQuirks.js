import { useState } from 'react'
import coreQuirks from 'data/_quirksCore'
import { core } from 'data/_rulesets'

export default function useCharacterQuirks(ruleset = [core]) {
  const [quirks] = useState(coreQuirks)

  // useEffect(() => {
  //   let currentQuirks = [...coreQuirks]
  //
  //   if (ruleset.includes(otherRuleset)) {
  //     currentQuirks = [...currentQuirks, ...otherQuirks]
  //   }
  //
  //   setQuirks(currentQuirks)
  //
  // }, [ruleset])

  return { quirks }

}
