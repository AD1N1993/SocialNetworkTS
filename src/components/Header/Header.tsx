import React from "react";
import s from "./Header.module.scss"
import Searchbar from "./Searchbar/Searchbar";
import Logo from "./Logo/Logo";
import LinksContainer from "./Links/LinksContainer";

const Header = () => {
    return (
        <header className={s.header}>
            <Logo/>
            <Searchbar/>
            <LinksContainer/>

        </header>
    );
};

export default Header;
