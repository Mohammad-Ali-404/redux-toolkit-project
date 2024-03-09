/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Tag from './Tag';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTagsData } from '../../Redux/Tags/TagsSilce';

const Tags = () => {
    const dispatch = useDispatch()
    const {tags, isLoading} = useSelector(state => state.tags)
    useEffect(() =>{
        dispatch(fetchTagsData())
    },[dispatch])
    return tags?.length > 0 ? (
        <div>
            <section>
                <div
                    className="sm:max-w-7xl mx-auto sm:px-5 px-4 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
                >
                    {tags.map(tag => <Tag key={tag.id} tag={tag}/>)}
                </div>
            </section>
        </div>
    ) : null;
};

export default Tags;