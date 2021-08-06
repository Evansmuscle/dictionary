import './Options.css';
import React from 'react';
import Input from '../Input';
import Select from '../Select';

const Options = () => {
  return (
    <div className='Options'>
      <Input
        placeholder='Enter the word here'
        label='Search a Word'
        name='word'
      />
      <Select
        placeholder='Select language from here'
        label='Please select the language of the word'
        name='language'
      />
    </div>
  );
};

export default Options;
