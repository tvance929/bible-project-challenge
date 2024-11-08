import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import VideoTile from './VideoTile';

interface Video {
  title: string;
  description: string;
  thumbnail: string;
  durationSeconds: number;
  videoUrl: string;
  isNew: boolean;
}

interface VideoCategory {
  title: string;
  description: string;
  backgroundImage: string;
  textColor: string;
}

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoCategory, setVideoCategory] = useState<VideoCategory | null>(null);

  useEffect(() => {
    fetch('/api/data.json')
      .then(res => res.json())
      .then(json => {
        const currentDate = new Date();
        const newVideos = json.data.videoCategory.videos.map((video: any) => {
          const publishDate = new Date(video.publishDate);
          const isNew = (currentDate.getTime() - publishDate.getTime()) / (1000 * 60 * 60 * 24) <= 30;
          return {
            title: video.title,
            description: video.description,
            thumbnail: video.images.medium,
            durationSeconds: video.durationSeconds,
            videoUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
            isNew: isNew,
          };
        });
        setVideos(newVideos);
        setVideoCategory({
          title: json.data.videoCategory.title,
          description: json.data.videoCategory.description,
          backgroundImage: json.data.videoCategory.images.large,
          textColor: json.data.videoCategory.textColor
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="main-content">
      <Banner
        title={videoCategory ? videoCategory.title : "Loading..."}
        description={videoCategory ? videoCategory.description : ""}
        backgroundImage={videoCategory ? videoCategory.backgroundImage : ""}
        videoUrl={selectedVideo ? selectedVideo.videoUrl : null}
        textColor={videoCategory ? videoCategory.textColor : "light"}
      />
      <div className="separator-bar"></div>
      <div className="video-tiles-container">
        <div className="video-tiles">
          {videos.map((video, index) => (
            <VideoTile
              key={index}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              isNew={video.isNew}
              durationSeconds={video.durationSeconds}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

/* export const App = () => {
  return <h1>BibleProject</h1>;
}; */
