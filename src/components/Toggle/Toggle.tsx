import './Toggle.css';
import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setDarkMode } from '../../state/action-creators';

const Toggle = () => {
  const dark = useAppSelector((state) => state.dictionary.darkMode);
  const dispatch = useAppDispatch();

  const onSwitch: ChangeEventHandler<HTMLInputElement> = (
    _: ChangeEvent<HTMLInputElement>
  ) => {
    dark ? dispatch(setDarkMode(false)) : dispatch(setDarkMode(true));
  };

  return (
    <div className='toggleWrapper'>
      <label className='switch'>
        <input onChange={onSwitch} type='checkbox' />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default Toggle;
