import { useState } from 'react';
import './Menu.css'
const MenuIcon = ({open, onClick}) => {

    return(
        <div className="menu-icon-container" onClick={onClick}>
            <div className={`line first ${open ? "open" : ""}`}></div>
            <div className={`line second ${open ? "open" : ""}`}></div>
            <div className={`line third ${open ? "open" : ""}`}></div>
        </div>
    );
}

export default MenuIcon;