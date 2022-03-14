function FormInput({name, labelText, onChange, value, children, defaultText}) {

  const defaultOption = defaultText && value === 'default' ? <option value={'default'}>{defaultText}</option> : null

  return (
    <>

      {labelText ? <label htmlFor={name}>{labelText}</label> : null}

      <select
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
