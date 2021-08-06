import './Select.css';
import React from 'react';

interface SelectProps {
  placeholder: string;
  label: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({ placeholder, label, name }) => {
  return (
    <div className='selectWrapper'>
      <select className='select'>
        <option>Test option 1</option>
        <option>Test option 2</option>
      </select>
    </div>
  );
};

export default Select;
