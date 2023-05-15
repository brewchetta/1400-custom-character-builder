import { useRef } from 'react'
import HelpButton from 'shared/HelpButton'

function FormInput({name, info, inputType="text", labelText, onChange, value}) {

  const input = useRef()

  function handleClickLabel() {
    input.current.focus()
  }

  return (
    <>

      {
        labelText
        ?
        <label htmlFor={name} onClick={ handleClickLabel }>{labelText}{info ? <HelpButton info={info} /> : null}</label>
        :
        null
      }

      <input
        ref={input}
        type={inputType}
        name={name}
        onChange={onChange}
        value={value}
      />

    </>
  )

}

export default FormInput
