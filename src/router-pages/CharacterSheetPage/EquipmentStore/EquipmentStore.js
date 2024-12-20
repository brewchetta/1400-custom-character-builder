import EquipmentStoreCharacterItems from './EquipmentStoreCharacterItems'
import EquipmentStoreCategory from './EquipmentStoreCategory'
import EquipmentStoreSpells from './EquipmentStoreSpells'
import spells from 'data/_spellsCore'
import rituals from 'data/_ritualsCore'
import useItems from 'hooks/useItems'

function EquipmentStore() {

  const categories = useItems()

  const renderedCategories = categories.map( category => (
    <EquipmentStoreCategory key={ category.name } name={ category.name } items={ category.items } />
  ) )

  return (
    <div className="town-skyline-background">

      <h2 id="equipment-store-header" className="centered">Equipment Store</h2>

      <EquipmentStoreCharacterItems />

      <div>

        { renderedCategories }

        {/* <EquipmentStoreSpells category="spells" spells={spells} />
        <EquipmentStoreSpells category="rituals" spells={rituals} /> */}

      </div>


    </div>
  )

}

export default EquipmentStore
