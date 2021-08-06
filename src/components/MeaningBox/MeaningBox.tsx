import './MeaningBox.css';
import React from 'react';

interface MeaningBoxProps {
  meaning: string;
  example: string;
  synonyms: string;
}

const MeaningBox: React.FC<MeaningBoxProps> = ({
  meaning,
  example,
  synonyms,
}) => {
  return (
    <div className='meaningWrapper'>
      <h4 className='meaning'>{meaning}</h4>
      <hr />
      <h4 className='meaning'>
        Example <span>{example}</span>
      </h4>
      <h4 className='meaning'>
        Synonyms <span>{synonyms}</span>
      </h4>
    </div>
  );
};

export default MeaningBox;
