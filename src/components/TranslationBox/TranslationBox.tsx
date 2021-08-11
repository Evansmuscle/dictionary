import './TranslationBox.css';
import React from 'react';
import PronounciationCell from '../PronounciationCell';
import MeaningBox from '../MeaningCell/MeaningCell';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const TranslationBox = () => {
  const wordEntered = useAppSelector((state) => state.dictionary.searchWord);
  const language = useAppSelector((state) => state.dictionary.language);
  const searchedInfo = useAppSelector((state) => state.dictionary.wordInfo);

  const dispatch = useAppDispatch();

  return (
    <div className='translationWrapper'>
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
