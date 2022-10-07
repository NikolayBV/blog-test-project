import React from 'react';
import { Link } from 'react-router-dom';

const HeadingMenu = () => {
    return (
    <div className="header">
        <div className="heading">
            <h1 className="title">My blog</h1>
        </div>
        <div className='headingMemu'>
            <div className='menu'>
            <Link className='' to='/about'>About</Link>
            <Link className='' to='/posts'>Posts</Link>
            </div>
        </div>
    </div>
    );
};

export default HeadingMenu;