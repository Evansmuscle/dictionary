import './PronounciationCell.css';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

interface PronounciationProps {
  source: string;
}

const PronounciationCell: React.FC<PronounciationProps> = ({ source }) => {
  return (
    <div className='audioWrapper'>
      <ReactAudioPlayer src={source} autoPlay controls />
    </div>
  );
};

export default PronounciationCell;
