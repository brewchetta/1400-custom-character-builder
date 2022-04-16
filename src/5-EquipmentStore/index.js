import EquipmentStoreCategory from "./EquipmentStoreCategory"
import ConditionalWrapper from 'shared/ConditionalWrapper'
import useItems from 'hooks/useItems'

function EquipmentStore() {

  const items = useItems()

  // console.log('ITEMS: ', items);

  const renderedCategories = Object.keys( items ).map( key => (
    <EquipmentStoreCategory key={ key } name={ key } items={ items[key] } />
  ) )

  return (
    <div>

      <h2>Buy Equipment</h2>

      <div className="grid-columns-large standard-gap">

        { renderedCategories }

      </div>


    </div>
  )

}

export default ConditionalWrapper(EquipmentStore)
