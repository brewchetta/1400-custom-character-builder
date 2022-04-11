function EquipmentStore({currentItems, currentGold, setCurrentItems, setCurrentGold}) {

  return (
    <div>
      <h2>Current Equipment</h2>

      <CurrentEquipment currentItems={currentItems} />

      <h2>Buy Equipment</h2>

    </div>
  )

}

export default EquipmentStore
