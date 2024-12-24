import { useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
import { randomArrayItem } from 'utilities'
import { rulesAncestries } from 'data/rules'
import { capitalize } from 'utilities'

function BioAncestryForm({ancestry, setAncestry, ancestries}) {

  const handleChange = e => setAncestry( ancestries.find(a => a.name === e.target.value) )

  const handleRandomAncestry = () => setAncestry( randomArrayItem( ancestries ) )

  const ancestryOptions = ancestries.map(a => {
    return (
      <option key={ a.name } value={ a.name }>
        { capitalize( a.name ) }
      </option>)
  })

  return (
    <>
      <FormSelect
        onChange={handleChange}
        value={ancestry?.name || 'default'}
        labelText={"Ancestry"}
        defaultText={'---Choose an ancestry---'}
        info={rulesAncestries.ancestry}
      >
        {ancestryOptions}
      </FormSelect>
      <input type="button" onClick={handleRandomAncestry} value="Random Ancestry"/>
    </>
  )

}

export default BioAncestryForm
