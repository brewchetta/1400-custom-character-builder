import { useRef } from 'react'

function FormCheckbox({name, labelText, onChange, value, checked, disabled, className}) {

  const input = useRef()

  function handleClickLabel() {
    input.current.click()
  }

  return (
    <div className={className}>

      <input
        ref={input}
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={value || checked}
        disabled={disabled}
        className={className || 'boxmark'}
      />

      {
        labelText
        ?
        <label htmlFor={name} onClick={handleClickLabel}>{labelText}</label>
        :
        null
      }

    </div>
  )

}

export default FormCheckbox
