function FormInput({name, labelText, onChange, value, children}) {

  return (
    <>

      {labelText ? <label htmlFor={name}>{labelText}</label> : null}

      <select
        name={name}
        onChange={onChange}
        value={value}
      >

        {children}

      </select>

    </>
  )

}

export default FormInput
