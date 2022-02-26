import { useEffect } from 'react'
import FormSelect from '../shared-components/FormSelect'
function BioAncestryForm({ancestry, setAncestry, ancestries}) {

  useEffect(() => {
    setAncestry({})
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

  // console.log('ANCESTRIES :',ancestries);

  return (
    <>
      <FormSelect
        onChange={handleChange}
        value={ancestry}
        labelText={"Ancestry: "}
      >
        <option>--Choose an ancestry--</option>
        {ancestryOptions}
      </FormSelect>
    </>
  )

}

export default BioAncestryForm
