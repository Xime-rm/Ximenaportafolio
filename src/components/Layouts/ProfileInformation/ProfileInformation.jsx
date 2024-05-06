import React from "react";
import './ProfileInformation.css'
import { ImagePerfil } from "../../UI/ImagePerfil/ImagePerfil";
import { Navbar } from "../../UI/Navbar/Navbar";
import { Titles } from "../../UI/Titles/Titles";
import { SocialMedia } from "../../UI/SocialMedia/SocialMedia";

export const ProfileInformation = () =>{
    return(
        <header>
            <div className="boxImage">
                <ImagePerfil />
            </div>
            <Titles content='XIMENA RAMIREZ' style='boxTitle'/>
            <Navbar />
            <div className="logo">
                <img src="/Image/logo.png" alt="" />
            </div>
            <SocialMedia />
        </header>
    )
}
