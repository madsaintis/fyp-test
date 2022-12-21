import React from 'react'

const LoginInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="loginInput">
      <label>{label}</label>
      <input
        {...inputProps} onChange={onChange}
      />
    </div>
  )
}

export default LoginInput