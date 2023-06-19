import React from 'react';


function InputLabel({ inputRow, name, type, value, onChange }) {
  return (
    <div className="label">
      <label htmlFor={name}>{inputRow}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} />
    </div>
  );}
  
  export default InputLabel;