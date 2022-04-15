import { useState, useEffect } from 'react'

function EquipmentStoreItem({item, addItem, buyItem, currentGold}) {
  return (
    <>
      <button>Buy for X gold</button>
      <button>Add</button>
      <p>Equipment Store Item goes here</p>
    </>
  )
}

export default EquipmentStoreItem
