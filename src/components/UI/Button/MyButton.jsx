import React from 'react';
//import classes from './src/styles/index.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='btnEdit' style={{marginTop: '20px'}}>
            {children}
        </button>
    );
};

export default MyButton;