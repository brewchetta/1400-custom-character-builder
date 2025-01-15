import { useRef } from 'react'
import HelpButton from 'shared/HelpButton'

function FormInput({name, info, inputType="text", labelText, onChange, value, labelClassName='', inputClassName='', className='', style={}, reference=null}) {

  const input = useRef()

  function handleClickLabel() {
    if (reference) {
      reference.current.focus()
    } else {
      input.current.focus()
    }
  }

  return (
    <>

      {
        labelText
        ?
        <label className={`${className} ${labelClassName}`} htmlFor={name} onClick={ handleClickLabel }>{labelText}{info ? <HelpButton info={info} /> : null}</label>
        :
        null
      }

      <input className={`${className} ${inputClassName}`} style={style}
        ref={reference || input}
        type={inputType}
        name={name}
        onChange={onChange}
        value={value}
      />

    </>
  )

}

export default FormInput
