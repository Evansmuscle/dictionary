import './App.css';
import React from 'react';
import Header from '../Header/input';
import Options from '../Options';
import Toggle from '../Toggle';
import TranslationBox from '../TranslationBox';

const App = () => {
  return (
    <div className='App'>
      <Toggle />
      <Header />
      <Options />
      <TranslationBox />
    </div>
  );
};

export default App;
