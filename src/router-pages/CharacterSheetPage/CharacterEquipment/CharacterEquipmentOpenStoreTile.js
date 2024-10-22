import chest from 'assets/images/chest-icon.png'

function CharacterEquipmentOpenStoreTile({ toggleStoreOpen }) {

  return (
    <div className="background-white scratchwallpaper-background padding-small border-dark-grey flex-column space-between centered"
    style={{cursor: 'pointer'}}
    onClick={ toggleStoreOpen }>
      <p>Open Equipment Store</p>
      <p>
        <img className="invert-on-darkmode" src={chest} alt="button to open store" style={{width: '1.7em'}}/>
      </p>
    </div>
  )
}

export default CharacterEquipmentOpenStoreTile
