import EquipmentStoreItem from "./EquipmentStoreItem"
import HelpButton from 'shared/HelpButton'
import { rulesGear } from 'data/rules'
import { capitalize } from 'utilities'

function EquipmentStoreCategory({ name, items }) {

  const renderedItems = Object.values( items ).map( item => (
    <EquipmentStoreItem key={ item.key } item={ item } />
  ) )

  const renderedHelpButton = (
    name === "weapons" ? <HelpButton info={rulesGear['weapon descriptions']} />
    : name === "armours" ? <HelpButton info={rulesGear['armour descriptions']} />
    : name === "tools" ? <HelpButton info={rulesGear['tool descriptions']} />
    : name === "supplies" ? <HelpButton info={rulesGear['supply descriptions']} />
    : name === "vehicles" ? <HelpButton info={rulesGear['vehicle descriptions']} />
    : name === "animals" ? <HelpButton info={rulesGear['animal companion descriptions']} />
    : name === "magic companions" ? <HelpButton info={rulesGear['magic companion descriptions']} />
    : name === "magic vehicles" ? <HelpButton info={rulesGear['magic vehicle descriptions']} />
    : name === "magic tools" ? <HelpButton info={rulesGear['magic tool descriptions']} />
    : name === "magic supplies" ? <HelpButton info={rulesGear['magic supply descriptions']} />
    : name === "magic weapons" ? <HelpButton info={rulesGear['magic weapon descriptions']} />
    : name === "magic armor" ? <HelpButton info={rulesGear['magic armor descriptions']} />
    : <HelpButton info={"Could not find information for that..."} />
  )

  return (
    <div>

      <h3>{ capitalize( name ) } {renderedHelpButton}</h3>

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
