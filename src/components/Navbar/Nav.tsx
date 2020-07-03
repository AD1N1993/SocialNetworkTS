import React from "react";
import s from "./Nav.module.css";
const Navbar = () => {
  return (
	<nav className={s.nav}>
	  <ul className={s.navList}>
		<li className={s.navListItem}>
		  <a className={s.navListLink} href="#">
              <img className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
              Profile</a>
		</li>
		<li className={s.navListItem}>
		  <a className={s.navListLink} href="#">
              <img className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
              Messages</a>
		</li>
		<li className={s.navListItem}>
		  <a className={s.navListLink} href="#">
              <img className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
              News</a>
		</li>
		<li className={s.navListItem}>
		  <a className={s.navListLink} href="#">
              <img  className={s.ico} src="https://image.flaticon.com/icons/svg/1289/1289812.svg" alt="ico"/>
              Music</a>
		</li>
	  </ul>
	</nav>
  );
};

export default Navbar;
