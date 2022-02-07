import React from "react";
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    const {image, title} = { 
        image: video.snippet.thumbnails.medium.url,
        title: video.snippet.title
    };

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={title} className="ui image" src={image} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
}

export default VideoItem;