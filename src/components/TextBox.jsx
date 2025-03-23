import React from 'react';
import './TextBox.css'; // Add new CSS file for styling

function TextBox({ placeholder, type = "text", icon, onChange, value }) {
  return (
    <div className="input-container">
      {icon && <i className={`fas ${icon} input-icon`}></i>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="input-field"
      />
    </div>
  );
}

export default TextBox;
