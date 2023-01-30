import React from 'react';
import {Link} from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className="topHeader">
        <div className="header">
            <h1 className="mainHeader">EXPLORER</h1>
            <h3 className="bottomHeader">WEBFLOW BLOG TEMPLATE</h3>
        </div>
      <div className="headerMenu">
        <button><Link to="/create">Create new post</Link></button>
        <button><a>About</a></button>
      </div>
    </div>
  );
};

export default HeaderMenu;
