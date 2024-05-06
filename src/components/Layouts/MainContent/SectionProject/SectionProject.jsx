import React from "react";
import './SectionProject.css'
import { Titles } from "../../../UI/Titles/Titles";
import { BoxContent } from "../../../UI/BoxContent/BoxContent";

export const SectionProject = () =>{
    return(
        <section className="Sectionproject">
                 <Titles url='/Image/logo.png' content='PROJECTS' style='titleProject'/>

                 <div className="blockCard">
                 <BoxContent style='cardProject' url='/Image/logo.png' contentTitle='TITLE' contentText='Este es mi proyecto' contentAncla='click'/>
                 <BoxContent style='cardProject' url='/Image/logo.png' contentTitle='TITLE' contentText='Este es mi proyecto' contentAncla='click'/>
                 <BoxContent style='cardProject' url='/Image/logo.png' contentTitle='TITLE' contentText='Este es mi proyecto' contentAncla='click'/>
                 <BoxContent style='cardProject' url='/Image/logo.png' contentTitle='TITLE' contentText='Este es mi proyecto' contentAncla='click'/>
                 </div>
        </section>
    )
}