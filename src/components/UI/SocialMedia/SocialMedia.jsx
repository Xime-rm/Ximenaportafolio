import React from 'react'
import './SocialMedia.css'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ItemNavbar } from '../ItemNavbar/ItemNavbar';

export const SocialMedia = () => {
  return (
    <footer>
        <ItemNavbar content={<FaGithubSquare className='icon'/>}/>
        <ItemNavbar content={<FaWhatsappSquare className='icon'/>}/>
        <ItemNavbar content={<FaInstagramSquare className='icon'/>}/>
    </footer>
  )
}
