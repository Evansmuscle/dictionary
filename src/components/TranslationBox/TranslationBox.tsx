import './TranslationBox.css';
import React from 'react';
import PronounciationCell from '../PronounciationCell';
import MeaningBox from '../MeaningCell/MeaningCell';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInfo } from '../../types';

const TranslationBox = () => {
  const wordInfo = useSelector((state: SearchInfo[]) => state);
  const dispatch = useDispatch();

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
