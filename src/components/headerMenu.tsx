import React from 'react';
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "@mui/material";

const HeaderMenu = () => {
  return (
    <div className="topHeader">
        <div className="header">
            <h1 className="mainHeader">EXPLORER</h1>
            <h3 className="bottomHeader">WEBFLOW BLOG TEMPLATE</h3>
        </div>
      <div className="headerMenu">
          <Button variant="text"><Link to="/create" style={{textDecoration: "none", color: "#000"}}>Create new post</Link></Button>
          <Button variant="text" style={{color: "#000"}}>About</Button>
      </div>
    </div>
  );
};

export default HeaderMenu;
