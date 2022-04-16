import { useState, useEffect } from 'react'
import * as itemsCore from 'data/_itemsCore'
import { core } from 'data/_rulesets'

export default function useItems(ruleset = core) {
  const [items, setItems] = useState(itemsCore)

  useEffect(() => {
    let currentItems = {...items}

    // if (ruleset.includes(extendedDND)) {
    //   currentItems = {...currentItems}
    // }

    setItems(currentItems)

  }, [ruleset])

  return items

}
