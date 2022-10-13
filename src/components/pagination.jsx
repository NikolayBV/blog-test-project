import React, {useEffect, useState} from 'react';
import {setLengthCount} from "../utils/setLengthCount.js";

const Pagination = ({count, changePage}) => {
    let length = setLengthCount(count)
    const [postCount, setPostCount] = useState([])
    useEffect(() => {
        setPostCount(length)
    }, [count])

    return (
        <div className='pagination'>
            {postCount.map((c) => <button onClick={() => changePage(c)} className='btnPagination' key={c}>{c}</button>)}
        </div>
    );
};

export default Pagination;