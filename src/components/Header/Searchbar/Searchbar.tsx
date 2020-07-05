import React from "react";
import s from "./Searchbar.module.scss"

const Searchbar = () => {
    return (
            <form className={s.searchBar} action="get">
                <input type="search" className={s.search} placeholder={"Search"}/>
                <button className={s.btn} type={"submit"}>
                    <img className={s.btnImg}
                         src="https://svg-clipart.com/clipart/icon/nQy8yy4-search-icon-white-one-clipart.png"
                         alt="btn"/>
                </button>
            </form>


    );
};

export default Searchbar;