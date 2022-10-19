import React, {useEffect, useState} from 'react';
import {setLengthCount} from "../utils/setLengthCount";

interface IPagination {
    count: number,
    changePage: Function
}

const Pagination = ({count, changePage}: IPagination) => {
    let length = setLengthCount(count)
    const [postCount, setPostCount] = useState<Array<number>>([])
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