import React from "react";
import s from "./Logo.module.scss";

const Logo = () => {
    return (
        <a className={s.link} href="#">
            <img className={s.logo}
                 src="https://i.pinimg.com/originals/fa/17/c8/fa17c85d9a88e2361253a6fba7bde385.png"
                 alt="F"/></a>
    );
}

export default Logo
