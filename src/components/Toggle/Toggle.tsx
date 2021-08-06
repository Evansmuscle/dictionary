import './Toggle.css';
import React from 'react';

const Toggle = () => {
  return (
    <div className='toggleWrapper'>
      <label className='switch'>
        <input type='checkbox' />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default Toggle;
