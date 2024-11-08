import React, { useState, useEffect } from 'react';

interface VideoTileProps {
  title: string;
  description: string;
  thumbnail: string;
  onClick: () => void;
  isNew?: boolean;
  durationSeconds: number;
}

const VideoTile: React.FC<VideoTileProps> = ({ title, description, thumbnail, onClick, isNew, durationSeconds }) => {  
  const [error, setError] = useState<string | null>(null);
  const [shouldFail, setShouldFail] = useState(false);
  const durationMinutes = Math.round(durationSeconds / 60);
  const shortDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('debug')) {
      setShouldFail(true);
    }
  }, []);

  const handleClick = () => {
    try {
      setError(null);
      
      if (shouldFail && Math.random() < 0.5) { //fail half the time
        throw new Error('Random failure due to debug mode');
      }
      window.scrollTo({ top:0, behavior: 'smooth' });
      onClick();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="video-tile" onClick={handleClick}>
      {isNew && <div className="new-badge">NEW</div>}
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{shortDescription}</p>
      <span className="timestamp">{durationMinutes} minutes</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="icon-play"
      >
         <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="0.5"/>
         <polygon points="10,8 16,12 10,16" fill="#ffffff"/>
      </svg>
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
};

export default VideoTile;
