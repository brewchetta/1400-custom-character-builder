import { useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
function BioAncestryForm({ancestry, setAncestry, ancestries}) {

  useEffect(() => {
    setAncestry('default')
  }, [ancestries])

  function handleChange(e) {
    setAncestry(e.target.value)
  }

  const ancestryOptions = Object.keys(ancestries).map(aKey => {
    return (
      <option key={`ancestry-${aKey}`} value={aKey}>
        {ancestries[aKey].name}
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
    </>
  )

}

export default BioAncestryForm
