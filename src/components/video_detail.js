import React from 'react';

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading...</div>
    }
    
    let videoTitle = video.snippet.title;
    let videoDescription = video.snippet.description;
    let videoId = video.id.videoId;
    let embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={embedUrl} frameBorder="0"></iframe>
            </div>
            <div className='details'>
                <div>{videoTitle}</div>
                <div>{videoDescription}</div>
            </div>
        </div>
    );
};

export default VideoDetail;