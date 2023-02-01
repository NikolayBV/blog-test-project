import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const HeaderMenu = () => {
  return (
    <div className="topHeader">
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    My blog
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default HeaderMenu;
