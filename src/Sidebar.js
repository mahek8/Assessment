import React from 'react';
import {NavLink} from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import logo from "./logo.png";
import "./css/sidebar.css";
function Sidebar(){
    return(
        <div>
            <div className="sidebar">
            <img id="logo" src={logo} alt="Logo"></img>
            
            <NavLink to="/Student">
                <PersonOutlineIcon />
                <p>Students</p>
            </NavLink>
            <NavLink  to="/" >
                <LibraryBooksOutlinedIcon />
                <p>Lesson Plan</p>
            </NavLink>
            <NavLink to="/Settings">
                <SettingsOutlinedIcon />
                <p>Settings</p>
            </NavLink>
            </div>
        </div>
    );
}
export default Sidebar;