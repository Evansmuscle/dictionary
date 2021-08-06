import './Input.css';
import React from 'react';

interface InputProps {
  placeholder: string;
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, label, name }) => {
  return (
    <div className='inputWrapper'>
      <label htmlFor={name}>{label}</label>
      <input
        type='search'
        name={name}
        placeholder={placeholder}
        className='input'
      />
    </div>
  );
};

export default Input;
