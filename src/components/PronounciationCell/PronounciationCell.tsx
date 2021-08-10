import './PronounciationCell.css';
import React from 'react';

interface PronounciationProps {
  source: string;
}

const PronounciationCell: React.FC<PronounciationProps> = ({ source }) => {
  return (
    <div className='audioWrapper'>
      <audio controls>
        <source src={source} type='audio/mp3' />
      </audio>
    </div>
  );
};

export default PronounciationCell;
