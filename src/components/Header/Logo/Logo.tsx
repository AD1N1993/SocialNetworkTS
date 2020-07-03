import React from "react";
import s from "./Logo.module.css";

const Logo = () => {
    return (
        <a className={s.link} href="#">
            <img className={s.logo}
                 src="https://lh3.googleusercontent.com/proxy/JGLh8vmIN4UGqifw1nwbttljchZY1c-iA6BWOniN0iWwbaM-ChwO-ynm9QxtqzkieAdZmL2vuE6YgPETa_A8ydtQzHflyQNdLhzfQVGish70j47Fm_gjZ3wRpBedozXLhfg97EA_NntAPyajQc9f3TxDZUOxUUj66eYoliR_c41w"
                 alt="F"/></a>
    );
}

export default Logo
