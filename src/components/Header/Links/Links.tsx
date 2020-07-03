import React from "react";
import s from "./Links.module.css";

const Links = () => {
    return(
        <div className={s.headerNav}>
            <ul className={s.headerNavList}>
                <li className={s.headerNavLink} ><a href="#">
                    <img  className= {s.linkLogo} src="https://scontent.fmsq2-1.fna.fbcdn.net/v/t1.30497-1/cp0/c7.0.24.24a/p24x24/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=hScbpuUBJEwAX_yEJlI&_nc_ht=scontent.fmsq2-1.fna&oh=42cb64d61380e545f4d7f9c5165cf9e3&oe=5F1BC8A7" alt="O"/>
                    Profile</a></li>
                <li className={s.headerNavLink}><a href="#">Home</a></li>
                <li className={s.headerNavLink}><a href="#">Find Friends</a></li>
                <li className={s.headerNavLink}><a href="#">Create</a></li>
            </ul>
        </div>
    );
}

export default Links;