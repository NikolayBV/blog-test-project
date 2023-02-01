import React, {SetStateAction} from 'react';
import {Link} from "react-router-dom";

interface MenuProp {
    menuActive: boolean,
    setMenuActive: React.Dispatch<SetStateAction<boolean>>
}

const SideMenu = ({menuActive, setMenuActive}: MenuProp) => {
    return (
        <div className={menuActive ? "sideMenu" : "sideMenuHidden"}>
            <ul>
                <li>About</li>
                <li><Link to='/create'>Create new post</Link></li>
            </ul>
        </div>
    );
};

export default SideMenu;
