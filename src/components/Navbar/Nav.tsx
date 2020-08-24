import React from "react";
import s from "./Nav.module.scss";
import {NavLink} from "react-router-dom";
import {Friends} from "./Sidebar/Sidebar";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <NavLink className={s.navListLink} activeClassName={s.active} to="/profile">
                        <img className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
                        Profile</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink className={s.navListLink} activeClassName={s.active} to="/dialogs">
                        <img className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
                        Messages</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink className={s.navListLink} activeClassName={s.active} to="news">
                        <img className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
                        News</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink className={s.navListLink} activeClassName={s.active} to="music">
                        <img className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
                        Music</NavLink>
                </li>
            </ul>
            {/*<Friends friendsData={props.friendsData}/>*/}
        </nav>



    );
};

export default Navbar;
