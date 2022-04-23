import { useEffect } from 'react'

import FormSelect from 'shared/FormSelect'

import { randomArrayItem } from 'utilities'

function BioAncestryForm({ancestry, setAncestry, ancestries}) {

  useEffect(() => {
    setAncestry('default')
  }, [ancestries])

  const handleChange = e => setAncestry( e.target.value )

  const handleRandomAncestry = () => setAncestry( randomArrayItem( Object.keys( ancestries ) ) )

  const ancestryOptions = Object.keys( ancestries ).map(aKey => {
    return (
      <option key={`ancestry-${ aKey }`} value={ aKey }>
        { ancestries[aKey].name }
      </option>)
  })

  return (
    <>
      <FormSelect
        onChange={handleChange}
        value={ancestry}
        labelText={"Ancestry: "}
        defaultText={'---Choose an ancestry---'}
      >
        {ancestryOptions}
      </FormSelect>
      <input type="button" onClick={handleRandomAncestry} value="Random Ancestry"/>
    </>
  )

}

export default BioAncestryForm
