import './MeaningList.css';
import React from 'react';
import { Meaning } from '../../types';
import MeaningCell from '../MeaningCell/MeaningCell';
import { useEffect } from 'react';

interface MeaningListProps {
  meanings: Meaning[];
}

const MeaningList: React.FC<MeaningListProps> = ({ meanings }) => {
  useEffect(() => {
    console.log(meanings);
  }, [meanings]);

  return (
    <div>
      {meanings.map((meaning: Meaning, index: number) => {
        return (
          meaning.definitions &&
          meaning.definitions[0] && (
            <MeaningCell
              meaning={
                meaning.definitions[0].definition &&
                meaning.definitions[0].definition
              }
              example={
                meaning.definitions[0].example && meaning.definitions[0].example
              }
              synonyms={
                meaning.definitions[0].synonyms &&
                meaning.definitions[0].synonyms
              }
            />
          )
        );
      })}
    </div>
  );
};

export default MeaningList;
