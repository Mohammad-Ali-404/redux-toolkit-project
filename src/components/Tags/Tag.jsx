/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Tag = ({tag}) => {
    const {name} = tag;
    return (
        <div className='flex items-center gap-4'>
            <h1 className="bg-blue-100 text-sm text-blue-600 px-3 py-1 rounded-full cursor-pointer">{name}</h1>
        </div>
    );
};

export default Tag;