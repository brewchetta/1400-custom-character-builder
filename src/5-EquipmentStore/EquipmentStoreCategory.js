import EquipmentStoreItem from "./EquipmentStoreItem"
import { capitalize } from 'utilities'

function EquipmentStoreCategory({ name, items }) {

  const renderedItems = Object.values( items ).map( item => (
    <EquipmentStoreItem key={ item.key } item={ item } />
  ) )

  return (
    <div>

      <h3>{ capitalize( name ) }</h3>

      <table>
        <tbody>

          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Durability</th>
            <th>Tags</th>
            <th>Buy With Money</th>
            <th>Add For Free</th>
          </tr>

          { renderedItems }

        </tbody>

      </table>

    </div>
  )
}

export default EquipmentStoreCategory
