import React from 'react';
import {Link} from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div>
      <div className="headerMenu">
        <button><Link to="/create">Create new post</Link></button>
        <button><a>About</a></button>
      </div>
    </div>
  );
};

export default HeaderMenu;