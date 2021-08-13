import './Options.css';
import React from 'react';
import Input from '../Input';
import Select from '../Select';

const Options = () => {
  return (
    <div className='Options'>
      <Input
        placeholder='Enter the word here'
        label='Search a language'
        name='word'
      />
      <Select
        placeholder='Select language from here'
        label='Select a language'
        name='language'
      />
    </div>
  );
};

export default Options;
