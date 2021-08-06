import './PronounciationAudio.css';
import React from 'react';

interface PronounciationProps {
  source: string;
}

const Pronounciation_Audio: React.FC<PronounciationProps> = ({ source }) => {
  return (
    <div className='audioWrapper'>
      <audio controls>
        <source src={source} type='audio/mp3' />
      </audio>
    </div>
  );
};

export default Pronounciation_Audio;
