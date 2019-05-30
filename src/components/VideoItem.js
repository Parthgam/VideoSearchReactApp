import React from 'react';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header ' style={{width:'200px', fontSize:'15px'}}>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;