import './TranslationBox.css';
import React from 'react';
import PronounciationCell from '../PronounciationCell';
import MeaningBox from '../MeaningCell/MeaningCell';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useEffect } from 'react';
import { search } from '../../state/action-creators';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const TranslationBox = () => {
  const wordEntered = useAppSelector((state) => state.dictionary.searchWord);
  const language = useAppSelector((state) => state.dictionary.language);
  const searchedInfo = useAppSelector((state) => state.dictionary.wordInfo);

  const dispatch = useDispatch();

  const makeSearch = useCallback(
    async () => dispatch(search(wordEntered, 'en')),
    [dispatch, wordEntered]
  );

  useEffect(() => {
    makeSearch();
  }, [wordEntered, makeSearch]);

  return (
    <div className='translationWrapper'>
      <h1>{}</h1>
      <PronounciationCell source='biseyler' />
      <MeaningBox
        meaning='Test meaning'
        example='test example'
        synonyms='example synonym'
      />
    </div>
  );
};

export default TranslationBox;
