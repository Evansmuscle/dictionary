import './TranslationBox.css';
import React from 'react';
import PronounciationAudio from '../PronounciationAudio';
import MeaningBox from '../MeaningBox/MeaningBox';

const TranslationBox = () => {
  return (
    <div className='translationWrapper'>
      <PronounciationAudio source='biseyler' />
      <MeaningBox
        meaning='Test meaning'
        example='test example'
        synonyms='example synonym'
      />
    </div>
  );
};

export default TranslationBox;
