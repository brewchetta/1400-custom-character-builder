import { useState, useEffect } from 'react'
import * as itemsCore from 'data/_itemsCore'
import { magicWeapons, magicArmor, magicSupplies, magicTools, magicCompanions, magicVehicles } from 'data/_itemsMagic'
import { core } from 'data/_rulesets'

export default function useItems(ruleset = core) {
  const [items, setItems] = useState({
    ...itemsCore,
    'magic supplies': magicSupplies,
    'magic weapons': magicWeapons,
    'magic armor': magicArmor,
    'magic tools': magicTools,
    'magic companions': magicCompanions,
    'magic vehicles': magicVehicles,
  })

  useEffect(() => {
    let currentItems = items

    // if (ruleset.includes(magicItems)) {
    //   currentItems = {...currentItems}
    // }

    setItems(currentItems)

  }, [ruleset]) // eslint-disable-line react-hooks/exhaustive-deps

  return items

}
