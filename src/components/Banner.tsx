import React from 'react';

interface BannerProps {
    title: string;
    description: string;
    backgroundImage: string;
    videoUrl: string | null;
    textColor: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, backgroundImage, videoUrl, textColor }) => {
    return (
        <div className="banner"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                color: textColor === 'dark' ? '#1e1e1e' : '#ffffff',
            }}
        >
            <h2 className="header-text"
                style={{
                    color: textColor === 'dark' ? '#1e1e1e' : '#ffffff',
                }}
            >BibleProject</h2>
            <div className="banner-content">
                <div className="text-content">
                    <h1>{title}</h1>
                    <div className="separator-line"
                        style={{
                            backgroundColor: textColor === 'dark' ? '#1e1e1e' : '#ffffff',
                        }}></div>
                    <p>{description}</p>
                </div>
                {videoUrl && (
                    <div className="video-wrapper">
                        <iframe
                            width="560"
                            height="315"
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
    );
};

export default Banner;
