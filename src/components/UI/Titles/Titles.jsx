import React from "react";
import './Titles.css'


export const Titles = ({content,url,style}) =>{
    return(
        <div className={style}>
            <img src={url} alt="" />
            <h1>{content}</h1> 
        </div>
    )
} 