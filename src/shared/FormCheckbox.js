import { useRef } from 'react'
import HelpButton from 'shared/HelpButton'

function FormCheckbox({name, info, labelText, onChange, value, checked, disabled, className}) {

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
        <label htmlFor={name} onClick={handleClickLabel}> {labelText} {info ? <HelpButton info={info} /> : null}</label>
        :
        null
      }

    </div>
  )

}

export default FormCheckbox
