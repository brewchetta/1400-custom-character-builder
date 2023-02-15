import EquipmentStoreCategory from './EquipmentStoreCategory'
import EquipmentStoreSpells from './EquipmentStoreSpells'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import spells from 'data/_spellsCore'
import useItems from 'hooks/useItems'

function EquipmentStore() {

  const items = useItems()

  // console.log('ITEMS: ', items);

  const renderedCategories = Object.keys( items ).map( key => (
    <EquipmentStoreCategory key={ key } name={ key } items={ items[key] } />
  ) )

  return (
    <div>

      <h2 id="equipment-store-header" className="centered">Equipment Store</h2>

      <div>

        { renderedCategories }

        <EquipmentStoreSpells name="spells" spells={spells} />

      </div>


    </div>
  )

}

export default ConditionalWrapper(EquipmentStore)
