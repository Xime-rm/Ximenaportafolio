import React from 'react'
import './SectionExperiencia.css'
import { Titles} from '../../../UI/Titles/Titles.jsx'

export const SectionExperiencia = () =>{
    return(
        <section className='sectionExperiencia'>
            <Titles url='/Image/logo.png' content='EXPERIENCIA' style='titleExperiencia'/>
            <div className='boxExperiencia'>
                <img src="/Image/REACT.png" alt="" />
                <img src="/Image/node.png" alt="" />
                <img src="/Image/mongo.png" alt="" />
                <img src="/Image/java.png" alt="" />
            </div>
        </section>
    )
}
