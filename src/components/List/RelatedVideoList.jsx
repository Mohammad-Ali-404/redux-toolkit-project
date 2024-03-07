/* eslint-disable no-unused-vars */
import React from 'react';
import RelatedSingleVideo from './RelatedSingleVideo';

const RelatedVideoList = () => {
    return (
        <div>
             <div
                        className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                        <RelatedSingleVideo/>
                    </div>
        </div>
    );
};

export default RelatedVideoList;