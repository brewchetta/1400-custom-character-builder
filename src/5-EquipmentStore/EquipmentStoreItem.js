import { useState, useEffect } from 'react'

function EquipmentStoreItem({ item }) {
  return (
    <div className="border-dark-yellow">
      <p>{ item.name }</p>
      <button>Buy for { item.cost || 1 } gold</button>
      <button>Add For Free</button>
    </div>
  )
}

export default EquipmentStoreItem
