function FormCheckbox({name, labelText, onChange, value, checked, disabled, className}) {

  return (
    <div className={className}>

      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={value || checked}
        disabled={disabled}
      />

      {labelText ? <label htmlFor={name}>{labelText}</label> : null}

    </div>
  )

}

export default FormCheckbox
