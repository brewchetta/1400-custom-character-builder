import EquipmentStoreCharacterItems from './EquipmentStoreCharacterItems'
import EquipmentStoreCategory from './EquipmentStoreCategory'
import EquipmentStoreSpells from './EquipmentStoreSpells'
import SearchEquipment from './SearchEquipment'
import useItems from 'hooks/useItems'

import { getAllSpells } from 'async/fetch-spells'
import { getAllRituals } from 'async/fetch-rituals'
import { useState, useEffect } from 'react'

function EquipmentStore() {

  const [spells, setSpells] = useState([])
  const [rituals, setRituals] = useState([])

  const categories = useItems()

  
  useEffect(() => {
    async function fetchSpells() {
      const res = await getAllSpells()
      if (res.ok) {
        const data = await res.json()
        setSpells(data.result)
      } else {
        console.warn("Something went wrong...")
      }
    }

    async function fetchRituals() {
      const res = await getAllRituals()
      if (res.ok) {
        const data = await res.json()
        setRituals(data.result)
      } else {
        console.warn("Something went wrong...")
      }
    }

    fetchSpells()
    fetchRituals()
  }, [])

  const renderedCategories = categories.map( category => (
    category.name !== 'spell' && category.name !== 'ritual' &&
    <EquipmentStoreCategory key={ category.name } name={ category.name } items={ category.items } />
  ) )

  return (
    <div className="town-skyline-background">

      <h2 id="equipment-store-header" className="centered">Equipment Store</h2>

      <EquipmentStoreCharacterItems />

      <SearchEquipment />

      <div>

        { renderedCategories }

        <EquipmentStoreSpells category="spells" spells={spells} />
        <EquipmentStoreSpells category="rituals" spells={rituals} />

      </div>


    </div>
  )

}

export default EquipmentStore
