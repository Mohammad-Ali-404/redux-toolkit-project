/* eslint-disable no-unused-vars */
import React from 'react';
import Tag from './Tag';

const Tags = () => {
    return (
        <div>
            <section>
                <div
                    className="sm:max-w-7xl  mx-auto sm:px-5 px-4 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
                >
                    <Tag/>
                </div>
            </section>
        </div>
    );
};

export default Tags;