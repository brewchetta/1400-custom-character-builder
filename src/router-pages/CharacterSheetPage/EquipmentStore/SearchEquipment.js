import { useState } from "react"

import FormInput from "shared/FormInput"
import EquipmentStoreItem from "./EquipmentStoreItem"

import { getItemsByNameSearch } from "async/fetch-item-templates"

function SearchEquipment() {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchedItems, setSearchedItems] = useState( null )

    async function handleSearch(e) {
        e.preventDefault()
        if (searchTerm?.length) {
            const res = await getItemsByNameSearch(searchTerm)
            if (res.ok) {
                const data = await res.json()
                setSearchedItems(data.result)
            }
        } else {
            setSearchedItems(null)
        }
    }

    function handleClear(e) {
        // e.preventDefault()
        e.stopPropagation()
        setSearchTerm('')
        setSearchedItems(null)
    }

    const renderedItems = searchedItems?.map( item => (
        <EquipmentStoreItem key={ item.key } item={ item } />
    ) ) || null

    const renderedSearchResults = searchedItems?.length
    ? // WITH SEARCH RESULTS:
    <div>
        <p>Found {searchedItems.length} items</p>
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
    : searchedItems
    ? // EMPTY SEARCH RESULTS:
    <div>
        <p>No items found with that name</p>
    </div>
    : // NO SEARCH ATTEMPTED:
    null

    return (
    <div>

        <form onSubmit={handleSearch} className="margin-medium">
            <FormInput
                name="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />

            <input className="text-black background-white border-light-grey" type="submit" value="Search" />
            {
                searchedItems?.length
                ?
                <input className="text-black background-white border-light-grey" type="submit" value="Clear" onClick={handleClear} /> 
                :
                null
            }
        </form>

        { renderedSearchResults }


    </div>
  )
}

export default SearchEquipment