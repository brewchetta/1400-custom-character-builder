function FormInput({name, inputType="text", labelText, onChange, value}) {

  return (
    <>

      {labelText ? <label htmlFor={name}>{labelText}</label> : null}

      <input
        type={inputType}
        name={name}
        onChange={onChange}
        value={value}
      />

    </>
  )

}

export default FormInput
