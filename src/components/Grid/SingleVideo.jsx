/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
const SingleVideo = ({video}) => {
    const {id, title, description, url, duration, views, likes, dislikes, tags, image} = video;
    return (
        <div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]" >
                        <div className="w-full flex flex-col">
                            <div className="relative">
                                <Link  to={`/videosDetails/${id}`}>
                                    <img
                                        src={image}
                                        className="w-full h-60"
                                        alt="Some video title"
                                    />
                                </Link>

                                <p
                                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                                >
                                    {duration}
                                </p>
                            </div>

                            <div className="flex flex-row mt-2 gap-2">
                                <Link to='videosDetails' href="#" className="shrink-0">
                                    <img
                                        src="logo"
                                        className="rounded-full h-6 w-6"
                                        alt="Learn with Sumit"
                                    />
                                </Link>

                                <div className="flex flex-col">
                                    <Link to='videosDetails' href="video.html">
                                        <p
                                            className="text-slate-900 text-sm font-semibold"
                                        >
                                            {title}
                                        </p>
                                    </Link>
                                    <Link to='videosDetails'
                                        className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                        href="#"
                                    >
                                        Learn with M-tech
                                    </Link>
                                    <p className="text-gray-400 text-xs mt-1">
                                        {views} views . May 3, 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default SingleVideo;