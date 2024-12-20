import { useState } from 'react'
import EquipmentStoreItem from './EquipmentStoreItem'
import HelpButton from 'shared/HelpButton'
import { rulesGear } from 'data/rules'
import { capitalize } from 'utilities'
import CollapsibleWrapper from 'shared/CollapsibleWrapper'
import CollapsibleOpenButton from 'shared/CollapsibleOpenButton'

function EquipmentStoreCategory({ name, items }) {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(isOpen => !isOpen)

  const renderedItems = Object.values( items ).map( item => (
    <EquipmentStoreItem key={ item.key } item={ item } />
  ) )

  const renderedHelpButton = (
    name === "Weapon" ? <HelpButton info={rulesGear['weapon descriptions']} />
    : name === "Armour" ? <HelpButton info={rulesGear['armour descriptions']} />
    : name === "Tool" ? <HelpButton info={rulesGear['tool descriptions']} />
    : name === "Supply" ? <HelpButton info={rulesGear['supply descriptions']} />
    : name === "Vehicle" ? <HelpButton info={rulesGear['vehicle descriptions']} />
    : name === "Animal Companion" ? <HelpButton info={rulesGear['animal companion descriptions']} />
    : name === "Magic Companion" ? <HelpButton info={rulesGear['magic companion descriptions']} />
    : <HelpButton info={"Could not find information for that..."} />
  )

  return (
    <div>

      <h3>
        <CollapsibleOpenButton toggleOpen={toggleOpen} isOpen={isOpen} />
        {" "}<span onClick={toggleOpen} style={{cursor: "pointer"}}>{ capitalize( name ) }</span>
        {" "}{renderedHelpButton}
      </h3>

      <CollapsibleWrapper isOpen={isOpen}>
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

      </CollapsibleWrapper>

    </div>
  )
}

export default EquipmentStoreCategory
