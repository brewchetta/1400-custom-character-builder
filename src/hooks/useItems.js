import { useState, useEffect } from 'react'
import { getItems } from 'fetch/fetch-item-templates'

export default function useItems() {
  const [items, setItems] = useState([])

  function buildCategories(categories, items) {
    return categories.map(category => {
      const filteredItems = items.filter(item => item.tags.includes(category))
      return { name: category, items: filteredItems }
    })
  }

  async function fetchItems(params) {
    const res = await getItems()
    if (res.ok) {
      const { categories, result } = await res.json()
      const builtCategories = buildCategories(categories, result)
      setItems( builtCategories )
    } else {
      console.warn("Something went wrong...")
    }
  }

  useEffect(() => {
    fetchItems()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return items

}
