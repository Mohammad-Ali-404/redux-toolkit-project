/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const LikeUnlike = () => {
    return (
        <div>
            <div className="flex gap-10 w-48">
                                    <div className="flex gap-1">
                                        <div className="shrink-0">
                                            <AiOutlineLike/>
                                        </div>
                                        <div
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            100K
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="shrink-0">
                                            <AiOutlineDislike/>
                                        </div>
                                        <div
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            100K
                                        </div>
                                    </div>
                                </div>
        </div>
    );
};

export default LikeUnlike;