import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import Header from '../Header/input';
import Options from '../Options';
import Toggle from '../Toggle';
import TranslationBox from '../TranslationBox';
import { useAppSelector } from '../../utils/hooks';

const App = () => {
  const darkMode = useAppSelector((state) => state.dictionary.darkMode);
  const [mode, setMode] = useState('');

  const onChange = (mode: boolean) => {
    mode ? setMode('dark') : setMode('light');
  };

  const changeMode = useCallback(() => onChange(darkMode), [darkMode]);

  useEffect(() => {
    console.log(darkMode);
    changeMode();
  }, [changeMode]);

  return (
    <div className='App' data-theme={mode}>
      <Toggle />
      <Header />
      <Options />
      <TranslationBox />
    </div>
  );
};

export default App;
