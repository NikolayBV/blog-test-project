import React, {SetStateAction} from 'react';
import {Link} from "react-router-dom";

interface MenuProp {
    menuActive: boolean,
    setMenuActive: React.Dispatch<SetStateAction<boolean>>
}

const SideMenu = ({menuActive, setMenuActive}: MenuProp) => {
    return (
        <div className={menuActive ? "sideMenu" : "sideMenuHidden"}>
            <ul className="menuUl">
                <li className="menuLi">About</li>
                <li className="menuLi"><Link to='/create' style={{textDecoration: "none", color: "#FFFFFF"}}>Create new post</Link></li>
            </ul>
        </div>
    );
};

export default SideMenu;
