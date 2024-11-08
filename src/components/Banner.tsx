import React from 'react';

interface BannerProps {
    title: string;
    description: string;
    backgroundImage: string;
    videoUrl: string | null;
    textColor: string;
    numVideos: number;
}

const Banner: React.FC<BannerProps> = ({ title, description, backgroundImage, videoUrl, textColor, numVideos }) => {
    return (
        <div className="banner"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                color: textColor === 'dark' ? 'var(--dark-text-color)' : 'var(--light-text-color)',
            }}
        >
            <div className="banner-content">
                <div className="text-content">
                    <h2 className="header-text">BibleProject</h2>
                    <h1>{title}</h1>
                    <div className="separator-line"></div>
                    <p className="category-description">{description}</p>
                    <p className="episode-count"
                        style={{
                            color: textColor === 'dark' ? 'var(--dark-secondary-color)' : 'var(--light-secondary-color)',
                        }}
                    >{numVideos} Sessions</p>
                </div>
                <div className="video-content">
                    {videoUrl && (
                        <div className="video-wrapper">
                            <iframe
                                className="responsive-iframe"
                                width="640"
                                height="360"
                                src={videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;