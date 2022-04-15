// import { useState, useEffect } from 'react'

function CurrentEquipmentItem({item}) {
  return (
    <li>{item.name}{item.special ? ` [${item.special}]` : null} <button>Remove</button></li>
  )
}

export default CurrentEquipmentItem
