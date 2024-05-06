import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <ItemNavbar style='nav-home' content='Perfil' />
        <ItemNavbar content='Proyectos' />
        <ItemNavbar content='Referencias' />
        <ItemNavbar content='Experiencia' />
      </ul>
    </nav>
  )
}
