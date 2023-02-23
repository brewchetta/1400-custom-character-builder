import CurrentGold from "./CurrentGold"
import CharacterEquipmentTile from "./CharacterEquipmentTile"
import HelpButton from "shared/HelpButton"
import { rulesGear } from "data/rules"
import { useCharacterContext } from 'context/CharacterContext'
import chestIcon from 'assets/images/chest-icon.png'

function CharacterEquipment({ setStoreOpen }) {

  const { currentCharacter: { items }, setCurrentCharacter } = useCharacterContext()

  const handleRemoveItem = item => {
    const updatedItems = items.filter( i => i !== item )
    setCurrentCharacter( prev => ({ ...prev, items: updatedItems }))
  }

  const renderedItems = items.map(item => (
    <CharacterEquipmentTile key={item.key} item={item} handleRemoveItem={handleRemoveItem}  />
  ) )

  return (

    <>

      <h3>Equipment
        <button onClick={ () => setStoreOpen(true) } className='icon-button'>
          <img src={chestIcon} alt={'Buy Equipment'} />
        </button>
        <HelpButton info={rulesGear.management} />
      </h3>

      <div className="grid-columns-medium standard-gap">

        <CurrentGold />

        {renderedItems}

      </div>

    </>
  )
}

export default CharacterEquipment
