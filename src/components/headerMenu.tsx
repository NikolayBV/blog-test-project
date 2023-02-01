import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from "./sideMenu";

const HeaderMenu = () => {
    const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="topHeader">
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton onClick={() => setMenuActive(!menuActive)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    My blog
                </Typography>
            </Toolbar>
        </AppBar>
        <SideMenu menuActive={menuActive} setMenuActive={setMenuActive}/>
    </div>
  );
};

export default HeaderMenu;
