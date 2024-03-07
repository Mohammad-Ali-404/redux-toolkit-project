/* eslint-disable no-unused-vars */
import React from 'react';
import SingleVideo from './SingleVideo';

const VideoGrid = () => {
    return (
        <div>
            <section className="pt-12">
                <div
                    className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 sm:max-w-7xl w-auto mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    <SingleVideo/>

                    {/* <div className="col-span-12">some error happened</div>  */}
                </div>
            </section>
        </div>
    );
};

export default VideoGrid;