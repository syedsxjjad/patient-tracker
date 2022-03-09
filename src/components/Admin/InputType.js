import React from 'react'

const InputType=({ type, placeholder, value, onChange, required })=>{
  return(
<>
      <input
      className="input"
      required={required}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
          onChange(e.target.value);
        }}
        />
        </>
        )
}

export default InputType
