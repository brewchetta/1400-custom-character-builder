import { useRef } from 'react'

function FormInput({name, inputType="text", labelText, onChange, value}) {

  const input = useRef()

  function handleClickLabel() {
    input.current.focus()
  }

  return (
    <>

      {
        labelText
        ?
        <label htmlFor={name} onClick={handleClickLabel}>{labelText}</label> 
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
