import "./TranslationBox.css";
import React, { useState } from "react";
import PronounciationCell from "../PronounciationCell";
import MeaningBox from "../MeaningCell/MeaningCell";
import { useAppSelector } from "../../utils/hooks";
import { useEffect } from "react";
import { search } from "../../state/action-creators";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Meaning } from "../../types";
import MeaningList from "../MeaningList";

const TranslationBox = () => {
  const wordEntered = useAppSelector((state) => state.dictionary.searchWord);
  const language = useAppSelector((state) => state.dictionary.language);
  const searchedInfo = useAppSelector((state) => state.dictionary.wordInfo);

  const [audioSource, setAudioSource] = useState("");
  const [meaningsInfo, setMeaningsInfo] = useState<Meaning[] | []>([]);

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
    meanings && setMeaningsInfo(meanings);
    phonetics && phonetics[0].audio && setAudioSource(phonetics[0].audio);
  }, [searchedInfo]);

  return (
    <div className="translationWrapper">
      <PronounciationCell source={audioSource} />
      <MeaningList meanings={meaningsInfo} />
      <div className="scrollbar" id="slim-bar"></div>
    </div>
  );
};

export default TranslationBox;
