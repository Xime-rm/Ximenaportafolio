import React from "react";
import './BoxContent.css'

export const BoxContent = ({style, url, contentTitle, contentText, linkProject, contentAncla}) =>{
    return(
        <div className={style}>
            <div>
                <img src={url} alt="" />
            </div>
            <div>
                <h1>{contentTitle}</h1>
                <p>{contentText}</p>
                <a href={linkProject}>{contentAncla}</a>
            </div>
        </div>
    )
}