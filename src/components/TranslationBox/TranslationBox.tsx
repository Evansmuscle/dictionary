import './TranslationBox.css';
import React, { useState } from 'react';
import PronounciationCell from '../PronounciationCell';
import MeaningBox from '../MeaningCell/MeaningCell';
import { useAppSelector } from '../../utils/hooks';
import { useEffect } from 'react';
import { search } from '../../state/action-creators';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const TranslationBox = () => {
  const wordEntered = useAppSelector((state) => state.dictionary.searchWord);
  const language = useAppSelector((state) => state.dictionary.language);
  const searchedInfo = useAppSelector((state) => state.dictionary.wordInfo);

  // const [audioSource, setAudioSource] = useState('');
  // const [meaning, setMeaning] = useState('');
  // const [example, setExample] = useState('');
  // const [synonym, setSynonym] = useState('');

  const dispatch = useDispatch();

  const makeSearch = useCallback(
    () => dispatch(search(wordEntered, language)),
    [dispatch, wordEntered, language]
  );

  useEffect(() => {
    makeSearch();
    console.log(searchedInfo, wordEntered, language);
  }, [wordEntered, makeSearch, language]);

  return (
    <div className='translationWrapper'>
      <PronounciationCell source={'biseyler'} />
      <MeaningBox
        meaning='Test meaning'
        example='test example'
        synonyms='example synonym'
      />
    </div>
  );
};

export default TranslationBox;
