/* eslint-disable no-unused-vars */
import React from 'react';

const VideoPlayer = () => {
    return (
        <div>
            <div>
                                    <iframe
                            width="100%"
                            className="aspect-video"
                            src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
                            title="Some video title"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
        </div>
        </div>
    );
};

export default VideoPlayer;