import './MeaningCell.css';
import React from 'react';

interface MeaningProps {
  meaning: string;
  example: string;
  synonyms: string[];
}

const MeaningCell: React.FC<MeaningProps> = ({
  meaning,
  example,
  synonyms,
}) => {
  return (
    <div className='meaningWrapper'>
      {meaning && (
        <h4 className='meaning'>
          Meaning: {meaning[0].toUpperCase() + meaning.slice(1)}
        </h4>
      )}
      {example && (
        <React.Fragment>
          <br />
          <hr />
          <br />
          <h4 className='meaning'>
            Example: <span>{example[0].toUpperCase() + example.slice(1)}</span>
          </h4>
        </React.Fragment>
      )}
      {synonyms && synonyms[0] && (
        <React.Fragment>
          <br />
          <hr />
          <br />
          <h4 className='meaning'>
            Synonyms:{' '}
            {synonyms.map((synonym) => {
              return <span>{synonym}, </span>;
            })}
          </h4>
        </React.Fragment>
      )}
    </div>
  );
};

export default MeaningCell;
