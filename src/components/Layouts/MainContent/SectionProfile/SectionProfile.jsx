import React from "react";
import './SectionProfile.css'
import { Titles } from "../../../UI/Titles/Titles";


export const SectionProfile = () =>{
    return(
        <section className="SectionProfile">
                  <Titles url='/Image/logo.png' content='PERFIL' style='titleProfile'/>
                  <p>Estudiante de Ingeniería en Programación con sólida formación en lenguajes de programación como Java
                    y JavaScript, interfaces HTML, CSS y frameworks como React. Experiencia en base de datos MySQL y
                    manejo de repositorios con Git. Apasionado por la tecnología y con gran capacidad de aprendizaje,
                    trabajo en equipo y resolución de problemas.</p>
        </section>
    )
}