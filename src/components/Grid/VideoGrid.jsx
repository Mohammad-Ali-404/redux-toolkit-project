/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import SingleVideo from './SingleVideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosData } from '../../Redux/Videos/VideosSlice';
import Loading from '../ui/Loading';

const VideoGrid = () => {
    const dispatch = useDispatch()
    const {videos, isLoading, isError, error} = useSelector((state) => state.videos)
    useEffect(() =>{
        dispatch(fetchVideosData())
    },[dispatch])

    let content;
     if (isLoading) content = <Loading/>
     if (!isLoading && isError ) content = < div className="col-span-12">{error}</div>
     if (!isLoading && !isError && videos?.length === 0 ) {
        content = < div className="col-span-12">No videos Found</div>
     }
     if (!isLoading && !isError && videos?.length > 0 ) {
        content = videos.map(video => <SingleVideo key={video.id} video={video}/>)
     }

    return (
        <div>
            <section className="pt-12">
                <div
                    className="grid sm:grid-cols-3 grid-cols-1 sm:gap-10 sm:max-w-7xl w-auto mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {content}
                </div>
            </section>
        </div>
    );
};

export default VideoGrid;