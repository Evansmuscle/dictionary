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

  const [audioSource, setAudioSource] = useState('');
  const [meaning, setMeaning] = useState('');
  const [example, setExample] = useState('');
  const [synonym, setSynonym] = useState<string[]>(['']);

  const dispatch = useDispatch();

  const makeSearch = useCallback(
    () => dispatch(search(wordEntered, language)),
    [dispatch, wordEntered, language]
  );

  useEffect(() => {
    makeSearch();
  }, [wordEntered, makeSearch, language]);

  useEffect(() => {
    const { meanings, phonetics } = searchedInfo[0];
    meanings &&
      meanings[0].definitions &&
      setMeaning(meanings[0].definitions[0].definition);
    meanings &&
      meanings[0].definitions &&
      setExample(meanings[0].definitions[0].example);
    meanings &&
      meanings[0].definitions &&
      meanings[0].definitions[0].synonyms &&
      setSynonym(meanings[0].definitions[0].synonyms);
    phonetics && phonetics[0].audio && setAudioSource(phonetics[0].audio);
  }, [searchedInfo]);

  return (
    <div className='translationWrapper'>
      <PronounciationCell source={audioSource} />
      <MeaningBox meaning={meaning} example={example} synonyms={synonym} />
    </div>
  );
};

export default TranslationBox;
