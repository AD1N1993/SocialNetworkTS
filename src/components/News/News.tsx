import React from "react";
import "./News.scss"
const News = () => {
    return(
        <div>
            <h2>My News</h2>

    <div className="red green">текст</div>

        <div className="red"><div className="green">текст</div></div>

        <div className="red"><div className="green" id="black">текст</div></div>
        </div>
    );
}

export default News;