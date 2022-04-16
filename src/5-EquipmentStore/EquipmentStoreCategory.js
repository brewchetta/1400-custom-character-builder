import EquipmentStoreItem from "./EquipmentStoreItem"
import { capitalize } from 'utilities'

function EquipmentStoreCategory({ name, items }) {

  const renderedItems = Object.values( items ).map( item => (
    <EquipmentStoreItem key={ item.key } item={ item } />
  ) )

  return (
    <div>

      <h3 className="centered">{ capitalize( name ) }</h3>

      <div className="flex-wrap-container standard-gap centered">

        { renderedItems }

      </div>

    </div>
  )
}

export default EquipmentStoreCategory
