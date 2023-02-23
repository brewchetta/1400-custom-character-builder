import EquipmentStoreCharacterItems from './EquipmentStoreCharacterItems'
import EquipmentStoreCategory from './EquipmentStoreCategory'
import EquipmentStoreSpells from './EquipmentStoreSpells'
import spells from 'data/_spellsCore'
import rituals from 'data/_ritualsCore'
import useItems from 'hooks/useItems'

function EquipmentStore() {

  const items = useItems()

  const renderedCategories = Object.keys( items ).map( key => (
    <EquipmentStoreCategory key={ key } name={ key } items={ items[key] } />
  ) )

  return (
    <div>

      <h2 id="equipment-store-header" className="centered">Equipment Store</h2>

      <EquipmentStoreCharacterItems />

      <div>

        { renderedCategories }

        <EquipmentStoreSpells category="spells" spells={spells} />
        <EquipmentStoreSpells category="rituals" spells={rituals} />

      </div>


    </div>
  )

}

export default EquipmentStore
