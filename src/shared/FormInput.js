import { useRef } from 'react'
import HelpButton from 'shared/HelpButton'

function FormInput({name, info, inputType="text", labelText, onChange, value, labelClassName='', inputClassName='', className='', style={}}) {

  const input = useRef()

  function handleClickLabel() {
    input.current.focus()
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
