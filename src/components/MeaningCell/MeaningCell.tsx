import './MeaningCell.css';
import React from 'react';

interface MeaningProps {
  meaning: string;
  example: string;
  synonyms: string;
}

const MeaningCell: React.FC<MeaningProps> = ({
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

export default MeaningCell;
