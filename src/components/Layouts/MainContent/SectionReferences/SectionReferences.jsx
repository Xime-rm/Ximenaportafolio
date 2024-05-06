import React from "react";
import './SectionReferences.css'
import { CardReferences } from "../../../UI/CardReferences/CardReferences";
import { Titles } from "../../../UI/Titles/Titles";


export const SectionReferences = () =>{
    return(
        <section className="SectionReferences">
            <Titles url='/Image/logo.png' content='REFERENCES' style='titleReferences'/>
            <div className="blockCardReferences">
            <CardReferences contenName='Name' contentCargo='Cargo' contentTelefono='telefono' contentCorreo='EMAIL'/>
            <CardReferences contenName='Name' contentCargo='Cargo' contentTelefono='telefono' contentCorreo='EMAIL'/>
            <CardReferences contenName='Name' contentCargo='Cargo' contentTelefono='telefono' contentCorreo='EMAIL'/>
            </div>
        </section>
    )
}