import React, {useEffect, useState} from 'react';
import {setLengthCount} from "../utils/setLengthCount";
import {Pagination, PaginationItem} from "@mui/material";

interface IPagination {
    count: number,
    changePage: Function
}

const MyPagination = ({count, changePage}: IPagination) => {
    let length = setLengthCount(count)
    const [postCount, setPostCount] = useState<Array<number>>([])
    useEffect(() => {
        setPostCount(length)
    }, [count])

    return (
        <div className='pagination'>
            <Pagination
                count={postCount.length}
                onChange={(e, page) => changePage(page)}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                    />
                )}
            />
        </div>
    );
};

export default MyPagination;
