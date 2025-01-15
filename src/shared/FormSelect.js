import HelpButton from 'shared/HelpButton'

function FormInput({name, info, labelText, onChange, value, children, defaultText, reference=null}) {

  const defaultOption = defaultText && value === 'default' ? <option value={'default'}>{defaultText}</option> : null

  return (
    <>

      {labelText ? <label htmlFor={name}>{labelText} {info ? <HelpButton info={info} /> : null}</label> : null}

      <select
        ref={reference}
        name={name}
        onChange={onChange}
        value={value}
      >

        {defaultOption}

        {children}

      </select>

    </>
  )

}

export default FormInput
