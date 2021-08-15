import './Select.css';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { languageSelected } from '../../state/action-creators';
import { useAppSelector } from '../../utils/hooks';

interface SelectProps {
  placeholder: string;
  label: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({ placeholder, label, name }) => {
  const darkMode = useAppSelector((state) => state.dictionary.darkMode);
  const [language, setLanguage] = useState<string>('en');

  const dispatch = useDispatch();

  const dispatchLanguage = useCallback(
    () => dispatch(languageSelected(language)),
    [dispatch, language]
  );

  useEffect(() => {
    dispatchLanguage();
  }, [dispatchLanguage]);

  const languageList = [
    'English',
    'French',
    'Hindi',
    'Arabic',
    'Spanish',
    'Japanese',
    'Czech',
    'Dutch',
    'Slovak',
    'Russian',
    'German',
    'Italian',
    'Korean',
    'Brazilian Portuguese',
    'Turkish',
  ];

  const languageAbbrSet = [
    'en',
    'fr',
    'hi',
    'ar',
    'es',
    'ja',
    'cs',
    'nl',
    'sk',
    'ru',
    'de',
    'it',
    'ko',
    'pt-BR',
    'tr',
  ];

  const onChangeHandler: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.currentTarget.value);
  };

  return (
    <div className={`selectWrapper`}>
      <label className='labelSelect'>{label}</label>
      <select className='select' onChange={onChangeHandler}>
        {languageList.map((language: string, index: number) => {
          const languageValue = languageAbbrSet[index];
          return (
            <option key={language} value={languageValue}>
              {language}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
