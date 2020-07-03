import React from "react";
import s from "./Header.module.css"
import Searchbar from "./Searchbar/Searchbar";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";

const Header = () => {
    return (
        <header className={s.header}>
            <Logo/>
            <Searchbar/>
            <Links/>
        </header>
    );
};

export default Header;
