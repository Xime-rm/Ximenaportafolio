import React from "react";

export const CardReferences = ({contenName, contentCargo, contentTelefono, contentCorreo}) =>{
    return(
        <div>
            <h2>{contenName}</h2>
            <h2>{contentCargo}</h2>
            <h2>{contentTelefono}</h2>
            <h2>{contentCorreo}</h2>
        </div>
    )
}